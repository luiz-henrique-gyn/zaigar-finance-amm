import React, { useContext } from 'react'
import { Menu as UikitMenu, ConnectorId } from '@zaigar-finance/uikit'
import { useWeb3React } from '@web3-react/core'
import { allLanguages } from 'constants/localisation/languageCodes'
import { LanguageContext } from 'hooks/LanguageContext'
import useTheme from 'hooks/useTheme'
import useGetPriceData from 'hooks/useGetPriceData'
import useGetZaifPriceData from 'hooks/useGetZaifPriceData'
import { injected, bscConnector, walletconnect } from 'connectors'
import links from './config'

const Menu: React.FC = props => {
  const { account, activate, deactivate } = useWeb3React()
  const { selectedLanguage, setSelectedLanguage } = useContext(LanguageContext)
  const { isDark, toggleTheme } = useTheme()
  const cakePriceUsd = useGetPriceData()
  const zaifPriceUsd = useGetZaifPriceData()

  return (
    <UikitMenu
      links={links}
      priceLinkZfai="https://bscscan.com/token/0x280C3Fc949b1a1D7a470067cA6F7b48b3CB219c5"
      priceLinkZaif="https://bscscan.com/token/0x280C3Fc949b1a1D7a470067cA6F7b48b3CB219c5"
      account={account as string}
      login={(connectorId: ConnectorId) => {
        if (connectorId === 'walletconnect') {
          return activate(walletconnect)
        }

        if (connectorId === 'bsc') {
          return activate(bscConnector)
        }

        return activate(injected)
      }}
      logout={deactivate}
      isDark={isDark}
      toggleTheme={toggleTheme}
      currentLang={selectedLanguage?.code || ''}
      langs={allLanguages}
      setLang={setSelectedLanguage}
      cakePriceUsd={cakePriceUsd}
      zaifPriceUsd={zaifPriceUsd}
      {...props}
    />
  )
}

export default Menu
