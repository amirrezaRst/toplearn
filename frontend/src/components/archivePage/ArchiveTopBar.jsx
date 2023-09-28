import React, { useState } from 'react';
import Breadcrumb from '../common/Breadcrumb';
import LevelFilter from './LevelFilter';
import PriceFilter from './PriceFilter';
import StatusFilter from './StatusFilter';


const ArchiveTopBar = (props) => {
    const [showFilter, setShowFilter] = useState(false);

    const handleButton = () => {
        if (showFilter) {
            return setShowFilter(false);
        }
        setShowFilter(true);
    }

    return (
        <React.Fragment>

            <Breadcrumb />
            <div class="top-bar">

                <div class="row" style={{ marginBottom: "5px" }}>
                    <div class="col-md-4 col-sm-12 col-xs-12 pull-right">
                        <form action="" method="">
                            <div class="input">
                                <input type="text" value={props.titleTag} onChange={e=>props.setTitleTag(e.target.value)} name="" placeholder="عنوان مورد نظر ..." />
                                <button onClick={props.handleFilter} type="button"><i class="zmdi zmdi-search"></i></button>
                            </div>
                        </form>
                    </div>

                    <div class="col-md-4 col-sm-6 col-xs-12 pull-left" style={{ display: "flex", paddingTop: "8px" }}>
                        <div class="select-ddl" style={{ borderRadius: "5px", marginLeft: "15px" }}>
                            <select>
                                <option> مرتب سازی بر اساس تاریخ انتشار </option>
                                <option> قیمت </option>
                                <option> مدرت زمان دوره </option>
                                <option> تاریخ انتشار </option>
                            </select>
                        </div>
                        <button className="filter-btn" onClick={handleButton} style={showFilter ? { background: "#6FC341", color: "#fff" } : { color: "black" }}><i className="far fa-filter-list"></i></button>
                    </div>
                </div>

                <div style={showFilter ? {} : { display: "none" }}>
                    <div class="row" style={{ borderBottom: "1px solid #ebebeb" }}>

                        <LevelFilter level={props.level} setLevel={props.setLevel} />

                        <StatusFilter status={props.status} setStatus={props.setStatus} />

                        <PriceFilter price={props.price} setPrice={props.setPrice} />

                    </div>

                    <div style={{ marginTop: "15px" }}>
                        <button className="filter-handle-btn btn" id='add-filter-btn' onClick={props.handleFilter}>اعمال فیلتر</button>
                        <button className="filter-handle-btn btn" id='cancel-filter-btn' onClick={handleButton}>لغو</button>
                    </div>
                </div>

            </div>


        </React.Fragment>
    );
}

export default ArchiveTopBar;