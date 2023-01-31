import React from 'react'
import { init, OverlayMode } from 'klinecharts'
import styled from 'styled-components'
import { FileInput } from '@blueprintjs/core'
import { useMount, useResetState } from 'ahooks'
import type { Chart } from 'klinecharts/types'
import { filterCSV2BarList, ISignPoint } from './utils'

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  .top {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 60px;
    padding: 0 40px;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.04);
    z-index: 100;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
  }
  #kline-scene {
    position: absolute;
    top: 60px;
    left: 0;
    right: 0;
    bottom: 0;
  }
`

function SimpleKLine() {
  const chartRef = React.useRef<Chart | null>(null)

  const [fileText, setFileText, resetFileText] = useResetState('选择一个CSV文件')
  const handleChooseFile = React.useCallback((e: any) => {
    console.log('选择了文件', e)
    const file = e.target.files[0]

    // 判断是不是 csv 文件
    console.log(file.name)
    if (file.name.indexOf('.csv') === -1) {
      alert('请选择正确的 CSV 文件')
      return;
    }

    setFileText(file.name)
    const fileReader = new FileReader()
    fileReader.onprogress = (ev) => {
      console.log('读取中', ev.loaded, ev.total)
    }
    fileReader.onloadend = (evt) => {
      const content = evt.target?.result as string
      const result = filterCSV2BarList(content)
      if (!result) return
      console.log('result', result)
      chartRef.current?.applyNewData(result[0])
      chartRef.current?.createIndicator('MACD')

      // 循环标记
      for (let i=0; i< result[1].length; i++) {
        const sign: ISignPoint = result[1][i];
        chartRef.current?.createOverlay({
          name: 'simpleAnnotation',
          groupId: sign.type,
          points: [
            { timestamp: sign.timestamp, value: sign.value }
          ],
          styles: {
            text: {
              color: sign.type === 'duo_open' ? '#00BA6C' : '#E55D75'
            }
          },
          lock: true,
          mode: 'weak_magnet' as OverlayMode,
          extendData: sign.type === 'duo_open' ? 'Open' : 'Close'
        })
      }
    }
    fileReader.readAsText(file, 'utf-8')
  }, [])

  useMount(() => {
    if (chartRef.current !== null) return
    chartRef.current = init('kline-scene')
  })

  return (
    <Wrapper>
      <div className="top">
        <FileInput title={fileText} buttonText="选择" inputProps={{ accept: "text/csv", acceptCharset: "utf-8" }} text={fileText} onInputChange={handleChooseFile} />
      </div>
      <div id="kline-scene"></div>
    </Wrapper>
  )
}

export default SimpleKLine
