import { get } from './base'

// 轮播图
export function getRecommend () {
  return get('/api/getRecommend')
}

// 歌单
export function getPlayList (params) {
  return get('/top/playlist/highquality', {
    limit: params
  })
}
