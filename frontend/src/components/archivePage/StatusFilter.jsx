import React from 'react';


const StatusFilter = ({ status, setStatus }) => {
    const handleValue = (val) => {
        setStatus(val)
    };

    return (
        <div class="col-md-4 col-sm-6 col-xs-12 pull-right" style={{ marginBottom: "20px" }}>
            <div className="filter-items">
                <h4>وضعیت دوره :</h4>
                <label class="radio-inline">
                    <input type="radio" checked={status === "all"} onClick={() => handleValue("all")} />همه
                </label>
                <label class="radio-inline">
                    <input type="radio" checked={status === "started"} onClick={() => handleValue("started")} />درحال برگزاری
                </label>
                <label class="radio-inline">
                    <input type="radio" checked={status === "ended"} onClick={() => handleValue("ended")} />به اتمام رسیده
                </label>
                <label class="radio-inline">
                    <input type="radio" checked={status === "presell"} onClick={() => handleValue("presell")} />پیش فروش
                </label>
            </div>
        </div>
    );
}

export default StatusFilter;