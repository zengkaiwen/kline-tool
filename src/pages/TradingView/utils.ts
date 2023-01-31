import { Bar } from "../../../public/charting_library/charting_library"
import { uniqBy } from "lodash-es"

export const filterCSV2BarList = (content: string) => {
  if (!content) return []
  const contentList = content.split('\n')
  contentList.shift() // 去除首行的表头数据
  contentList.pop() // 去除尾部空数据
  const len = contentList.length
  const resultList: Bar[] = [];
  for (let i = len -1 ; i >= 0; i--) {
    const item = contentList[i]
    const dataList = item.split(',')
    const data: Bar = {
      time: new Date(dataList[1]).getTime(),
      high: Number(dataList[2]),
      low: Number(dataList[3]),
      open: Number(dataList[4]),
      close: Number(dataList[5]),
      volume: Number(dataList[6]),
    }
    resultList.push(data)
  }
  // console.log('没有去重', resultList)
  return uniqBy(resultList, 'time')
}

// const content = `
// ,datetime,high,low,open,close,vol,ask1,bid1,duo_open,duo_close,kong_open,kong_close,ma_30
// 0,2022-09-01 09:00:00,11019.0,11019.0,11019.0,11019.0,30.0,11021.0,11020.0,,,,,
// 1,2022-09-01 09:00:00,11019.0,11019.0,11019.0,11019.0,37.0,11019.0,11018.0,,,,,
// 2,2022-09-01 09:00:00,11019.0,11018.0,11019.0,11018.0,44.0,11018.0,11016.0,,,,,
// `
// console.log(filterCSV2BarList(content))