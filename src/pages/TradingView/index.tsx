import dayjs from "dayjs";
import timezone from 'dayjs/plugin/timezone';
import utc from 'dayjs/plugin/utc';
import React from "react";
import styled from "styled-components";
import { Bar, HistoryCallback, IChartingLibraryWidget, LibrarySymbolInfo, ResolutionString, TradingTerminalWidgetOptions } from "../../../public/charting_library/charting_library";
import { PeriodParams, Timezone } from "../../../public/charting_library/datafeed-api";
import { widget } from "../../../public/charting_library/charting_library"
import Datafeed from "./Datafeed";
import { Button, FileInput } from "@blueprintjs/core"
import { FileDropEvent, appWindow } from '@tauri-apps/api/window';
import { readBinaryFile, BaseDirectory } from '@tauri-apps/api/fs'
import { useMount, useResetState, useUpdateEffect } from "ahooks";
import { filterCSV2BarList } from "./utils";

dayjs.extend(utc)
dayjs.extend(timezone)

type getBarFn = (
  symbolInfo: LibrarySymbolInfo,
  resolution: string,
  periodParams: PeriodParams,
  onHistoryCallback: HistoryCallback,
) => void

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

const TradingViewKLine = () => {
  const datafeedRef = React.useRef<Datafeed>();
  const widgetRef = React.useRef<IChartingLibraryWidget>();

  const historyMapRef = React.useRef<HistoryCallback>();
  const [barList, setBarList] = React.useState<Bar[]>([]);
  
  const getBarRef = React.useRef<getBarFn>();
  const getBarData = React.useCallback((
    symbolInfo: LibrarySymbolInfo,
    resolution: string,
    periodParams: PeriodParams,
    onHistoryCallback: HistoryCallback,
  ) => {
    console.log('调起数据', symbolInfo, barList);
    if (barList.length > 0) {
      onHistoryCallback(barList, { noData: false })
    }
  }, [barList])
  React.useEffect(() => {
    getBarRef.current = getBarData
  }, [getBarData]);


  const onChartReday = React.useCallback(() => {
    console.log('k线图初始化')
  }, [])

  const destroyChart = React.useCallback(() => {
    if (widgetRef.current) {
      widgetRef.current.remove()
      widgetRef.current = undefined
    }
  }, [])

  const initChart = React.useCallback(() => {
    try {
      console.group('初始化图表');
      console.groupEnd();

      destroyChart();

      const datafeed = new Datafeed(getBarRef.current as getBarFn)
      datafeedRef.current = datafeed

      const widgetOptions: TradingTerminalWidgetOptions = {
        debug: false,
        container: 'kline-scene',
        interval: '1' as ResolutionString,
        locale: 'zh',
        library_path: '/charting_library/',
        // custom_css_url: '/charting_library/origin.css',
        symbol: 'LOCAL',
        datafeed,
        width: 1200,
        height: 712,
        timeframe: '1M', // 设定时间范围
        timezone: dayjs.tz.guess() as Timezone,
        disabled_features: [
          'compare_symbol',
          // 'use_localstorage_for_settings',
          'go_to_date',
          // 'timeframes_toolbar',
          'volume_force_overlay',
          'header_screenshot',
          'header_compare',
          'header_interval_dialog_button',
          'header_resolutions',
          'header_saveload',
          'show_interval_dialog_on_key_press',
          'header_symbol_search',
          'header_undo_redo',
          'header_widget',
          // 交易终端
          'support_multicharts',
          'header_layouttoggle',
          'broker_button',
          'right_toolbar',
          'order_info',
          'order_panel',
          'add_to_watchlist',
          'footer_screenshot',
          'open_account_manager',
          'trading_account_manager',
          'adaptive_logo',
        ],
        enabled_features: ['hide_left_toolbar_by_default'],
        customFormatters: {
          dateFormatter: {
            format(date) {
              return dayjs.utc(date).format('YYYY/MM/DD');
            },
            formatLocal(date) {
              return dayjs(date).format('YYYY/MM/DD');
            },
          },
          timeFormatter: {
            format(time) {
              return dayjs.utc(time).format('HH:mm');
            },
            formatLocal(time) {
              return dayjs(time).format('HH:mm');
            },
          },
        },
      }
      widgetRef.current = new widget(widgetOptions)
      widgetRef.current.onChartReady(onChartReday);
    } catch (error) {
      
    }
  }, []);

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
      console.log('result', result)
      setBarList(result)
    }
    fileReader.readAsText(file, 'utf-8')
  }, [])

  React.useEffect(() => {
    if (barList.length > 0) {
      initChart()
    }
  }, [barList]);

  return (
    <Wrapper>
      <div className="top">
        <FileInput title={fileText} buttonText="选择" inputProps={{ accept: "text/csv", acceptCharset: "utf-8" }} text={fileText} onInputChange={handleChooseFile} />
      </div>
      <div id="kline-scene"></div>
    </Wrapper>
  )
}

export default TradingViewKLine;
