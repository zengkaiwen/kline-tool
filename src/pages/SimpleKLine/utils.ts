import { Bar } from "../../../public/charting_library/charting_library"
import { uniqBy } from "lodash-es"
import type { KLineData } from "klinecharts/types"

export interface ISignPoint {
  type: 'duo_open' | 'duo_close';
  timestamp: number;
  value: number;
}

export interface IKlineDataCache extends KLineData {
  sign: string;
  signPrice: number;
}

export const filterCSV2BarList = (content: string): [KLineData[], ISignPoint[]] | undefined => {
  if (!content) return undefined
  const contentList = content.split('\n')
  contentList.shift() // 去除首行的表头数据
  contentList.pop() // 去除尾部空数据
  const len = contentList.length
  const resultList: KLineData[] = [];
  const signList: ISignPoint[] = []
  for (let i = len -1 ; i >= 0; i--) {
    const item = contentList[i]
    const dataList = item.split(',')

    // 记录k线数据
    const timestamp = new Date(dataList[1]).getTime();
    const data: KLineData = {
      timestamp,
      high: Number(dataList[2]),
      low: Number(dataList[3]),
      open: Number(dataList[4]),
      close: Number(dataList[5]),
      volume: Number(dataList[6]),
    }
    resultList.push(data)

    // 记录标记信息
    if (dataList[9]) {
      signList.push({
        timestamp,
        type: 'duo_open',
        value: Number(dataList[5]),
      })
    }
    if (dataList[10]) {
      signList.push({
        timestamp,
        type: 'duo_close',
        value: Number(dataList[5]),
      })
    }
  }
  // console.log('没有去重', resultList)
  const reverseList = uniqBy(resultList, 'timestamp')
  return [reverseList.reverse(), signList]
}

export const filterCSV = (content: string): IKlineDataCache[] | undefined => {
  if (!content) return undefined;
  const contentList = content.split('\n')
  contentList.shift() // 去除首行的表头数据
  contentList.pop() // 去除尾部空数据
  return contentList.map((item) => {
    const dataList = item.split(',');
    return ({
      timestamp: new Date(dataList[1]).getTime(),
      high: Number(dataList[2]),
      low: Number(dataList[3]),
      open: Number(dataList[4]),
      close: Number(dataList[5]),
      volume: Number(dataList[6]),
      sign: dataList[9] ? 'duo_open' : (dataList[10] ? 'duo_close' : ''),
      signPrice: Number(dataList[14]),
    })
  })
}