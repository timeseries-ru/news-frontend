import FakeLayout from './fake_layout.js'

const endpoint = 'http://your-backend.url/json/endpoint'

export default class DataLoader {
  constructor (axios, useFakes) {
    this.axios = axios
    this.useFakes = useFakes
  }

  async getLayout () {
    if (this.useFakes) {
      return FakeLayout
    } else {
      const response = await this.axios.get(endpoint + '/layout')
      return response.data
    }
  }
}
