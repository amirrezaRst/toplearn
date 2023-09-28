import React from 'react';


const LevelFilter = ({ level, setLevel }) => {
    const handleValue = (val) => {
        setLevel(val)
    };

    return (
        <div class="col-md-4 col-sm-6 col-xs-12 pull-right" style={{ marginBottom: "20px" }}>
            <div className="filter-items">
                <h4>بر اساس سطح :</h4>
                <label class="radio-inline">
                    <input type="radio" name='level-radio' checked={level == "all"} onClick={() => handleValue("all")} />همه
                </label>
                <label class="radio-inline">
                    <input type="radio" name='level-radio' checked={level == "basic"} onClick={() => handleValue("basic")} />مقدماتی
                </label>
                <label class="radio-inline">
                    <input type="radio" name='level-radio' checked={level == "middle"} onClick={() => handleValue("middle")} />متوسط
                </label>
                <label class="radio-inline">
                    <input type="radio" name='level-radio' checked={level == "advance"} onClick={() => handleValue("advance")} />پیشرفته
                </label>
            </div>
        </div>
    );
}

export default LevelFilter;