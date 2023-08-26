import React from 'react';

import SingleCourseCard from '../SingleCourseCard';
import ArchivePagination from './ArchivePagination';
import ArchiveSideBar from './ArchiveSideBar';
import ArchiveTopBar from './ArchiveTopBar';


const Archive = () => {
    return (
        <React.Fragment>

            <div class="container">
                <section class="term-categories">

                    <ArchiveTopBar />

                    <div class="row">

                        <ArchiveSideBar />

                        <div class="col-lg-9 col-md-8 col-sm-12 col-xs-12">

                            <section class="terms-items">
                                <div class="row">

                                    <SingleCourseCard location={window.location.pathname} />

                                </div>

                                <ArchivePagination />

                            </section>

                        </div>
                    </div>
                </section>
            </div>

        </React.Fragment >
    );
}

export default Archive;