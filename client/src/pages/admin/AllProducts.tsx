import { LinkContainer } from "react-router-bootstrap";
import { Table, Button, Row, Col, Spinner } from "react-bootstrap";
import { FaEdit, FaPlus, FaTrash } from "react-icons/fa";

import { toast } from "react-toastify";
import {
  useCreateProductMutation,
  useDeleteProductMutation,
  useGetProductsQuery,
} from "../../slices/productApiSlice";
import { formatApiError } from "../../utils/helpers";
import Message from "../../components/ui/Message";
import { useParams } from "react-router-dom";
import Paginate from "../../components/Paginate";
import Currency from "../../components/ui/Currency";

const AllProducts = () => {
  const { pageNumber, keyword } = useParams();

  const { data, isLoading, error } = useGetProductsQuery({
    keyword: keyword || "",
    pageNumber: pageNumber || "1",
  });
  const [deleteProduct, { isLoading: loadingDelete }] =
    useDeleteProductMutation();

  const deleteHandler = async (id: string) => {
    if (window.confirm("Are you sure")) {
      try {
        await deleteProduct(id);
        toast.success("Product deleted successfully.");
      } catch (err) {
        toast.error(formatApiError(err));
      }
    }
  };

  const [createProduct, { isLoading: loadingCreate }] =
    useCreateProductMutation();

  const createProductHandler = async () => {
    if (window.confirm("Are you sure you want to create a new product?")) {
      try {
        await createProduct().unwrap();
      } catch (err) {
        toast.error(formatApiError(err));
      }
    }
  };

  return (
    <>
      <Row className="align-items-center">
        <Col>
          <h1>Products</h1>
        </Col>
        <Col className="text-end">
          <Button
            className="my-3 flex justify-center items-center leading-4"
            onClick={createProductHandler}
          >
            <FaPlus /> Create Product
          </Button>
        </Col>
      </Row>

      {loadingCreate && <Spinner />}
      {loadingDelete && <Spinner />}
      {isLoading ? (
        <Spinner />
      ) : error ? (
        <Message variant="danger">{formatApiError(error)}</Message>
      ) : (
        <>
          <Table striped bordered hover responsive className="table-sm">
            <thead>
              <tr>
                <th>ID</th>
                <th>NAME</th>
                <th>PRICE</th>
                <th>CATEGORY</th>
                <th>BRAND</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {data?.products?.map((product) => (
                <tr key={product._id} className="">
                  <td>{product._id}</td>
                  <td>{product.name}</td>
                  <td><Currency amount={product.price}/></td>
                  <td>{product.category}</td>
                  <td>{product.brand}</td>
                  <td>
                    <div className="flex items-center h-full justify-center">
                    <LinkContainer to={`/admin/products/${product._id}/edit`}>
                      <Button variant="light" className="btn-sm mx-2">
                        <FaEdit />
                      </Button>
                    </LinkContainer>
                    <Button
                      variant="danger"
                      className="btn-sm"
                      onClick={() => deleteHandler(product._id)}
                    >
                      <FaTrash style={{ color: "white" }} />
                    </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          <Paginate pages={data?.pages} page={data?.page} keyword={keyword} />
        </>
      )}
    </>
  );
};

export default AllProducts;
