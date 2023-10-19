import { Link } from "react-router-dom";

const FavoriteCourse = ({ cart }) => {

    
    
    return (
        <div class="col-md-9 col-sm-8 col-xs-12">
            <section class="user-account-content">
                <header><h1> فاکتور ها </h1></header>
                <div class="inner form-layer account-orders" style={{ padding: "30px" }}>

                    {cart && cart.length > 0 ?
                        <table class="table table-striped">
                            <tbody>

                                <tr>
                                    <td scope="col">عنوان دوره</td>
                                    <td scope="col">عملیات</td>
                                </tr>
                                {cart.map(item =>
                                    <tr>
                                        <td><Link to={`/course/${item._id}`}><span>{item.title}</span></Link></td>
                                        <td><i className="fas fa-trash-can"></i></td>
                                    </tr>
                                )}

                            </tbody>
                        </table>
                        : null
                    }




                </div>

            </section>
        </div>
    );
}

export default FavoriteCourse;