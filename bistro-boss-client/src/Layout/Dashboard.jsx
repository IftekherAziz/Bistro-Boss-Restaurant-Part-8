import { NavLink, Outlet } from "react-router-dom";
import {
  FaShoppingCart,
  FaWallet,
  FaCalendarAlt,
  FaHome,
  // eslint-disable-next-line no-unused-vars
  FaBook,
  FaUsers,
  FaUtensils,
  FaListAlt,
  FaShoppingBag,
} from "react-icons/fa";
import useCart from "../hooks/useCart";
import logo from "../assets/logo.png";
import useAdmin from "../hooks/useAdmin";

const Dashboard = () => {
  const [cart, , isLoading] = useCart();
  const [isAdmin] = useAdmin();

  /* if (!user) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <progress className="progress w-56"></progress>
      </div>
    );
  } */

  return (
    <div className="drawer drawer-mobile ">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content py-5 bg-slate-50 ">
        <div className="text-center">
          <label
            htmlFor="my-drawer-2"
            className="mt-12 border rounded p-4 cursor-pointer bg-zinc-50 text-center  drawer-button lg:hidden"
          >
           Open Menu
          </label>
        </div>
        <Outlet className="mt-10"></Outlet>
      </div>
      <div className="drawer-side bg-slate-900 text-white">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>

        <ul className="menu px-4 w-80">
          {isAdmin ? (
            <>
              <li>
                <img src={logo} alt="" />
              </li>
              <li>
                <NavLink to="/dashboard/admin-home">
                  <FaHome></FaHome> Admin Dashboard
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/allusers">
                  <FaUsers></FaUsers> All Users
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/add-item">
                  <FaUtensils></FaUtensils> Add Item
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/manage-items">
                  <FaWallet></FaWallet> Manage Items
                </NavLink>
              </li>
              {/* <li>
                <NavLink to="/dashboard/history">
                  <FaBook></FaBook> Manage Bookings
                </NavLink>
              </li> */}
            </>
          ) : (
            <>
              <li>
                <img src={logo} alt="" />
              </li>
              <li>
                <NavLink to="/dashboard/user-home">
                  <FaHome></FaHome> User Dashboard
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/reservations">
                  <FaCalendarAlt></FaCalendarAlt> Reservations
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/my-cart">
                  <FaShoppingCart></FaShoppingCart> My Cart
                  {isLoading || (
                    <span className="badge inl ">+{cart?.length || 0}</span>
                  )}
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/payment">
                  <FaWallet></FaWallet> Payment
                </NavLink>
              </li>
            </>
          )}
          <div className="divider"></div>
          <li>
            <NavLink to="/">
              <FaHome></FaHome> Homepage
            </NavLink>{" "}
          </li>
          <li>
            <NavLink to="/menu">
              <FaListAlt> </FaListAlt>Our Menu
            </NavLink>
          </li>
          <li>
            <NavLink to="/order/salad">
              <FaShoppingBag></FaShoppingBag>Order Food
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
