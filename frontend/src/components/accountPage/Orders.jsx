const Orders = () => {
    return (
        <div class="col-md-9 col-sm-8 col-xs-12">
            <section class="user-account-content">
                <header><h1> فاکتور ها </h1></header>
                <div class="inner form-layer account-orders" style={{ padding: "30px" }}>

                    <table class="table table-bordered">
                        <tbody>
                            <tr className="head">
                                <td scope="col">تاریخ</td>
                                <td scope="col">تعداد دوره ها</td>
                                <td scope="col">وضعیت پرداخت</td>
                                <td scope="col">جزئیات</td>
                            </tr>
                            <tr>
                                <td scope="row">1</td>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                            </tr>
                        </tbody>
                    </table>

                </div>

            </section>
        </div>
    );
}

export default Orders;