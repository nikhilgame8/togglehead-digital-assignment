import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HomeCarousel from '../components/HomeCarousel'
import Calender from '../components/Calender'
import BlogGrid from '../components/BlogGrid'
import TargetPoints from '../components/TargetPoints'

const Home = () => {
    return (
        <div className='container'>
            <Navbar />
            <HomeCarousel />
            <Calender />
            <BlogGrid />
            <TargetPoints />
            <Footer />
        </div>
    )
}

export default Home