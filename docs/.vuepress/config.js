module.exports = {
  title: '深海小海豚',
  description: '深海小海豚的笔记',
  head:[
    ['meta',{name:'keywords',content:'深海小海豚'}],
    ['meta',{name:'keywords',content:'海豚'}],
    ['link',{rel:'icon',href:'/assets/img/logo.ico'}]
  ],
  themeConfig: {
    lastUpdated: '更新时间', // string | boolean
    logo: '/assets/img/logo.png',
    sidebar: 'auto',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'About', link: '/about' },
      // {
      //   text: 'Languages',
      //   items: [
      //     { text: 'Group1', items: [/*  */] },
      //     { text: 'Group2', items: [/*  */] }
      //   ]
      // },
      // { text: 'External', link: 'https://google.com' },
    ]
  },

}