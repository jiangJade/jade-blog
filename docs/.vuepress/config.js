module.exports = {
  "title": "jadeBlog",
  "description": "和你一起学习一起成长的经历",
  "dest": "public",
  "head": [
    [
      "link",
      {
        "rel": "icon",
        "href": "/favicon.ico"
      }
    ],
    [
      "meta",
      {
        "name": "viewport",
        "content": "width=device-width,initial-scale=1,user-scalable=no"
      }
    ]
  ],
  "theme": "reco",
  "themeConfig": {
    "nav": [
      {
        "text": "Home",
        "link": "/",
        "icon": "reco-home"
      },
      {
        "text": "TimeLine",
        "link": "/timeline/",
        "icon": "reco-date"
      },
      {
        "text": "Contact",
        "icon": "reco-message",
        "items": [
          {
            "text": "NPM",
            "link": "https://www.npmjs.com/~reco_luan",
            "icon": "reco-npm"
          },
          {
            "text": "GitHub",
            "link": "https://github.com/jiangJade",
            "icon": "reco-github"
          },
          {
            "text": "简书",
            "link": "https://www.jianshu.com/u/f2cb422d9345",
            "icon": "reco-jianshu"
          },
          {
            "text": "CSDN",
            "link": "https://blog.csdn.net/recoluan",
            "icon": "reco-csdn"
          },
          {
            "text": "博客圆",
            "link": "https://www.cnblogs.com/luanhewei/",
            "icon": "reco-bokeyuan"
          },
          {
            "text": "WeChat",
            "link": "https://mp.weixin.qq.com/s/mXFqeUTegdvPliXknAAG_A",
            "icon": "reco-wechat"
          }
        ]
      }
    ],
    "type": "blog",
    "blogConfig": {
      "category": {
        "location": 2,
        "text": "Category"
      },
      "tag": {
        "location": 3,
        "text": "Tag"
      }
    },
    "friendLink": [
      {
        "title": "jadeBlog",
        "desc": "Enjoy when you can, and endure when you must.",
        "email": "359813946@qq.com",
        "link": "https://www.jianshu.com/u/f2cb422d9345"
      },
      {
        "title": "jadeBlog",
        "desc": "A simple and beautiful vuepress Blog & Doc theme.",
        "avatar": "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
        "link": "https://www.jianshu.com/u/f2cb422d9345"
      }
    ],
    "logo": "/logo.png",
    "search": true,
    "searchMaxSuggestions": 10,
    "sidebar": "auto",
    "lastUpdated": "Last Updated",
    "author": "jiangJade",
    "authorAvatar": "/avatar.jpg",
    "record": "xxxx",
    "startYear": "2017"
  },
  "markdown": {
    "lineNumbers": true
  },
  // "plugins": [
  //   [
  //     "cursor-effects",
  //     {
  //       "size": 2,                    // size of the particle, default: 2
  //       "shape": ['star'| 'circle'],  // shape of the particle, default: 'star'
  //       "zIndex": 999999999           // z-index property of the canvas, default: 999999999
  //     }
  //   ]
  // ],
  "base": '/jade-blog/'

}