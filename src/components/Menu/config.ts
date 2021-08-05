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
    href: 'https://zaigar.finance/nests',
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
        label: 'ZFAI-Price Chart',
        href: 'https://dex.guru/token/0x205cD59eEA8e8c5083f16D20e1050fD4a7d72037-bsc',
      },      
      {
        label: 'ZFAI-PancakeSwap',
        href: 'https://pancakeswap.info/token/0x205cD59eEA8e8c5083f16D20e1050fD4a7d72037',
      },     
      {
        label: 'ZAIF-Price Chart',
        href: 'https://dex.guru/token/0x280c3fc949b1a1d7a470067ca6f7b48b3cb219c5-bsc',
      },      
      {
        label: 'ZAIF-PancakeSwap',
        href: 'https://pancakeswap.info/token/0x280C3Fc949b1a1D7a470067cA6F7b48b3CB219c5',
      },
      {
        label: 'Github',
        href: 'https://github.com/zaigar-finance/',
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
//    label: 'Audit By TechRate',
//    icon: 'AuditIcon',
//    href: 'https://certik.org/projects/zcore',
//  },  
//   {
//    label: 'Docs',
//    icon: 'GitbookIcon',
//    href: 'https://docs.zaigar.fi/',
//  },   
]

export default config
