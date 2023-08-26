import React from 'react';


const ArchiveTopBar = () => {
    return (
        <React.Fragment>

            <div class="container">
                <nav aria-label="breadcrumb">
                    <ul class="breadcrumb">
                        <li class="breadcrumb-item"><a href="#">تاپ لرن</a></li>
                        <li class="breadcrumb-item active"><a href="#">دوره ها</a></li>
                        <li class="breadcrumb-item active" aria-current="page"> برنامه نویسی وب </li>
                    </ul>
                </nav>
            </div>
            <div class="top-bar">

                <header><h1> دوره های <span> برنامه نویسی وب </span> </h1> <span> 123 دوره </span></header>

                <div class="row">
                    <div class="col-md-4 col-sm-12 col-xs-12 pull-right">
                        <form action="" method="">
                            <div class="input">
                                <input type="text" name="" placeholder="موضوع مورد نظر ..." />
                                <button><i class="zmdi zmdi-search"></i></button>
                            </div>
                        </form>
                    </div>
                    <div class="col-md-4 col-sm-6 col-xs-12 pull-right">
                        <div class="switch-field available">
                            <input id="available-filter-1" name="available" value="all" checked="" type="radio" />
                            <label for="available-filter-1"> همه </label>
                            <input id="available-filter-2" name="available" value="off" type="radio" />
                            <label for="available-filter-2"> خریدنی </label>
                            <input id="available-filter-3" name="available" value="normal" type="radio" />
                            <label for="available-filter-3"> رایگان </label>
                        </div>
                    </div>
                    <div class="col-md-4 col-sm-6 col-xs-12 pull-left">
                        <div class="select-ddl">
                            <select>
                                <option> مرتب سازی </option>
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