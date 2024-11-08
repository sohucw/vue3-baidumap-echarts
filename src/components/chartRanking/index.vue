<script setup lang="ts">
import { reactive } from 'vue'

defineOptions({
  name: 'ComponentsName'
})

const config = reactive({
  rowNum: 8,
  color: '#37a2da',
  data: [
    {
      name: '大伟聊前端能源消耗',
      value: 100
    },
    {
      name: '大伟聊前端火能源消耗',
      value: 95
    },
    {
      name: '大伟聊前端能源消耗',
      value: 89
    },
    {
      name: '大伟聊前端能源消耗',
      value: 86
    },
    {
      name: '大伟聊前端源消耗',
      value: 80
    },
    {
      name: '大伟聊前端能源消耗',
      value: 78
    },
    {
      name: '大伟聊前端能源消耗',
      value: 70
    },
    {
      name: '大伟聊前端能源消耗',
      value: 65
    },
    {
      name: '大伟聊前端能源消耗',
      value: 59
    },
    {
      name: '大伟聊前端能源消耗',
      value: 40
    },
    {
      name: '大伟聊前端能源消耗',
      value: 30
    }
  ],
  unit: '% 满意度'
})
</script>

<template>
  <dv-scroll-ranking-board
    :config="config"
    style="width: calc(100% - 1rem); height: calc(100% - 2rem); margin-left: 0.5rem"
  />
</template>

<style lang="scss" scoped></style>
