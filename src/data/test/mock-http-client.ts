// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { HttpPostClient, HttpPostParams } from '../protocols/http/http-post-cliente'

export class HttpPostClientSpy implements HttpPostClient {
  url?: string
  body?: object

  async post (params: HttpPostParams): Promise<void> {
    this.url = params.url
    this.body = params.body
    return Promise.resolve()
  }
}
