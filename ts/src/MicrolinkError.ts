
import { Context } from './Context'


class MicrolinkError extends Error {

  isMicrolinkError = true

  sdk = 'Microlink'

  code: string
  ctx: Context

  constructor(code: string, msg: string, ctx: Context) {
    super(msg)
    this.code = code
    this.ctx = ctx
  }

}

export {
  MicrolinkError
}

