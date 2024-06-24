import { useState, useEffect } from "react";
import { Form, Button, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import FormContainer from "../components/FormContainer";
import { savePaymentMethod } from "../slices/cartSlice";
import { RootState } from "../store";

const PaymentScreen = () => {
  const navigate = useNavigate();
  const cart = useSelector((state: RootState) => state.cart);
  const { shippingAddress } = cart;

  useEffect(() => {
    if (!shippingAddress.address) {
      navigate("/shipping");
    }
  }, [navigate, shippingAddress]);

  const [paymentMethod, setPaymentMethod] = useState("PayPal");

  const dispatch = useDispatch();

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(savePaymentMethod(paymentMethod));
    navigate("/placeorder");
  };
 
  return (
    <FormContainer className="shadow p-4">
      {/* <CheckoutSteps step1 step2 step3 /> */}
      <h1 className="w-full text-left text-3xl">Payment Method</h1>
      <Form onSubmit={submitHandler} className=" w-full gap-6">
        <Form.Group className="flex flex-col gap-2">
          <Form.Label as="legend" className="text-black/40">Select Method</Form.Label>
          <Col>
            <Form.Check
              className="my-2"
              type="radio"
              label="PayPal or Credit Card"
              id="PayPal"
              name="paymentMethod"
              value="PayPal"
              checked
              onChange={(e) => setPaymentMethod(e.target.value)}
            ></Form.Check>
          </Col>
        </Form.Group>

        <Button type="submit" variant="primary" className="mt-4">
          Continue
        </Button>
      </Form>
    </FormContainer>
  );
};

export default PaymentScreen;
