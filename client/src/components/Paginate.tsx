import { Pagination } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { useLocation } from "react-router-dom";

const Paginate = ({
  pages = 0,
  page = 1,
  isAdmin = false,
  keyword = "",
}: {
  pages?: number;
  page?: number;
  isAdmin?: Boolean;
  keyword?: string;
}) => {
  const location = useLocation();
  const currentUrl = location.pathname.split('/page')[0];
  const paginatedUrl = currentUrl.endsWith('/')?currentUrl+"page/":currentUrl+"/page/"
  // console.log(currentUrl)
  // console.log(paginatedUrl);
  return pages > 1 ? (
    <Pagination className="my-8">
      {Array.from({ length: pages }, (_, x) => (
        <LinkContainer
          key={x + 1}
          to={paginatedUrl+(x+1)}
        >
          <Pagination.Item active={x + 1 === page}>{x + 1}</Pagination.Item>
        </LinkContainer>
      ))}
    </Pagination>
  ) : (
    <></>
  );
};

export default Paginate;
