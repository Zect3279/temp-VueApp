export default {
  menuItems: [
    {
      name: 'HOME',
      url: '/'
    },
    {
      name: 'MAIL',
      url: '/inbox',
      subLinks: [
        {
          name: '受信箱',
          url: '/inbox'
        },
        {
          name: '送信箱',
          url: '/sent'
        },
        {
          name: '送信待ち',
          url: '/scheduled'
        },
        {
          name: '下書き',
          url: '/draft'
        },
        {
          name: 'ゴミ箱',
          url: '/trash'
        }
      ]
    },
    {
      name: 'BLOG',
      url: '/blog'
    },
    {
      name: 'GROUP',
      url: '/grouplist',
      subLinks: [
        {
          name: 'list',
          url: '/grouplist'
        }
      ]
    },
    {
      name: 'SCHEDULE',
      url: '/schedule'
    },
    {
      name: 'EXT',
      url: '/ext'
    },
    {
      name: 'SETTING',
      url: '/setting'
    },
    {
      name: 'LABO',
      url: '/about'
    }
  ]
}
