import { FaStar, FaStarHalf } from "react-icons/fa";

const Ratings = ({ rating }: { rating: number }) => {
  return (
    <div className="flex justify-center items-center gap-0.5 h-4">
      {rating > 0.7 ? <FaStar fill="rgba(0,0,0,1)"/> : rating === 0 ? <></> : <FaStarHalf fill="rgba(0,0,0,1)" />}
      {rating > 1.7 ? <FaStar fill="rgba(0,0,0,1)"/> : rating <= 1 ? <></> : <FaStarHalf fill="rgba(0,0,0,1)"/>}
      {rating > 2.7 ? <FaStar fill="rgba(0,0,0,1)"/> : rating <= 2 ? <></> : <FaStarHalf fill="rgba(0,0,0,1)"/>}
      {rating > 3.7 ? <FaStar fill="rgba(0,0,0,1)"/> : rating <= 3 ? <></> : <FaStarHalf fill="rgba(0,0,0,1)"/>}
      {rating > 4.7 ? <FaStar fill="rgba(0,0,0,1)"/> : rating <= 4 ? <></> : <FaStarHalf fill="rgba(0,0,0,1)"/>}
    </div>
  );
};

export default Ratings;
