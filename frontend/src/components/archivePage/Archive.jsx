import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router';

import SingleCourseCard from '../SingleCourseCard';
import ArchiveSideBar from './ArchiveSideBar';
import ArchiveTopBar from './ArchiveTopBar';


const Archive = (props) => {

    const [courses, setCourses] = useState();
    const [titleTag, setTitleTag] = useState(null);

    //! Filter States
    const [level, setLevel] = useState("all");
    const [status, setStatus] = useState("all");
    const [price, setPrice] = useState("all");

    const handleFilter = () => {
        const params = new URLSearchParams(window.location.search);

        var filtered = props.courses;

        // if (params.get("tag") != null) {
        //     filtered = filtered.filter(course => {
        //         return course.title.search(params.get("tag")) > -1
        //     });
        // };
        if (titleTag) {
            filtered = filtered.filter(course => {
                return course.title.search(titleTag) > -1
            });
        };
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
    };

    useEffect(() => {
        const params = new URLSearchParams(window.location.search).get("tag");
        if (params != null && titleTag == null) {
            setTitleTag(params);
        }
        handleFilter();
    }, [props.courses.length > 0]);

    useEffect(() => {
        handleFilter();
    }, [titleTag])

    function compareNumbers(a, b) {
        return a.lastUpdate - b.lastUpdate;
    };

    const result = () => {
        // var sortByDate = props.courses;
        // sortByDate = sortByDate.sort(compareNumbers)
        // console.log(sortByDate);

        console.log(titleTag == undefined);
    }
    return (
        <React.Fragment>

            <div class="container">
                <section class="term-categories">

                    <ArchiveTopBar level={level} setLevel={setLevel} status={status} setStatus={setStatus} price={price}
                        setPrice={setPrice} handleFilter={handleFilter} titleTag={titleTag} setTitleTag={setTitleTag} />

                    <div class="row">

                        {/* <ArchiveSideBar /> */}

                        {/* <div class="col-lg-9 col-md-8 col-sm-12 col-xs-12"> */}
                        <div class="col-12 container">

                            <section class="terms-items">
                                <div class="row" style={{ padding: "30px 0" }}>
                                    <button className="btn btn-primary" onClick={result}>Result</button>
                                    {/* <SingleCourseCard location={window.location.pathname} /> */}
                                    {courses && courses.length > 0 ?
                                        courses.map((item, index) => <SingleCourseCard location={window.location.pathname} id={item._id} title={item.title} teacher={item.teacher.fullName} price={item.price} courses={item.courses} cover={item.cover} special={item.specialMember} />)
                                        : null
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