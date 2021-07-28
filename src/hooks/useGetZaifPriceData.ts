import { useEffect, useState } from 'react'
import BigNumber from 'bignumber.js'
import { useMulticallContract } from './useContract'
import ERC20_INTERFACE from '../constants/abis/erc20'
import  zaifpriceContracts from '../constants/zaifPriceContracts'

type ApiResponse = {
  prices: {
    [key: string]: string
  }
  update_at: string
}

/**
 * Due to Cors the api was forked and a proxy was created
 * @see https://github.com/pancakeswap/gatsby-pancake-api/commit/e811b67a43ccc41edd4a0fa1ee704b2f510aa0ba
 */
const api = 'https://api.pancakeswap.com/api/v1/price'

const useGetZaifPriceData = () => {
  const [data, setData] = useState<number>(0)

  const multicallContract = useMulticallContract();

  useEffect(() => {
    const fetchData = async () => {
      try {
        if(multicallContract){
          const {zaifAddress, busdAddress,zaiflpAddress} = zaifpriceContracts;
          const calls = [
            [zaifAddress, ERC20_INTERFACE.encodeFunctionData("balanceOf", [zaiflpAddress])],
            [busdAddress, ERC20_INTERFACE.encodeFunctionData("balanceOf", [zaiflpAddress])],
          ];

          const [resultsBlockNumber, result] = await multicallContract.aggregate(calls);
          const [zaifAmount, busdAmount] = result.map(r=>ERC20_INTERFACE.decodeFunctionResult("balanceOf", r));
          const busd = new BigNumber(busdAmount);
          const zaif = new BigNumber(zaifAmount);
          const zaifPrice = busd.div(zaif).toNumber();

          setData(zaifPrice)
        }
      } catch (error) {
        console.error('Unable to fetch price data:', error)
      }
    }

    fetchData()
  }, [multicallContract])

  return data
}

export default useGetZaifPriceData

/*
import { useEffect, useState } from 'react'

type ApiResponse = {
  prices: {
    [key: string]: string
  }
  update_at: string
}


const api = 'https://api.pancakeswap.com/api/v1/price'

const useGetPriceData = () => {
  const [data, setData] = useState<ApiResponse | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(api)
        const res: ApiResponse = await response.json()

        setData(res)
      } catch (error) {
        console.error('Unable to fetch price data:', error)
      }
    }

    fetchData()
  }, [setData])

  return data
}

export default useGetPriceData
*/