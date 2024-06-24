import { Link, useParams } from "react-router-dom";
import Card from "../components/ui/Card";
import Message from "../components/ui/Message";
import { useGetProductsQuery } from "../slices/productApiSlice";
import { Spinner } from "react-bootstrap";
import { formatApiError } from "../utils/helpers";
import ProductCarousel from "../components/ProductCarousel";
import Paginate from "../components/Paginate";

const Home = () => {
  const { pageNumber, keyword } = useParams();

  const { data, isLoading, error } = useGetProductsQuery({
    keyword: keyword || "",
    pageNumber: pageNumber || "1",
  });

  const renderedProducts = data?.products?.map((p) => {
    return (
      <Card
        key={p._id}
        id={p._id}
        image={p.image}
        name={p.name}
        brand={p.brand}
        price={p.price}
        rating={p.rating}
        reviewsCount={p.numReviews}
      />
    );
  });
  return (
    <div className="flex flex-col gap-4  justify-center w-full items-center">
      {!keyword ? (
        <ProductCarousel className="w-full" />
      ) : (
        <div className=" w-full ml-8 md:ml-40">
          <Link to="/" className="btn btn-light mb-4">
            Go Back
          </Link>
        </div>
      )}
      <div className="flex flex-wrap gap-10 w-full justify-center items-center">
        {isLoading ? (
          <Spinner />
        ) : error ? (
          <Message variant="danger">{formatApiError(error)}</Message>
        ) : (
          <>{renderedProducts}</>
        )}
      </div>
      <Paginate
        pages={data?.pages || 0}
        page={data?.page || 1}
        keyword={keyword ? keyword : ""}
      />
    </div>
  );
};

export default Home;
