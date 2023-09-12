import React from 'react';



const CommentForm = () => {
    return (
        <form>
            <div class="row">
                <div class="col-md-4 col-sm-12 col-xs-12">
                    <div class="form-group">
                        <input type="text" class="form-control" placeholder="نام و نام خانوادگی" />
                    </div>
                    <div class="form-group">
                        <input type="text" class="form-control" placeholder="ایمیل" />
                    </div>
                    <div class="form-group">
                        <input type="text" class="form-control" placeholder="شماره تماس" />
                    </div>
                </div>
                <div class="col-md-8 col-sm-12 col-xs-12">
                    <div class="form-group">
                        <textarea class="form-control" placeholder="متن نظر"></textarea>
                    </div>
                    <div class="row">
                        <div class="col-md-8 col-sm-7 col-xs-7">
                            <div class="form-group">
                                <input type="text" class="form-control" placeholder="کد امنیتی" />
                            </div>
                        </div>
                        <div class="col-md-4 col-sm-5 col-xs-5">
                            <img src="images/captcha.jpg" />
                        </div>
                    </div>
                </div>
                <div class="col-xs-12">
                    <button type="submit" class="btn btn-success"> ثبت دیدگاه </button>
                </div>
            </div>
        </form>
    );
}

export default CommentForm;