import { useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  Row,
  Col,
  ListGroup,
  Image,
  Card,
  Button,
  Spinner,
} from "react-bootstrap";
import {
  OnApproveData,
  OnApproveActions,
  CreateOrderData,
  CreateOrderActions,
} from "@paypal/paypal-js/types/components/buttons";
import {
  PayPalButtons,
  SCRIPT_LOADING_STATE,
  usePayPalScriptReducer,
} from "@paypal/react-paypal-js";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import {
  useGetOrderByIdQuery,
  usePayOrderMutation,
  useGetPaypalClientIdQuery,
  useDeliverOrderMutation,
} from "../slices/orderApiSlice";
import Message from "../components/ui/Message";
import { formatApiError } from "../utils/helpers";
import { RootState } from "../store";
import Currency from "../components/ui/Currency";
// import { PayPalOrderDetails } from "../types/paypal";

const Order = () => {
  const { id } = useParams();
  const orderId: string = id || "";
  const navigate = useNavigate();
  useEffect(() => {
    if (!orderId) {
      navigate(-1);
    }
  }, [orderId, navigate]);
  let {
    data: order,
    refetch,
    isLoading,
    error,
  } = useGetOrderByIdQuery(orderId!);

  const [deliverOrder, { isLoading: loadingDeliver }] =
    useDeliverOrderMutation();

  const deliverHandler = async () => {
    await deliverOrder(orderId);
    refetch();
  };

  const [payOrder, { isLoading: loadingPay }] = usePayOrderMutation();

  const { userInfo } = useSelector((state: RootState) => state.auth);

  const [{ isPending }, paypalDispatch] = usePayPalScriptReducer();

  const {
    data: paypal,
    isLoading: loadingPayPal,
    error: errorPayPal,
  } = useGetPaypalClientIdQuery();

  useEffect(() => {
    if (!errorPayPal && !loadingPayPal && paypal && paypal.clientId) {
      const loadPaypalScript = async () => {
        paypalDispatch({
          type: "resetOptions",
          value: {
            "client-id": paypal.clientId,
            currency: "USD",
          },
        });
        paypalDispatch({
          type: "setLoadingStatus",
          value: SCRIPT_LOADING_STATE.PENDING,
        });
      };
      if (order && !order.isPaid) {
        if (!window.paypal) {
          loadPaypalScript();
        }
      }
    }
  }, [errorPayPal, loadingPayPal, order, paypal, paypalDispatch]);

  async function onApprove(
    data: OnApproveData,
    actions: OnApproveActions
  ): Promise<void> {
    try {
      const details = await actions?.order?.capture();
      await payOrder({ orderId, details: details! });
      refetch();
      toast.success("Order is paid");
    } catch (err: any) {
      toast.error(err.message);
    }
  }

  // async function onApproveTest() {
  //   const testDetails: PayPalOrderDetails = { payer: {} };
  //   try {
  //     await payOrder({ orderId, details: testDetails });
  //     refetch();
  //     toast.success("Order is paid");
  //   } catch (err: any) {
  //     toast.error(err);
  //   }
  // }
  // if (error) {
  //   error = formatApiError(error);
  // }

  function onError(err: any) {
    toast.error(err.message);
  }

  function createOrder(data: CreateOrderData, actions: CreateOrderActions) {
    if (!order) {
      toast.error("Invalid order!");
    }
    return actions.order
      .create({
        purchase_units: [
          {
            amount: { value: order!.totalPrice.toString() },
          },
        ],
      })
      .then((orderID) => {
        return orderID;
      });
  }

  return isLoading ? (
    <Spinner />
  ) : error ? (
    <Message variant="danger">{formatApiError(error)}</Message>
  ) : (
    <>
      <h1>Order {order!._id}</h1>
      <Row>
        <Col md={8}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h2>Shipping</h2>
              <p>
                <strong>Name: </strong> {order!.user.name}
              </p>
              <p>
                <strong>Email: </strong>{" "}
                <a href={`mailto:${order!.user.email}`}>{order!.user.email}</a>
              </p>
              <p>
                <strong>Address:</strong>
                {order!.shippingAddress.address}, {order!.shippingAddress.city}{" "}
                {order!.shippingAddress.postalCode},{" "}
                {order!.shippingAddress.country}
              </p>
              {order!.isDelivered ? (
                <Message variant="success">
                  Delivered on {order!.deliveredAt?.toString().substring(0, 10)}
                </Message>
              ) : (
                <Message variant="danger">Not Delivered</Message>
              )}
            </ListGroup.Item>

            <ListGroup.Item>
              <h2>Payment Method</h2>
              <p>
                <strong>Method: </strong>
                {order!.paymentMethod}
              </p>
              {order!.isPaid ? (
                <Message variant="success">
                  Paid on {order!.paidAt?.toString().substring(0, 10)}
                </Message>
              ) : (
                <Message variant="danger">Not Paid</Message>
              )}
            </ListGroup.Item>

            <ListGroup.Item>
              <h2>Order Items</h2>
              {order!.orderItems.length === 0 ? (
                <Message>Order is empty</Message>
              ) : (
                <ListGroup variant="flush">
                  {order!.orderItems.map((item, index) => (
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
                          <Link to={`/product/${item.product}`}>
                            {item.name}
                          </Link>
                        </Col>
                        <Col
                          md={4}
                          className="flex items-center gap-2 text-black/70"
                        >
                          {item.quantity} x <Currency amount={item.price} /> ={" "}
                          <Currency amount={item.quantity * item.price} />
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
                    <Currency amount={order!.itemsPrice} />
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Shipping</Col>
                  <Col>
                    <Currency amount={order!.shippingPrice} />
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Tax</Col>
                  <Col>
                    <Currency amount={order!.taxPrice} />
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Total</Col>
                  <Col>
                    <Currency amount={order!.totalPrice} />
                  </Col>
                </Row>
              </ListGroup.Item>
              {!order!.isPaid && (
                <ListGroup.Item>
                  {loadingPay && <Spinner />}

                  {isPending ? (
                    <Spinner />
                  ) : (
                    <div>
                      {/* <Button
                        style={{ marginBottom: "10px" }}
                        onClick={onApproveTest}
                      >
                        Test Pay Order
                      </Button> */}

                      <div>
                        <PayPalButtons
                          createOrder={createOrder}
                          onApprove={onApprove}
                          onError={onError}
                        ></PayPalButtons>
                      </div>
                    </div>
                  )}
                </ListGroup.Item>
              )}
              {loadingDeliver && <Spinner />}
              {userInfo &&
                userInfo.isAdmin &&
                order?.isPaid &&
                !order?.isDelivered && (
                  <ListGroup.Item>
                    <Button
                      type="button"
                      className="btn btn-block"
                      onClick={deliverHandler}
                    >
                      Mark As Delivered
                    </Button>
                  </ListGroup.Item>
                )}
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default Order;
