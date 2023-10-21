const FavoriteCourse = () => {
    return (
        <div class="col-md-9 col-sm-8 col-xs-12">
            <section class="user-account-content">
                <header><h1> فاکتور ها </h1></header>
                <div class="inner form-layer account-orders" style={{ padding: "30px" }}>

                    <table class="table table-striped">
                        <tbody>
                            <tr>
                                <td scope="col">عنوان دوره</td>
                                <td scope="col">عملیات</td>
                            </tr>
                            <tr>
                                <td>آموزش ریاضیات هوش مصنوعی (مقدماتی)</td>
                                <td><i className="fas fa-trash-can"></i></td>
                            </tr>
                        </tbody>
                    </table>

                </div>

            </section>
        </div>
    );
}

export default FavoriteCourse;