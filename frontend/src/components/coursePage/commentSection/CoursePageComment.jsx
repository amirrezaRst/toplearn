import React from 'react';
import Pagination from '../../common/Pagination';
import CommentForm from './CommentForm';
import SingleUserComment from './SingleUserComment';


const CoursePageComment = ({ user, courseId, setCourse }) => {
    return (

        <section class="user-comments" style={{ borderRadius: "10px", marginBottom: "10vh" }}>
            <header style={{ display: "flex" }}>
                <div style={{}}>
                    <div style={{ width: "80%", height: "3px", background: "#5ce561", borderRadius: '20px', marginBottom: "3px", float: "left" }}></div>
                    <h2 style={{ fontSize: "18px", fontWeight: "500", padding: "6px 20px" }}> نظرات کاربران </h2>
                    <div style={{ width: "75%", height: "3px", background: "#00bffe", borderRadius: '20px', marginTop: "5px", float: "right" }}></div>
                </div>
            </header>

            <div class="inner">

                <CommentForm user={user} courseId={courseId} setCourse={setCourse} />

                <div class="comment-list">

                    <SingleUserComment />

                    <Pagination />

                </div>
            </div>
        </section>

    );
}

export default CoursePageComment;