import React, { useEffect, useState } from 'react';

import SingleCourseCard from '../SingleCourseCard';
import ArchiveSideBar from './ArchiveSideBar';
import ArchiveTopBar from './ArchiveTopBar';


const Archive = (props) => {

    const [courses, setCourses] = useState();

    //! Filter States
    const [level, setLevel] = useState("all");
    const [status, setStatus] = useState("all");
    const [price, setPrice] = useState("all");

    const handleFilter = () => {
        // console.log(props.courses.length > 0);
        var filtered = props.courses;
        if (level != "all") {
            filtered = filtered.filter(course => {
                return course.courseLevel == level;
            })
        }
        if (status != "all") {
            filtered = filtered.filter(course => {
                return course.courseStatus == status;
            })
        }
        if (price != "all") {
            if (price == "special") {
                filtered = filtered.filter(course => {
                    return course.specialMember == true;
                })
            }
            if (price == "free") {
                filtered = filtered.filter(course => {
                    return course.price == 0 && !course.specialMember;
                })
            }
            else if (price == "purchase") {
                filtered = filtered.filter(course => {
                    return course.price != 0;
                })
            }

        }
        setCourses(filtered);
    }

    useEffect(() => {
        handleFilter();
        // console.log("useEffect running !");
    }, [props.courses.length > 0])

    const result = () => {
        console.log(props);
    }
    return (
        <React.Fragment>

            <div class="container">
                <section class="term-categories">

                    <ArchiveTopBar level={level} setLevel={setLevel} status={status} setStatus={setStatus} price={price} setPrice={setPrice} handleFilter={handleFilter} />

                    <div class="row">

                        {/* <ArchiveSideBar /> */}

                        {/* <div class="col-lg-9 col-md-8 col-sm-12 col-xs-12"> */}
                        <div class="col-12 container">

                            <section class="terms-items">
                                <div class="row" style={{ padding: "30px 0" }}>
                                    <button className="btn btn-primary" onClick={result}>Result</button>
                                    {/* <SingleCourseCard location={window.location.pathname} /> */}
                                    {courses && courses.length > 0 ?
                                        courses.map((item, index) => <SingleCourseCard location={window.location.pathname} id={item._id} title={item.title} teacher={item.teacher.fullName} price={item.price} courses={item.courses} cover={item.cover} />)
                                        : "null"
                                    }

                                </div>


                            </section>

                        </div>
                    </div>
                </section>
            </div>

        </React.Fragment >
    );
}

export default Archive;