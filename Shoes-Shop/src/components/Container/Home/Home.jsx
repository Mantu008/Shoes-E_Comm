import React from 'react'
import Corosol from '../../Pages/Corosol'
import ShoesTypeCard from '../../Pages/ShoesTypeCard'
import RecentArrivel from '../../Pages/RecentArrivel'
import HomeBanner from '../../Pages/HomeBanner'

const Home = () => {
    return (
        <div>
            <Corosol />
            <ShoesTypeCard />
            <RecentArrivel />
            <HomeBanner />
        </div>
    )
}

export default Home
