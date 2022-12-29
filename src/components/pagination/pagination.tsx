import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import { Link, useLocation } from "react-router-dom";

const PaginationComponent = (props: { handlePagination: any }) => {
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const page = parseInt(query.get("page") || "1", 10);

  return (
    <Pagination
      page={page}
      count={78}
      renderItem={(item) => (
        <PaginationItem
          component={Link}
          to={`/home${item.page === 1 ? "" : `?page=${item.page}`}`}
          {...item}
          onClick={() => {
            props.handlePagination(item.page);
          }}
        />
      )}
    />
  );
};

export default PaginationComponent;
