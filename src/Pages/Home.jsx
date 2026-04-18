import React from 'react';
import Nav from '../Components/Nav';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import Modal from '../Components/Modal';
import Banner from './Banner';
import Categories from './Categories';
import Featured from './Featured';

const Home = () => {
    return (
        <div>

            <Nav />
            <Header />

            <Modal />

            <Banner />

            <Categories />

            <Featured />

            <Footer />
            
        </div>
    );
};

export default Home;