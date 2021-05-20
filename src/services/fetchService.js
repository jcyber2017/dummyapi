import posts from '../mocks/posts'
import comments from '../mocks/comments'
import user from '../mocks/user'

const BASE_URL = 'https://dummyapi.io/data/api'
const APP_ID = '60a67d8be152af2c55cd1386'

export class jsonService {
  async getAllPosts() {
    return posts
  }

  async getPostsByTag(tagTitle) {
    console.log(tagTitle)
    return posts
  }

  async getPostCommentList(postId) {
    console.log(postId)
    return comments
  }

  async getUser(userId) {
    console.log(userId)
    return user
  }
}

export class httpService {
  async getData(url) {
    const headers = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'app-id': APP_ID
      }
    }
    return fetch(url, headers).then(data => data.json())
  }
  async getAllPosts() {
    const url = `${BASE_URL}/post`
    return this.getData(url)
  }

  async getPostsByTag(tagTitle) {
    const url = `${BASE_URL}/tag/${tagTitle}/post`
    return this.getData(url)
  }

  async getPostCommentList(postId) {
    const url = `${BASE_URL}/post/${postId}/comment`
    return this.getData(url)
  }

  async getUser(userId) {
    const url = `${BASE_URL}/user/${userId}`
    return this.getData(url)
  }
}

export class fetchService {
  constructor(service) {
    this.service = service
  }

  async getAllPosts() {
    return this.service.getAllPosts()
  }

  async getPostsByTag(tagTitle) {
    return this.service.getPostsByTag(tagTitle)
  }

  async getPostCommentList(postId) {
    return this.service.getPostCommentList(postId)
  }

  async getUser(userId) {
    return this.service.getUser(userId)
  }
}
