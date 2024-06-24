import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import Logo from "./assets/Logo";
import CartIcon from "./assets/CartIcon";
import { FaUser } from "react-icons/fa";
import { LinkContainer } from "react-router-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { logout as logoutAction } from "../slices/authSlice";
import { useLogoutMutation } from "../slices/userApiSlice";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { clearToast } from "../slices/toastSlice";
import SearchBar from "./SearchBar";

const Header = () => {
  const totalQuantity = useSelector(
    (state: RootState) => state.cart.totalQuantity
  );
  const dispatch = useDispatch();
  const userInfo = useSelector((state: RootState) => state.auth.userInfo);
  const { message, type } = useSelector((state: RootState) => state.toast);

  useEffect(() => {
    if (message && type) {
      toast[type](message);
      dispatch(clearToast());
    }
  }, [message, type, dispatch]);
  const navigate = useNavigate();
  const [logout] = useLogoutMutation();
  const logoutHandler = async () => {
    try {
      await logout();
      dispatch(logoutAction());
      navigate("/login");
    } catch (err: any) {
      toast.error(err.data?.message || err.message);
    }
  };

  return (
    <header className="w-full bg-white">
      <Navbar
        variant="dark"
        expand="lg"
        collapseOnSelect
        className="shadow-b flex justify-between w-full"
      >
        <Container className="flex items-center justify-between gap-8">
          <LinkContainer to="/">
            <Navbar.Brand>
              <Logo variant="black" className="w-48 sm:w-auto" />
            </Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            className="bg-black"
          />
          <Navbar.Collapse id="basic-navbar-nav" className="flex flex-col lg:flex-row items-center justify-center py-8">
            <SearchBar/>
            <Nav className="flex w-full items-center justify-end">
              <div className="flex flex-col my-6 md:flex-row md:my-0 justify-around items-center gap-4">
                <LinkContainer to="/cart">
                  <Nav.Link>
                    <div className="relative flex justify-center items-center">
                      <CartIcon className="h-16" />
                      <p className="ml-1 text-black">Cart</p>
                      {totalQuantity > 0 && (
                        <span
                          className="absolute rounded-full bg-black flex justify-center items-center 
                        h-5 w-5 tracking-tighter text-white text-3xs -top-1 left-0"
                        >
                          {totalQuantity}
                        </span>
                      )}
                    </div>
                  </Nav.Link>
                </LinkContainer>
                {userInfo ? (
                  <div className="flex justify-center items-center  text-black/80">
                    <FaUser color="black" size={32} />
                    <NavDropdown
                      title={
                        <span className="text-black/80 capitalize">
                          {userInfo.name}
                        </span>
                      }
                      id="username"
                    >
                      <LinkContainer to="/profile">
                        <NavDropdown.Item>Profile</NavDropdown.Item>
                      </LinkContainer>
                      <NavDropdown.Item onClick={logoutHandler}>
                        Logout
                      </NavDropdown.Item>
                    </NavDropdown>
                  </div>
                ) : (
                  <>
                    <LinkContainer to="/login">
                      <Nav.Link>
                        <div className="flex justify-center items-center">
                          <FaUser color="black" size={32} />
                          <p className="text-black ml-1">Sign In</p>
                        </div>
                      </Nav.Link>
                    </LinkContainer>
                  </>
                )}
                {userInfo && userInfo.isAdmin && (
                  <NavDropdown
                    title={
                      <span className=" text-black/80">
                        Admin
                      </span>
                    }
                    id="adminmenu"
                  >
                    <LinkContainer to="/admin/products/all">
                      <NavDropdown.Item>Products</NavDropdown.Item>
                    </LinkContainer>
                    <LinkContainer to="/admin/orders/all">
                      <NavDropdown.Item>Orders</NavDropdown.Item>
                    </LinkContainer>
                    <LinkContainer to="/admin/users/all">
                      <NavDropdown.Item>Users</NavDropdown.Item>
                    </LinkContainer>
                  </NavDropdown>
                )}
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
