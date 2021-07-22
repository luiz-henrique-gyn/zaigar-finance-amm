import { MenuEntry } from '@zaigar-finance/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: "https://zaigar.finance",
  },
  {
    label: 'Exchange',
    icon: 'ExchangeIcon',
    href: "/swap",
  },  
  {
    label: 'Liquidity',
    icon: 'LiquidityIcon',
    href: "/pool",
  },   
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: 'https://zaigar.finance/farms',
  },
  {
    label: 'Pools',
    icon: 'PoolIcon',
    href: 'https://zaigar.finance/pools',
  },
  // {
  //   label: 'Pools',
  //   icon: 'PoolIcon',
  //   href: '/pools',
  // },
  // {
  //   label: 'Lottery',
  //   icon: 'TicketIcon',
  //   href: '/lottery',
  // },
  // {
  //   label: 'NFT',
  //   icon: 'NftIcon',
  //   href: '/nft',
  // },
  {
    label: 'Info',
    icon: 'InfoIcon',
    items: [
    //  {
     //   label: 'CoinMarketCap',
    //    href: 'https://coinmarketcap.com/currencies/zaigar-finance/',
    //  },     
      {
        label: 'Price Chart',
        href: 'https://goswapp-bsc.web.app/0x0288D3E353fE2299F11eA2c2e1696b4A648eCC07',
      },      
      {
        label: 'Github',
        href: 'https://github.com/zaigar-finance/',
      },
      {
        label: 'PancakeSwap',
        href: 'https://pancakeswap.info/token/0x0288D3E353fE2299F11eA2c2e1696b4A648eCC07',
      },
  //    {
 //       label: 'Add to Metamask',
 //       href: 'https://bit.ly/3sSDdrB',
 //     },    
    ],
  },
   {
    label: 'zaigar.com',
    icon:  'GroupsIcon',
    href: 'https://zaigar.com',
  },
//   {
//    label: 'Audit By Certik',
//    icon: 'AuditIcon',
//    href: 'https://certik.org/projects/zcore',
//  },  
//   {
//    label: 'Docs',
//    icon: 'GitbookIcon',
//    href: 'https://docs.zcore.fi/',
//  },   
]

export default config
