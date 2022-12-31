import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import { useDispatch } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { setPagination } from "../../store/slices/paginationSilice";
import { AppDispatch } from "../../store/store";

const PaginationComponent = () => {
  const dispatch = useDispatch<AppDispatch>();
  const location = useLocation();

  const query = new URLSearchParams(location.search);
  const page = parseInt(query.get("page") || "1", 10);

  const handlePagination = (value: number) => {
    dispatch(setPagination(value));
  };

  return (
    <Pagination
      page={page}
      count={78}
      renderItem={(item) => (
        <PaginationItem
          component={Link}
          to={`/character${item.page === 1 ? "" : `?page=${item.page}`}`}
          {...item}
          onClick={() => {
            handlePagination(item.page!);
          }}
        />
      )}
    />
  );
};

export default PaginationComponent;
