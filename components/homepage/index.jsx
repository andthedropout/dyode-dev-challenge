import Hero from './hero'
import Collections from './collections'
import Products from './products'
import OptIn from './opt-in'
import hero1MockData from '../../constants/hero1MockData'
import hero2MockData from '../../constants/hero2MockData'
import collectionsMockData from '../../constants/collectionsMockData'
import productsMockData from '../../constants/productsMockData'
import optInMockData from '../../constants/optInMockData'

export default function Homepage() {
    return (
        <>
            <Hero data={hero1MockData} />
            <Collections data={collectionsMockData} />
            <Products data={productsMockData} />
            <Hero data={hero2MockData} />
            <OptIn data={optInMockData} />
        </>
    )
}