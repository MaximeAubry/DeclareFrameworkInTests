import 'regenerator-runtime/runtime'
import oroneMaterial from './orone-material'
import * as MdComponents from './components/'

let VueOroneMaterial = Vue => {
  oroneMaterial(Vue)
  Object.values(MdComponents).forEach((MdComponent) => {
    Vue.use(MdComponent)
  })
}

VueOroneMaterial.version = '1.0.0'

export default VueOroneMaterial
