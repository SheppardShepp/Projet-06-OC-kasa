import React from 'react';
import Banner from '../components/Banner';
import CardList from '../components/Card';


function Home() {
    return (
        <section className='main'>
            <Banner />
            <section className='card'>
                <CardList />
            </section>
            
        </section>


    )
}

export default Home