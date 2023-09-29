import React from 'react';


const TeachersHeader = () => {
    return (
        <section class="term-categories">
            <div class="top-bar">

                <p>نام مدرس را وارد کنید</p>

                <div class="row" style={{ marginBottom: "5px" }}>
                    <div class="col-md-12 col-sm-12 col-xs-12 pull-right">
                        <form onSubmit={e => {
                            e.preventDefault();
                        }}>
                            <div class="input">
                                <input type="text" name="" placeholder="نام مدرس ..." />
                                <button type="button"><i class="zmdi zmdi-search"></i></button>
                            </div>
                        </form>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default TeachersHeader;