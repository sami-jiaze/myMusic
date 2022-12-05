const axios = require('axios')
// const getSecuritySign = require('./sign.js')

const ERR_OK = 0
// const token = 5381

// const commonParams = {
//   g_tk: 1278911659,
//   loginUin: 0,
//   hostUin: 0,
//   inCharset: 'utf8',
//   outCharset: 'utf-8¬ice=0',
//   notice: 0,
//   needNewCode: 0,
//   format: 'json',
//   platform: 'yqq'
// }

// 获取一个随机数值
// function getRandomVal (prefix = '') {
//   return prefix + (Math.random() + '').replace('0.', '')
// }

// 封装axios的get请求
// 修改请求的 headers值，合并公共请求参数
function get (url, params) {
  return axios.get(url, {
    // headers: {
    //   referer: 'https://y.qq.com/',
    //   origin: 'https://y.qq.com/'
    // },
    // params: Object.assign({}, commonParams, params)
    params: params
  })
}

// 注册后端路由
function registerRouter (app) {
  registerRecommend(app)
}

// 注册推荐列表接口路由
function registerRecommend (app) {
  app.get('/api/getRecommend', (req, res) => {
    const url = 'https://u.y.qq.com/cgi-bin/musicu.fcg'
    // 构造请求data参数
    // const data = JSON.stringify({
    //   comm: { ct: 24 },
    //   recomPlaylist: {
    //     method: 'get_hot_recommend',
    //     param: { async: 1, cmd: 2 },
    //     module: 'playlist.HotRecommendServer'
    //   },
    //   focus: { module: 'music.musicHall.MusicHallPlatform', method: 'GetFocus', param: {} }
    // })
    const data = '{"comm":{"ct":24},"category":{"method":"get_hot_category","param":{"qq":""},"module":"music.web_category_svr"},"recomPlaylist":{"method":"get_hot_recommend","param":{"async":1,"cmd":2},"module":"playlist.HotRecommendServer"},"playlist":{"method":"get_playlist_by_category","param":{"id":8,"curPage":1,"size":40,"order":5,"titleid":8},"module":"playlist.PlayListPlazaServer"},"new_song":{"module":"QQMusic.MusichallServer","method":"GetNewSong","param":{"type":0}},"new_album":{"module":"QQMusic.MusichallServer","method":"GetNewAlbum","param":{"type":0,"category":"-1","genre":0,"year":1,"company":-1,"sort":1,"start":0,"end":39}},"toplist":{"module":"music.web_toplist_svr","method":"get_toplist_index","param":{}},"focus":{"module":"QQMusic.MusichallServer","method":"GetFocus","param":{}}}'
    // 随机数值
    // const randomVal = getRandomVal('recom')
    // 计算签名值
    // const sign = getSecuritySign(data)

    // 发送get请求
    get(url, {
      // sign,
      // '-': randomVal,
      data
    }).then((response) => {
      console.log(response)
      const data = response.data
      if (data.code === ERR_OK) {
        const focusList = data.focus.data.content
        // console.log(focusList)
        const sliders = []
        // const jumpPrefixMap = {
        //   10002: 'https://y.qq.com/n/yqq/album/',
        //   10014: 'https://y.qq.com/n/yqq/playlist/',
        //   10012: 'https://y.qq.com/n/yqq/mv/v/'
        // }
        // 最多获取10条数据
        const len = Math.min(focusList.length, 10)
        for (let i = 0; i < len; i++) {
          const item = focusList[i]
          const sliderItem = {}
          // 单个轮播图数据包括id、pic、link等字段
          sliderItem.id = item.id
          sliderItem.pic = item.pic_info.url
          // if (jumpPrefixMap[item.jumptype]) {
          //   sliderItem.link = jumpPrefixMap[item.jumptype] + (item.subid || item.id) + '.html '
          // } else if (item.jumptype === 3001) {
          //   sliderItem.link = item.id
          // }
          sliders.push(sliderItem)
        }
        // 处理推荐歌单数据
        // 处理推荐歌单数据
        const albumList = data.recomPlaylist.data.v_hot
        // console.log(albumList)
        const albums = []
        for (let i = 0; i < albumList.length; i++) {
          const item = albumList[i]
          const albumItem = {}
          // 推荐歌单数据包括id、username、title、pic等字段
          albumItem.id = item.content_id
          albumItem.username = item.username
          albumItem.title = item.title
          albumItem.pic = item.cover

          albums.push(albumItem)
        }
        // console.log(sliders)
        // console.log(albums)
        // 往前端发送一个标准格式的响应数据，包括成功错误码和数据
        setTimeout(() => {
          res.json({
            code: ERR_OK,
            result: {
              sliders,
              albums
            }
          })
        }, 3000)
      } else {
        res.json(data)
      }
    })
  })
}

module.exports = registerRouter
