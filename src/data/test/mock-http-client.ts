// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { HttpPostClient, HttpPostParams } from 'data/protocols/http/http-post-cliente'

export class HttpPostClientSpy implements HttpPostClient {
  url?: string

  async post (params: HttpPostParams): Promise<void> {
    this.url = params.url
    return Promise.resolve()
  }
}
