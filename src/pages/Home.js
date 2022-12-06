import React from 'react';
import Banner from '../components/Banner/Banner_Home';
import Cards from '../components/Card';

// ---------- page d'accueil --------------
function Home() {
    return (
        <section className='main'>
            <Banner />
            <section className='card'>
                <Cards />
            </section>
        </section>
    )
}

export default Home