import React from 'react';

import HomeLastCourse from './HomeLastCourse';
import HomePopularCourse from './HomePopularCourse';


const Home = (props) => {
    return (
        <React.Fragment>

            <main id="home-page">
                <div class="container">

                    <HomeLastCourse />
                    
                    <hr style={{marginBottom:"7vh",marginTop:"7vh"}} />
                    
                    <HomePopularCourse />


                </div>
            </main>

        </React.Fragment>
    );
}

export default Home;