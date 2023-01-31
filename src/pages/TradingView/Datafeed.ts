import { LibrarySymbolInfo } from '../../../public/charting_library/datafeed-api';
import BigNumber from "bignumber.js";
import type {
  ResolveCallback,
  ResolutionString,
  PeriodParams,
  HistoryCallback,
  Bar,
  HistoryMetadata,
  SubscribeBarsCallback,
} from "../../../public/charting_library/charting_library"

const TV_RESOLUTIONS = ['1', '15', '30', '60', '240', '1D']

class Datafeed {
  getBarsData: (
    symbolInfo: LibrarySymbolInfo,
    resolution: string,
    periodParams: PeriodParams,
    onHistoryCallback: HistoryCallback,
  ) => void;

  constructor(
    getBarData: (
      symbolInfo: LibrarySymbolInfo,
      resolution: string,
      periodParams: PeriodParams,
      onHistoryCallback: HistoryCallback,
    ) => void
  ) {
    this.getBarsData = getBarData;
  }

  onReady(callback: (config: any) => void) {
    setTimeout(() => {
      callback({})
    }, 0)
  }

  resolveSymbol(symbolName: string, onResolve: ResolveCallback) {
    console.group('resolveSymbol --------');
    console.log('symbolName: ', symbolName);
    console.groupEnd();

    setTimeout(() => {
      onResolve({
        name: symbolName,
        ticker: symbolName,
        full_name: symbolName,
        description: symbolName,
        timezone: 'Etc/UTC',
        pricescale: 0.1,
        volume_precision: 4,
        supported_resolutions: TV_RESOLUTIONS as ResolutionString[],
        type: 'futures',
        session: '24x7',
        exchange: 'KLineTool',
        listed_exchange: 'KLineTool',
        has_intraday: true,
        has_empty_bars: true,
        format: 'price',
        minmov: 1,
        data_status: 'streaming',
        has_weekly_and_monthly: false, // 月，周数据
      })
    }, 0)
  }

  getBars(
    symbolInfo: LibrarySymbolInfo,
    resolution: string,
    periodParams: PeriodParams,
    onHistoryCallback: HistoryCallback,
  ) {
    console.group('getBars ---------');
    console.log('symbolInfo：', symbolInfo);
    console.log('resolution', resolution);
    console.groupEnd();

    const { getBarsData } = this
    getBarsData(symbolInfo, resolution, periodParams, onHistoryCallback)
  }

  subscribeBars(
    symbolInfo: LibrarySymbolInfo,
    resolution: ResolutionString,
    onRealtimeCallback: SubscribeBarsCallback,
    listenerGuid: string,
    onResetCacheNeededCallback: () => void,
  ) {
    console.group('subscribeBars ----------');
    console.log('symbolInfo: ', symbolInfo);
    console.log('resolution: ', resolution);
    console.log('listenerGuid: ', listenerGuid);
    console.groupEnd();
  }

  unsubscribeBars(listenerGuid: string) {
    console.group('unsubscribeBars ----------');
    console.log('listenerGuid: ', listenerGuid);
    console.groupEnd();

    // if (!this.subscribers[listenerGuid]) {
    //   return;
    // }
    // delete this.subscribers[listenerGuid];
  }

  searchSymbols() {}

  // 拓展方法
}

export default Datafeed
