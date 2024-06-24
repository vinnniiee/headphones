import Message from "./ui/Message";
import { Link, useParams } from "react-router-dom";
import { Button, Col, Form, ListGroup, Row, Spinner } from "react-bootstrap";
import Ratings from "./ui/Ratings";
import { Review } from "../types/product";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import { useCreateReviewMutation } from "../slices/productApiSlice";
import { useState } from "react";
import { toast } from "react-toastify";
import { formatApiError } from "../utils/helpers";

const Reviews = ({ reviews }: { reviews: Review[] }) => {
  const { userInfo } = useSelector((state: RootState) => state.auth);
  const { id: productId } = useParams();
  const [createReview, { isLoading: loadingProductReview }] =
    useCreateReviewMutation();

  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      await createReview({
        productId: productId!,
        rating,
        comment,
      }).unwrap();
      setRating(0);
      setComment("");
      toast.success("Review created successfully");
    } catch (err) {
      toast.error(formatApiError(err));
    }
  };
  return (
    <Row className="w-full flex flex-col justify-center items-center my-8">
      <Col md={6}>
        <h2>Reviews</h2>
        {reviews.length === 0 && <Message>No Reviews</Message>}
        <ListGroup variant="flush">
          {reviews.map((review) => (
            <ListGroup.Item key={review._id}>
              <strong>{review.name}</strong>
              <Ratings rating={review.rating} />
              <p>{review.createdAt.toString().substring(0, 10)}</p>
              <p>{review.comment}</p>
            </ListGroup.Item>
          ))}
          <ListGroup.Item>
            <h2>Write a Customer Review</h2>

            {loadingProductReview && <Spinner />}

            {userInfo ? (
              <Form onSubmit={submitHandler}>
                <Form.Group className="my-2" controlId="rating">
                  <Form.Label>Rating</Form.Label>
                  <Form.Control
                    as="select"
                    required
                    value={rating}
                    onChange={(e) => setRating(parseFloat(e.target.value))}
                  >
                    <option value="">Select...</option>
                    <option value="1">1 - Poor</option>
                    <option value="2">2 - Fair</option>
                    <option value="3">3 - Good</option>
                    <option value="4">4 - Very Good</option>
                    <option value="5">5 - Excellent</option>
                  </Form.Control>
                </Form.Group>
                <Form.Group className="my-2" controlId="comment">
                  <Form.Label>Comment</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    required
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                  ></Form.Control>
                </Form.Group>
                <Button
                  disabled={loadingProductReview}
                  type="submit"
                  variant="primary"
                >
                  Submit
                </Button>
              </Form>
            ) : (
              <Message>
                Please <Link to="/login">sign in</Link> to write a review
              </Message>
            )}
          </ListGroup.Item>
        </ListGroup>
      </Col>
    </Row>
  );
};

export default Reviews;
