import { basename } from 'node:path'
import { defineConfig } from 'vitepress'
import MarkdownPreview from 'vite-plugin-markdown-preview'

import { head, nav, sidebar } from './configs'

const APP_BASE_PATH = basename(process.env.GITHUB_REPOSITORY || '')

export default defineConfig({
  outDir: '../dist',
  base: APP_BASE_PATH ? `/${APP_BASE_PATH}/` : '/',

  lang: 'zh-CN',
  title: 'InCraftTime Stories',
  description: 'InCraftTime的一些神人故事',
  head,

  lastUpdated: true,
  // cleanUrls: true,

  /* markdown 配置 */
  markdown: {
    lineNumbers: true,
  },

  /* 主题配置 */
  themeConfig: {
    i18nRouting: false,

    logo: '/logo.png',

    nav,
    sidebar,

    /* 右侧大纲配置 */
    outline: {
      level: 'deep',
      label: '目录',
    },

    socialLinks: [
      { icon: 'bilibili', link: 'https://www.bilibili.com/video/BV12PdqYcEdB' },
      { icon: 'qq', link: 'https://qm.qq.com/cgi-bin/qm/qr?authKey=upZAZpIgp3I7eJ9yDTmMGi6YMxZBBdjBlX9MNH9xU5We85RkTTFO0%2FvRfaG9ueTv&k=AYF9B_IVtMxbb6Fck-hZCbDDDROzcrIy&noverify=0' },
      { icon: 'github', link: 'https://github.com/Minecraft-InCraftTime-Server' }
    ],

    footer: {
      message: 'Powered By <a href="https://vitepress.dev/">VitePress</a>',
      copyright: 'Generated from <a href="https://github.com/maomao1996/vitepress-nav-template/">maomao1996/vitepress-nav-template</a>',
    },

    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium',
      },
    },
    
    notFound: {
      title: '页面未找到',
      quote:
        '但如果你不改变方向，并且继续寻找，你可能最终会到达你所前往的地方。',
      linkLabel: '前往首页',
      linkText: '带我回首页'
    },

    docFooter: {
      prev: '上一篇',
      next: '下一篇',
    },

    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',

    /*** 自定义配置 ***/
    visitor: {
      badgeId: 'maomao1996.vitepress-nav-template',
    },

    comment: {
      repo: 'maomao1996/vitepress-nav-template',
      repoId: 'R_kgDOJC09Jg',
      category: 'Announcements',
      categoryId: 'DIC_kwDOJC09Js4Cekn0',
    },
  },

  vite: {
    plugins: [MarkdownPreview()],
  },
})
