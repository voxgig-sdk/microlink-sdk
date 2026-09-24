
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { MicrolinkSDK } from '..'


describe('exists', async () => {

  test('test-mode', () => {
    const testsdk = MicrolinkSDK.test()
    equal(testsdk instanceof MicrolinkSDK, true,
      'MicrolinkSDK.test() must return a client synchronously')
  })

})
