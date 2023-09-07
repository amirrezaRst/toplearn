import React from 'react';

import HomeLastCourse from './HomeLastCourse';
import HomePopularCourse from './HomePopularCourse';


const Home = ({ courses }) => {
    return (
        <React.Fragment>

            <main id="home-page">
                <div class="container">
                    <HomeLastCourse courses={courses} />

                    <hr style={{ marginBottom: "7vh", marginTop: "7vh" }} />

                    <HomePopularCourse courses={courses} />

                </div>
            </main>

        </React.Fragment>
    );
}

export default Home;