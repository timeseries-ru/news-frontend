import FakeLayout from './fake_layout.js'

const endpoint = 'http://51.15.75.134/endpoint'
const useFakes = false

export default class DataLoader {
  constructor (axios) {
    this.axios = axios
  }

  async getLayout (filters) {
    if (useFakes) {
      return FakeLayout
    } else {
      const response = await this.axios.get(endpoint + '/layout', {
        params: filters || {}
      })
      return response.data
    }
  }

  async getPosts () {
    if (useFakes) {
      return require('./fake_posts.json')
    } else {
      const response = await this.axios.get(endpoint + '/posts')
      return response.data
    }
  }

  async getPost (postId) {
    if (useFakes) {
      return require('./fake_posts.json').filter(post => post.id === postId)[0]
    } else {
      const response = await this.axios.get(endpoint + '/post/' + postId)
      return response.data
    }
  }
}
