import Nav from './config/navC'
import { defineConfig } from 'vuepress/config'
import Sidebar from './config/sidebarCf'
module.exports = defineConfig({
  title: '深海小海豚',
  description: '个人笔记,深海小海豚的个人笔记',
  head: [
    ['meta', { name: 'keywords', content: '海豚,个人笔记,深海小海豚,深海小海豚的个人笔记' }],
    ['link', { rel: 'icon', href: '/assets/img/logo.ico' }]
  ],
  themeConfig: {
    lastUpdated: '上次更新',
    logo: '/assets/img/logo.png',
    sidebar:Sidebar,
    nav: Nav,
    docsDir:'docs',
    docsBranch:'master',
    editLinks: true,
    // 默认为 "Edit this page"
    editLinkText: '编辑页面'
  },

})
