import { useEffect, useState } from "react";

import Breadcrumb from "../common/Breadcrumb";
import ProfileSidebar from "../accountPage/AccountSidebar";
import Loading from "../Loading";


const AccountLayout = ({ children, user }) => {
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        if (user == null || user == undefined) return setLoading(true);
        setLoading(false);
    }, [user]);

    if (loading) return (
        <Loading />
    )

    return (
        <main style={{ padding: "10px 0 70px" }}>
            <div class="container">

                <Breadcrumb location={["حساب کاربری"]} />


                <div class="user-account">
                    <div class="row">

                        <ProfileSidebar user={user} />

                        {children}

                    </div>
                </div>
            </div>
        </main>
    );
}

export default AccountLayout;