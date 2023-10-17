import Breadcrumb from "../common/Breadcrumb";
import ProfileSidebar from "../accountPage/AccountSidebar";

const AccountLayout = ({ children }) => {
    return (
        <main style={{padding:"10px 0 70px"}}>
            <div class="container">

                <Breadcrumb location={["حساب کاربری"]} />


                <div class="user-account">
                    <div class="row">

                        <ProfileSidebar />

                        {children}

                    </div>
                </div>
            </div>
        </main>
    );
}

export default AccountLayout;