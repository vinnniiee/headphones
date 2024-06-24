import { LinkContainer } from "react-router-bootstrap";
import { Table, Button, Spinner } from "react-bootstrap";
import { FaTimes } from "react-icons/fa";
import Message from "../../components/ui/Message";
import { useGetAllOrdersQuery } from "../../slices/orderApiSlice";
import { formatApiError } from "../../utils/helpers";
import Currency from "../../components/ui/Currency";

const AllOrders = () => {
  const { data: orders, isLoading, error } = useGetAllOrdersQuery();
  console.log(orders);
  return (
    <>
      <h1>Orders</h1>
      {isLoading ? (
        <Spinner />
      ) : error ? (
        <Message variant="danger">{formatApiError(error)}</Message>
      ) : (
        <Table striped bordered hover responsive className="table-sm">
          <thead>
            <tr>
              <th>ID</th>
              <th>USER</th>
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
                <td>{order.user && order.user.name}</td>
                <td>{order.createdAt?.toString().substring(0, 10)}</td>
                <td><Currency amount={order.totalPrice}/></td>
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
                    <Button variant="light" className="btn-sm">
                      Details
                    </Button>
                  </LinkContainer>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </>
  );
};

export default AllOrders;
