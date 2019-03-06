import HomeAd from './mock-data/HomeAd'
import MarketList from './mock-data/MarketList'
import NewsList from './mock-data/NewsList'
import WalletList from './mock-data/WalletList'
import DappList from './mock-data/DappList'

class ValueAdded {
  getHomeAd(){ 
    return HomeAd
  }
  getMarketList(){
    return MarketList
  }
  getNewsList(){
    return NewsList
  }
  getWalletList(){
    return WalletList
  }
  getDappList(){
    return DappList
  }
}

export default ValueAdded
