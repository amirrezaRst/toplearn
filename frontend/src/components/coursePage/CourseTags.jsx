import React from 'react';
import { Link } from 'react-router-dom';


const CourseTags = ({ tags }) => {
    return (
        <div class="tags-layer" style={{ borderRadius: "10px" }}>
            {tags.map(item =>
                <Link to={`/courses?tag=${item}`} className='course-tag' style={{ fontFamily: "sans-serif", fontSize: "1.3rem" }}> {item} </Link>
            )}
        </div>
    );
}

export default CourseTags;