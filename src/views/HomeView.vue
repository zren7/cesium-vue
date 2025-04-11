<script setup>
import * as Cesium from 'cesium'
import 'cesium/Build/Cesium/Widgets/widgets.css'
import { onMounted } from 'vue'
import { addGltf } from './hooks/gltf'
import { addWater } from './hooks/water'

const instMap = async () => {
  const viewer = new Cesium.Viewer('cesiumContainer', {
    animation: false, // 隐藏动画控件
    baseLayerPicker: false, // 隐藏图层选择控件
    fullscreenButton: false, // 隐藏全屏按钮
    vrButton: false, // 隐藏VR按钮，默认false
    geocoder: false, // 隐藏地名查找控件
    homeButton: false, // 隐藏Home按钮
    infoBox: false, // 隐藏点击要素之后显示的信息窗口
    sceneModePicker: false, // 隐藏场景模式选择控件
    selectionIndicator: true, // 显示实体对象选择框，默认true
    timeline: false, // 隐藏时间线控件
    navigationHelpButton: false, // 隐藏帮助按钮
    scene3DOnly: true, // 每个几何实例将只在3D中呈现，以节省GPU内存
    shouldAnimate: true, // 开启动画自动播放
    sceneMode: 3, // 初始场景模式 1：2D 2：2D循环 3：3D，默认3
    requestRenderMode: true, // 减少Cesium渲染新帧总时间并减少Cesium在应用程序中总体CPU使用率
  })
  // 开启帧率
  viewer.scene.debugShowFramesPerSecond = true
  viewer.scene.postProcessStages.fxaa.enabled = true
  viewer.scene.globe.depthTestAgainstTerrain = true

  // 清除默认地形
  viewer.terrainProvider = await Cesium.createWorldTerrainAsync({
    // requestWaterMask: true, // 请求水掩膜以实现水体效果
    // requestVertexNormals: true, // 请求法线以实现光照效果
  })

  addGltf(viewer)
  addWater(viewer)
}

onMounted(() => {
  instMap()
})
</script>

<template>
  <main>
    <div class="map" id="cesiumContainer"></div>
  </main>
</template>

<style scoped>
.map {
  height: 100vh;
  width: 100%;
  overflow: hidden;
}
</style>
