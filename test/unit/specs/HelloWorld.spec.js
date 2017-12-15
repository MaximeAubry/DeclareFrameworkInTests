// import Vue from 'vue'
import HelloWorld from '@/components/HelloWorld'
import VueRouter from 'vue-router'
import { router } from '@/router/router.js'

import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import flushPromises from 'flush-promises'
import { createLocalVue, mount } from 'vue-test-utils'
import VueMaterial from 'vue-material'
import VueOroneMaterial from '@/plugins/vue-orone-material'
import es6Promise from 'es6-promise'

es6Promise.polyfill()
const localVue = createLocalVue()
localVue.use(VueMaterial)
localVue.use(VueOroneMaterial)
localVue.use(VueRouter)

describe('HelloWorld.vue', () => {
  var mockApi = null

  beforeEach(() => {
    mockApi = new MockAdapter(axios)
  })

  afterEach(() => {
    mockApi.restore()
  })

  it('should render correct contents', async () => {
    mockApi.onGet('http://headers.jsontest.com').reply(200, {
      'X-Cloud-Trace-Context': 'd53f0b22c4e3bf714d8e90c205381759/4507705511309572459',
      'Upgrade-Insecure-Requests': '1',
      'Accept-Language': 'en-US,en;q=0.9,fr;q=0.8',
      'Host': 'headers.jsontest.com',
      'Referer': 'http://www.jsontest.com/',
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.84 Safari/537.36',
      'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8'
    })

    mount(HelloWorld, {
      localVue,
      router
    })

    await flushPromises()
  })
})
