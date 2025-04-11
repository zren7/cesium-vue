import * as Cesium from 'cesium'

export const addWater = (viewer) => {
  viewer.scene.primitives.add(
    new Cesium.Primitive({
      geometryInstances: new Cesium.GeometryInstance({
        geometry: new Cesium.PolygonGeometry({
          polygonHierarchy: new Cesium.PolygonHierarchy(
            Cesium.Cartesian3.fromDegreesArray([
              121.504000499529326, 31.217192608766933, 121.507669984643798, 31.217308837431887,
              121.507579380073039, 31.219478412949009, 121.505586079517073, 31.223778674403096,
              121.502279012685534, 31.22834990898173, 121.499289061851499, 31.231574820691595,
              121.494668228744459, 31.235293501160101, 121.491666952339102, 31.237433612884125,
              121.490942115773294, 31.238479441702147, 121.490624999775733, 31.241035863401628,
              121.492754207187815, 31.243088697405206, 121.499504247706966, 31.245993574939906,
              121.504804615094528, 31.247078039647072, 121.521294646966851, 31.246923116879955,
              121.525281248078826, 31.247581536884834, 121.524103388659398, 31.251696557901273,
              121.520977530969319, 31.251154353625811, 121.516356697862236, 31.251115624629836,
              121.508292891067512, 31.251270540518398, 121.503083128250708, 31.250805792090176,
              121.499821363704541, 31.250341041374362, 121.491576347768387, 31.247242644808615,
              121.487952164939301, 31.24511243819526, 121.487136723802749, 31.243563166840939,
              121.486502491807656, 31.242478661771102, 121.486366584951568, 31.238798998198217,
              121.487272630658836, 31.236358721200414, 121.490262581492814, 31.233453547346539,
              121.497148528868067, 31.228553285043727, 121.500953920838612, 31.224446940714007,
              121.502856616823863, 31.221425177166669, 121.504000499529326, 31.217192608766933,
            ]),
          ),
          height: 27,
          vertexFormat: Cesium.VertexFormat.DEFAULT,
        }),
      }),
      appearance: new Cesium.EllipsoidSurfaceAppearance({
        material: new Cesium.Material({
          fabric: {
            type: 'Water',
            uniforms: {
              baseWaterColor: new Cesium.Color(64 / 255.0, 157 / 255.0, 200 / 255.0, 0.5),
              // specularMap: Cesium.buildModuleUrl(
              //   'Assets/Textures/waterNormals.jpg',
              // ), // 反射贴图
              normalMap: Cesium.buildModuleUrl('Assets/Textures/waterNormals.jpg'),
              // normalMap: './image.png',
              frequency: 1000.0,
              animationSpeed: 0.1,
              amplitude: 10,
              specularIntensity: 10,
            },
          },
        }),
      }),
    }),
  )
  const center = Cesium.Cartesian3.fromDegrees(121.507762, 31.233975)
  viewer.camera.lookAt(center, new Cesium.Cartesian3(0.0, -47900.0, 39300.0))
  viewer.camera.lookAtTransform(Cesium.Matrix4.IDENTITY)
}
