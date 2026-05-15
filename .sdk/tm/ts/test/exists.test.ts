
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { MicrolinkSDK } from '..'


describe('exists', async () => {

  test('test-mode', async () => {
    const testsdk = await MicrolinkSDK.test()
    equal(null !== testsdk, true)
  })

})
