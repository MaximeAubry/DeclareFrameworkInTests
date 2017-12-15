import oroneMaterial from '../../orone-material'
import MdPageLoad from './MdPageLoad'

export default Vue => {
  oroneMaterial(Vue)
  Vue.component(MdPageLoad.name, MdPageLoad)
}
