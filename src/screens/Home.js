import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HomeCarousel from '../components/HomeCarousel'
import Calender from '../components/Calender'
import BlogGrid from '../components/BlogGrid'
import TargetPoints from '../components/TargetPoints'
import FAQ from '../components/FAQ'
import Subscibe from '../components/Subscibe'

const Home = () => {
    return (
        <div>
            <Navbar />
            <HomeCarousel />
            <Calender />
            <BlogGrid />
            <TargetPoints />
            <FAQ />
            <Subscibe />
            <Footer />
        </div>
    )
}

export default Home