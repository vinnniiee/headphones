import React, { useEffect, useState } from "react";
import { Table, Form, Button, Row, Col, Spinner } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { FaTimes } from "react-icons/fa";

import { toast } from "react-toastify";
import { useProfileMutation } from "../slices/userApiSlice";
import { useGetOrdersQuery } from "../slices/orderApiSlice";
import { setCredentials } from "../slices/authSlice";
import { RootState } from "../store";
import { useNavigate } from "react-router-dom";
import { formatApiError } from "../utils/helpers";
import Message from "../components/ui/Message";
import Currency from "../components/ui/Currency";

const ProfileScreen = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const { userInfo } = useSelector((state: RootState) => state.auth);

  const { data: orders, isLoading, error } = useGetOrdersQuery();

  const navigate = useNavigate();

  const [
    updateProfile,
    // { isLoading: loadingUpdateProfile }
  ] = useProfileMutation();

  useEffect(() => {
    if (!userInfo) {
      navigate("/user");
    } else {
      setName(userInfo.name);
      setEmail(userInfo.email);
    }
  }, [userInfo, navigate, userInfo?.email, userInfo?.name]);

  const dispatch = useDispatch();
  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
    } else {
      try {
        const res = await updateProfile({
          name,
          email,
          password,
        }).unwrap();
        dispatch(setCredentials({ ...res }));
        toast.success("Profile updated successfully");
      } catch (err) {
        toast.error(formatApiError(err));
      }
    }
  };

  return (
    <Row className="w-full">
      <Col md={3}>
        <h2>User Profile</h2>

        <Form onSubmit={submitHandler}>
          <Form.Group className="my-2" controlId="name">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="name"
              placeholder="Enter name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Form.Group className="my-2" controlId="email">
            <Form.Label>Email Address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Form.Group className="my-2" controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Form.Group className="my-2" controlId="confirmPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Confirm password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Button type="submit" variant="primary">
            Update
          </Button>
        </Form>
      </Col>
      <Col md={9}>
        <h2>My Orders</h2>
        {isLoading ? (
          <Spinner />
        ) : error ? (
          <Message variant="danger">{formatApiError(error)}</Message>
        ) : (
          <Table striped hover responsive className="table-sm">
            <thead>
              <tr>
                <th>ID</th>
                <th>DATE</th>
                <th>TOTAL</th>
                <th>PAID</th>
                <th>DELIVERED</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {orders?.map((order) => (
                <tr key={order._id}>
                  <td>{order._id}</td>
                  <td>{order.createdAt?.toString().substring(0, 10)}</td>
                  <td>
                    <div className="flex justify-center items-center">
                      <Currency amount={order.totalPrice} />
                    </div>
                  </td>
                  <td>
                    {order.isPaid ? (
                      order.paidAt?.toString().substring(0, 10)
                    ) : (
                      <div className="flex justify-center items-center pt-1">
                        <FaTimes style={{ color: "red" }} />
                      </div>
                    )}
                  </td>
                  <td>
                    {order.isDelivered ? (
                      order.deliveredAt?.toString().substring(0, 10)
                    ) : (
                      <div className="flex justify-center items-center pt-1">
                        <FaTimes style={{ color: "red" }} />
                      </div>
                    )}
                  </td>
                  <td>
                    <LinkContainer to={`/order/${order._id}`}>
                      <Button className="btn-sm" variant="light">
                        Details
                      </Button>
                    </LinkContainer>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        )}
      </Col>
    </Row>
  );
};

export default ProfileScreen;
