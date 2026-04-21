import { initGlobalState } from "qiankun";

const w = window as any;
export const actions =
  w.__QIANKUN_GLOBAL_ACTIONS__ ?? (w.__QIANKUN_GLOBAL_ACTIONS__ = initGlobalState({ count: 0 }));

