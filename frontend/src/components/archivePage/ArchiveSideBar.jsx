import React from 'react';


const ArchiveSideBar = () => {
    return (
        <aside class="col-lg-3 col-md-4 col-sm-12 col-xs-12">

            <section class="aside-section filter-by-price" style={{ borderRadius: "5px" }}>
                <header><h3> فیلتر بر اساس قیمت </h3></header>
                <div class="price-range">
                    <input type="hidden" value="" id="min-value" name="min_price" />
                    <input type="hidden" value="" id="max-value" name="max_price" />
                    <div class="price-bar"><div id="priceFilter"></div></div>
                    <div class="max-price">تا <span id="max-text">500000</span> تومان</div>
                    <div class="min-price">از <span id="min-text">20000</span> تومان</div>
                    <div class="clearfix"></div>
                </div>
            </section>

            <section class="aside-section filter-by-category" style={{ borderRadius: "5px" }}>
                <header><h3> دسته بندی موضوعات </h3></header>
                <div class="inner">
                    <ul>
                        <li>
                            <input type="checkbox" name="" id="cat-1" />
                            <label for="cat-1"> برنامه نویسی وب </label>
                        </li>
                        <li>
                            <input type="checkbox" name="" id="cat-2" />
                            <label for="cat-2"> برنامه نویسی موبایل </label>
                        </li>
                        <li>
                            <input type="checkbox" name="" id="cat-3" />
                            <label for="cat-3"> برنامه نویسی وب </label>
                        </li>
                        <li>
                            <input type="checkbox" name="" id="cat-4" />
                            <label for="cat-4"> برنامه نویسی موبایل </label>
                        </li>
                        <li>
                            <input type="checkbox" name="" id="cat-5" />
                            <label for="cat-5"> برنامه نویسی وب </label>
                        </li>
                        <li>
                            <input type="checkbox" name="" id="cat-6" />
                            <label for="cat-6"> برنامه نویسی موبایل </label>
                        </li>
                        <li>
                            <input type="checkbox" name="" id="cat-7" />
                            <label for="cat-7"> برنامه نویسی وب </label>
                        </li>
                        <li>
                            <input type="checkbox" name="" id="cat-8" />
                            <label for="cat-8"> برنامه نویسی موبایل </label>
                        </li>
                        <li>
                            <input type="checkbox" name="" id="cat-9" />
                            <label for="cat-9"> برنامه نویسی وب </label>
                        </li>
                        <li>
                            <input type="checkbox" name="" id="cat-10" />
                            <label for="cat-10"> برنامه نویسی موبایل </label>
                        </li>
                    </ul>
                </div>
            </section>

        </aside>
    );
}

export default ArchiveSideBar;