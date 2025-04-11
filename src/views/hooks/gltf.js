import * as Cesium from 'cesium'

export const addGltf = (viewer) => {
  var position = Cesium.Cartesian3.fromDegrees(121.507762, 31.233975, 200)
  var heading = Cesium.Math.toRadians(215)
  var pitch = Cesium.Math.toRadians(0)
  var roll = Cesium.Math.toRadians(0)
  var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll)
  var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr)
  var entity = viewer.entities.add({
    position: position,
    orientation: orientation,
    model: {
      uri: 'https://data.mars3d.cn/gltf/mars/shanghai/pudong/scene.gltf',
      scale: 520,
    },
  })

  viewer.flyTo(entity)
}
