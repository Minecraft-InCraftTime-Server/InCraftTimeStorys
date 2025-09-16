import type { NavLink } from '../.vitepress/theme/types'

type NavData = {
  title: string
  items: NavLink[]
}

export const NAV_DATA: NavData[] = [
  {
    title: 'A',
    items: [
      {
        icon: 'https://api.mineatar.io/face/5af8302065504dc4b9969cff18d1b228',
        title: 'ID',
        desc: 'Des',
        link: './story/ID',
      },
      {
        icon: 'https://api.mineatar.io/face/<uuid>',
        title: 'ID',
        desc: 'Des',
        link: './story/ID',
      },
      {
        icon: 'https://api.mineatar.io/face/<uuid>',
        title: 'ID',
        desc: 'Des',
        link: './story/ID',
      },
      {
        icon: 'https://api.mineatar.io/face/<uuid>',
        title: 'ID',
        desc: 'Des',
        link: './story/ID',
      },
      {
        icon: 'https://api.mineatar.io/face/<uuid>',
        title: 'ID',
        desc: 'Des',
        link: './story/ID',
      },
    ],
  },
  {
    title: 'B',
    items: [
      {
        icon: 'https://api.mineatar.io/face/<uuid>',
        title: 'ID',
        desc: 'Des',
        link: './story/ID',
      },
      {
        icon: 'https://api.mineatar.io/face/<uuid>',
        title: 'ID',
        desc: 'Des',
        link: './story/ID',
      },
      {
        icon: 'https://api.mineatar.io/face/<uuid>',
        title: 'ID',
        desc: 'Des',
        link: './story/ID',
      },
      {
        icon: 'https://api.mineatar.io/face/<uuid>',
        title: 'ID',
        desc: 'Des',
        link: './story/ID',
      },
      {
        icon: 'https://api.mineatar.io/face/<uuid>',
        title: 'ID',
        desc: 'Des',
        link: './story/ID',
      },
    ],
  },
  {
    title: '更多',
    items: [
      {
        icon: 'https://api.mineatar.io/face/8c18eb4310a243888573d7bcc80fcadd',
        title: 'Nancisama',
        desc: '发动了将活板门变为鞘翅的能力，令全服都为之震惊',
        link: './story/more#nancisama',
      },
      {
        icon: '/unknown.jpg',
        title: 'SB(Somebody)',
        desc: '在主城看到以锭为单位的商店认为这是铁锭换走大量物品并留下传世名言：“铁锭怎么不算锭呢?”',
        link: './story/more#sb-somebody',
      },
      {
        icon: '/unknown.jpg',
        title: 'SB',
        desc: '开启伪潜行后发现自己无法走下方块于是去b站官号下锐评服务器',
        link: './story/more#sb',
      },
      {
        icon: '/unknown.jpg',
        title: 'SB',
        desc: '在空置域捡到了野生的信标',
        link: './story/more#sb-1',
      },
      {
        icon: 'https://api.mineatar.io/face/629398768bf044b1a182f7c4ad401b96',
        title: 'LIUX555',
        desc: '将其他人商店门口盔甲架上的合金盔甲换为铁盔甲   "还知道放回去，你人还怪好的嘞"',
        link: './story/more#liux555',
      },
    ],
  },
]
