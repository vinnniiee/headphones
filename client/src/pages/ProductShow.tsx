import { useParams } from "react-router-dom";
import ProductDescription from "../components/ProductDescription";
import { useGetProductByIdQuery } from "../slices/productApiSlice";
import { Spinner } from "react-bootstrap";
import Message from "../components/ui/Message";
import Reviews from "../components/Reviews";

const ProductShow = () => {
  const { id } = useParams();

  const { data: product, isLoading, error } = useGetProductByIdQuery(id);

  let errorMessage;
  if (error) {
    if ("status" in error) {
      errorMessage = (error.data as { message: string }).message;
    } else {
      errorMessage = error.message;
    }
  }
  // console.log(product);
  return isLoading ? (
    <Spinner />
  ) : error ? (
    <Message variant="danger">{errorMessage}</Message>
  ) : product ? (
    <>
      <ProductDescription p={product} />
      <Reviews reviews={product.reviews} />
    </>
  ) : (
    <p>Product not found.</p>
  );
};

export default ProductShow;
