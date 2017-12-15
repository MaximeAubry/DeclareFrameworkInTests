import PageloadSwitcher from './core/pageloadSwitcher'

const init = () => {
  let oroneMaterial = {
    PageloadSwitcher: PageloadSwitcher
  }
  return oroneMaterial
}

export default Vue => {
  if (!Vue.OroneMaterial) {
    var oroneMaterial = init()
    Vue.OroneMaterial = oroneMaterial
    Vue.prototype.OroneMaterial = oroneMaterial
  }
}
