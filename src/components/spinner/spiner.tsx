import CircularProgress from "@mui/material/CircularProgress";
import Stack from "@mui/material/Stack";

import "./styles.scss";

const SnipperComponent = () => {
  return (
    <Stack
      className="spinner-container"
      sx={{ color: "grey.500" }}
      spacing={2}
      direction="row"
    >
      <CircularProgress color="secondary" />
      <CircularProgress color="success" />
      <CircularProgress color="inherit" />
    </Stack>
  );
};

export default SnipperComponent;
