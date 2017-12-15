const PageloadSwitcher = {
  loading: false,
  isRequestFinished: false,
  start () {
    var $this = this
    $this.isRequestFinished = false
    setTimeout(() => {
      if (!$this.isRequestFinished) {
        $this.loading = true
      }
    }, 500)
  },
  stop () {
    this.isRequestFinished = true
    this.loading = false
  }
}

export default PageloadSwitcher
