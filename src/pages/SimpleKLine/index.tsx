import React from 'react'
import { init, OverlayMode, registerOverlay, utils } from 'klinecharts'
import styled from 'styled-components'
import { Button, ButtonGroup, FileInput } from '@blueprintjs/core'
import { useInterval, useMount, useRafInterval, useResetState } from 'ahooks'
import type { Chart } from 'klinecharts/types'
import { filterCSV, filterCSV2BarList, IKlineDataCache, ISignPoint } from './utils'

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
    .btn-group {
      margin-left: 10px;
    }
    .speed-group {
      margin-left: 10px;
    }
  }
  #kline-scene {
    position: absolute;
    top: 60px;
    left: 0;
    right: 0;
    bottom: 0;
  }
`

let prevTime = Date.now();

function SimpleKLine() {
  const chartRef = React.useRef<Chart | null>(null)

  const [fileText, setFileText, resetFileText] = useResetState('选择一个CSV文件')

  const [isLoading, setIsLoading] = React.useState<boolean>(true);
  const [isStart, setIsStart] = React.useState<boolean>(false);
  const [isPaused, setIsPaused] = React.useState<boolean>(false);
  const [contentList, setContentList] = React.useState<IKlineDataCache[]>([]);
  const [playIndex, setPlayIndex] = React.useState<number>(0);
  const [playSpeed, setPlaySpeed] = React.useState<number>(50);

  const handleChooseFile = React.useCallback((e: any) => {
    console.log('选择了文件', e)
    const file = e.target.files[0]

    // 判断是不是 csv 文件
    console.log(file.name)
    if (file.name.indexOf('.csv') === -1) {
      alert('请选择正确的 CSV 文件')
      return;
    }

    setIsLoading(true)
    setIsStart(false)
    setIsPaused(false)
    setPlayIndex(0)
    setFileText(file.name)
    const fileReader = new FileReader()
    fileReader.onprogress = (ev) => {
      console.log('读取中', ev.loaded, ev.total)
    }
    fileReader.onloadend = (evt) => {
      const content = evt.target?.result as string
      const result = filterCSV(content)
      if (!result) return
      chartRef.current?.applyNewData(result.slice(0, 1))
      setContentList(result);
      setIsLoading(false)
    }
    fileReader.readAsText(file, 'utf-8')
  }, [])

  useInterval(() => {
    // console.log(isLoading, isStart, isPaused)
    if (isLoading || !isStart || isPaused) return;
    const now = Date.now()
    if (now - prevTime < playSpeed) return;
    prevTime = now;
    // console.log('开始')
    const data = contentList[playIndex]
    const sign = data.sign
    chartRef.current?.updateData(data)
    if (sign) {
      chartRef.current?.createOverlay({
        name: 'customSign',
        groupId: sign,
        points: [
          { timestamp: data.timestamp, value: data.close }
        ],
        styles: {
          rectText: {
            color: sign === 'duo_open' ? '#ffffff' : '#ef5350'
          }
        },
        lock: true,
        mode: 'weak_magnet' as OverlayMode,
        extendData: sign === 'duo_open' ? `O` : `C`
      })
    }
    setPlayIndex(playIndex + 1)
  }, 20)

  const handleStart = React.useCallback(() => {
    console.log('设置', isLoading, isStart)
    if (isLoading || isStart) return
    setIsStart(true)
  }, [isLoading, isStart])

  const handlePause = React.useCallback(() => {
    if (isLoading || !isStart || isPaused) return
    console.log('已暂停')
    setIsPaused(true)
  }, [isLoading, isStart, isPaused])

  const handleResume = React.useCallback(() => {
    if (isLoading || !isStart || !isPaused) return
    setIsPaused(false);
  }, [isLoading, isStart, isPaused])

  const handleRePlay = React.useCallback(() => {
    if (isLoading || !isStart || isPaused) return
    setPlayIndex(0);
  }, [isLoading, isStart, isPaused])

  const handleSetPlaySpeed = React.useCallback((speed: number) => {
    setPlaySpeed(speed)
  }, [])

  useMount(() => {
    if (chartRef.current !== null) return
    chartRef.current = init('kline-scene')

    registerOverlay({
      name: 'customSign',
      createPointFigures: ({ overlay, coordinates }) => {
        let text
        if (utils.isValid(overlay.extendData)) {
          if (!utils.isFunction(overlay.extendData)) {
            text = overlay.extendData ?? ''
          } else {
            text = overlay.extendData(overlay)
          }
        }
        const startX: number = coordinates[0].x
        const startY: number = coordinates[0].y
        return [
          {
            type: 'line',
            attrs: {
              coordinates: [{ x: startX, y: startY }, { x: startX + 10, y: startY }],
            },
            styles: {
            }
          },
          {
            type: 'rectText',
            attrs: { x: startX + 10, y: startY + 8, text: text ?? '', align: 'left', baseline: 'bottom' },
            styles: {
              color: overlay.styles?.rectText?.color,
              size: 10,
            },
            ignoreEvent: true
          }
        ]
      }
    })
  })

  return (
    <Wrapper>
      <div className="top">
        <FileInput title={fileText} buttonText="选择" inputProps={{ accept: "text/csv", acceptCharset: "utf-8" }} text={fileText} onInputChange={handleChooseFile} />
        <ButtonGroup className="btn-group">
          <Button disabled={isLoading || isStart} onClick={handleStart}>开始回测</Button>
          <Button disabled={!isStart || isPaused} onClick={handlePause}>暂停</Button>
          <Button disabled={!isStart || !isPaused} onClick={handleResume}>继续</Button>
          {/* <Button disabled={isLoading || !isStart} onClick={handleRePlay}>重播</Button> */}
        </ButtonGroup>
        <ButtonGroup className="speed-group">
          <Button disabled={isLoading || !isStart} active={playSpeed === 300} onClick={() => handleSetPlaySpeed(300)}>x1</Button>
          <Button disabled={isLoading || !isStart} active={playSpeed === 100} onClick={() => handleSetPlaySpeed(100)}>x2</Button>
          <Button disabled={isLoading || !isStart} active={playSpeed === 50} onClick={() => handleSetPlaySpeed(50)}>x3</Button>
          <Button disabled={isLoading || !isStart} active={playSpeed === 20} onClick={() => handleSetPlaySpeed(20)}>x4</Button>
        </ButtonGroup>
      </div>
      <div id="kline-scene"></div>
    </Wrapper>
  )
}

export default SimpleKLine
