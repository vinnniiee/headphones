import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {
  Button,
  Row,
  Col,
  ListGroup,
  Image,
  Card,
  Spinner,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Message from "../components/ui/Message";
// import CheckoutSteps from '../components/CheckoutSteps';
import { clearCartItems } from "../slices/cartSlice";
import { RootState } from "../store";
import { useCreateOrderMutation } from "../slices/orderApiSlice";
import { formatApiError } from "../utils/helpers";
import { logout } from "../slices/authSlice";

const PlaceOrderScreen = () => {
  const navigate = useNavigate();

  const cart = useSelector((state: RootState) => state.cart);

  const [createOrder, { isLoading, error }] = useCreateOrderMutation();

  useEffect(() => {
    if (!cart.shippingAddress.address) {
      navigate("/shipping");
    } else if (!cart.paymentMethod) {
      navigate("/payment");
    }
  }, [cart.paymentMethod, cart.shippingAddress.address, navigate]);

  const dispatch = useDispatch();
  const placeOrderHandler = async () => {
    try {
      const res = await createOrder({
        ...cart
      }).unwrap();
      dispatch(clearCartItems());
      navigate(`/order/${res._id}`);
    } catch (err) {
      const errorMessage = formatApiError(err);
      if (errorMessage === "Not authorized.") {
        dispatch(logout());
        navigate("/login");
      }
      toast.error(errorMessage);
    }
  };

  return (
    <>
      {/* <CheckoutSteps step1 step2 step3 step4 /> */}
      <Row>
        <Col md={8}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h2>Shipping</h2>
              <p>
                <strong>Address:</strong>
                {cart.shippingAddress.address}, {cart.shippingAddress.city}{" "}
                {cart.shippingAddress.postalCode},{" "}
                {cart.shippingAddress.country}
              </p>
            </ListGroup.Item>

            <ListGroup.Item>
              <h2>Payment Method</h2>
              <strong>Method: </strong>
              {cart.paymentMethod}
            </ListGroup.Item>

            <ListGroup.Item>
              <h2>Order Items</h2>
              {cart.items.length === 0 ? (
                <Message>Your cart is empty</Message>
              ) : (
                <ListGroup variant="flush">
                  {cart.items.map((item, index) => (
                    <ListGroup.Item key={index}>
                      <Row>
                        <Col md={1}>
                          <Image
                            src={item.image}
                            alt={item.name}
                            fluid
                            rounded
                          />
                        </Col>
                        <Col>
                          <Link to={`/product/${item._id}`}>{item.name}</Link>
                        </Col>
                        <Col md={4} className="flex items-center gap-1">
                          {item.quantity} x{" "}
                          <div className="flex justify-center items-center gap-0.5  ">
                            <img src="/rupee-icon.svg" alt="rupee" />
                            {item.price}{" "}
                          </div>
                          ={" "}
                          <div className="flex justify-center items-center gap-0.5  ">
                            <img src="/rupee-icon.svg" alt="rupee" />
                            {item.quantity * item.price}
                          </div>
                        </Col>
                      </Row>
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              )}
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={4}>
          <Card>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <h2>Order Summary</h2>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Items</Col>
                  <Col>
                    <div className="flex justify-center items-center">
                      <img src="/rupee-icon.svg" alt="rupee" />
                      {cart.itemsPrice}
                    </div>
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Shipping</Col>
                  <Col>
                    <div className="flex justify-center items-center">
                      <img src="/rupee-icon.svg" alt="rupee" />
                      {cart.shippingPrice}
                    </div>
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Tax</Col>
                  <Col>
                    <div className="flex justify-center items-center">
                      <img src="/rupee-icon.svg" alt="rupee" />
                      {cart.taxPrice}
                    </div>
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Total</Col>
                  <Col>
                    <div className="flex justify-center items-center">
                      <img src="/rupee-icon.svg" alt="rupee" />
                      {cart.totalPrice}
                    </div>
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                {error && (
                  <Message variant="danger">{formatApiError(error)}</Message>
                )}
              </ListGroup.Item>
              <ListGroup.Item>
                <Button
                  type="button"
                  className="btn-block"
                  disabled={cart.items.length === 0}
                  onClick={placeOrderHandler}
                >
                  Place Order
                </Button>
                {isLoading && <Spinner />}
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default PlaceOrderScreen;
