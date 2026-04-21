<template>
  <div style="padding: 16px">
    <h2>Vue 子应用-这是vue的子应用</h2>
    <p>qiankun + vite-plugin-qiankun</p>
    <button @click="handleSetMainStatus">改变主应用的数据</button>
    <button @click="handleIncGlobal">改 globalState</button>
  </div>
</template>

<script setup lang="ts">
import { inject, onMounted, ref } from "vue";

type QiankunProps = {
  incCount?: () => void;
  onGlobalStateChange?: (
    cb: (state: any, prev: any) => void,
    fireImmediately?: boolean,
  ) => void;
  setGlobalState?: (state: Record<string, any>) => void;
};

const props = inject<QiankunProps>("qiankunProps");
const globalCount = ref(0);

onMounted(() => {
  props?.onGlobalStateChange?.((state) => {
    if (typeof state?.count === "number") globalCount.value = state.count;
  }, true);
});

function handleSetMainStatus() {
  props?.incCount?.();
}

function handleIncGlobal() {
  props?.setGlobalState?.({ count: globalCount.value + 1 });
}
</script>
<style>
  h2 {
    color: red;
  }
</style>
