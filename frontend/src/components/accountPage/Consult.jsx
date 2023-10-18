import { Link } from "react-router-dom";

const Consult = () => {
    return (
        <div class="col-md-9 col-sm-8 col-xs-12">
            <section class="user-account-content">
                <header className="consult-header">
                    <h1> درخواست های مشاوره </h1>
                    <Link> <button className="btn">ثبت درخواست مشاوره</button></Link>
                </header>
                <div class="inner form-layer account-orders" style={{ padding: "30px" }}>

                    <table class="table table-bordered">
                        <tbody>
                            <tr className="head">
                                <td scope="col">مشاور</td>
                                <td scope="col">تاریخ</td>
                                <td scope="col">وضعیت</td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>Mark</td>
                                <td>Otto</td>
                            </tr>
                        </tbody>
                    </table>

                </div>

            </section>
        </div>
    );
}

export default Consult;