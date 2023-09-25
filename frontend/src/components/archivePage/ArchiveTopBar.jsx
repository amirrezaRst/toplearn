import React from 'react';
import Breadcrumb from '../common/Breadcrumb';


const ArchiveTopBar = () => {
    return (
        <React.Fragment>

            <Breadcrumb />
            <div class="top-bar">

                <div class="row">
                    <div class="col-md-4 col-sm-12 col-xs-12 pull-right">
                        <form action="" method="">
                            <div class="input">
                                <input type="text" name="" placeholder="عنوان مورد نظر ..." />
                                <button><i class="zmdi zmdi-search"></i></button>
                            </div>
                        </form>
                    </div>
                    
                    <div class="col-md-4 col-sm-6 col-xs-12 pull-left">
                        <div class="select-ddl" style={{borderRadius:"5px"}}>
                            <select>
                                <option> مرتب سازی بر اساس تاریخ انتشار </option>
                                <option> قیمت </option>
                                <option> مدرت زمان دوره </option>
                                <option> تاریخ انتشار </option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default ArchiveTopBar;