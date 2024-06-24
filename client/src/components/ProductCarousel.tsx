import { Link } from "react-router-dom";
import { Carousel, Image } from "react-bootstrap";
import { useGetFeaturedProductsQuery } from "../slices/productApiSlice";
import { formatApiError } from "../utils/helpers";
import Message from "./ui/Message";
import Currency from "./ui/Currency";
const ProductCarousel = ({ className }: { className?: string }) => {
  const { data: products, isLoading, error } = useGetFeaturedProductsQuery();

  return isLoading ? null : error ? (
    <Message variant="danger">{formatApiError(error)}</Message>
  ) : (
    <Carousel
      pause="hover"
      className={`bg-primary mb-4 rounded overflow-hidden shadow h-[300px] w-full mx-10 ${className}`}
    >
      {products?.map((product) => (
        <Carousel.Item key={product._id} className="h-[300px]">
          <Link to={`/products/${product._id}`}>
            <div className="flex justify-between w-full">
              <Image
                src={product.image}
                alt={product.name}
                fluid
                className="h-[300px]"
              />
              <Carousel.Caption className=" relative  flex justify-end items-center  h-[300px] px-4  bg-gradient-to-r from-gray-600 to-black/20">
                <h2 className="text-white text-right  leading-5 flex flex-col gap-2 absolute top-8">
                  {product.name}{" "}
                  <div className="flex justify-end items-center gap-1 text-xl">
                    <Currency color="white" size={12} amount={product.price}  className="gap-1"/>
                  </div>
                </h2>
              </Carousel.Caption>
            </div>
          </Link>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default ProductCarousel;
