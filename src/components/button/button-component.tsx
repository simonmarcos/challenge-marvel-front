import AddIcon from "@mui/icons-material/Add";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import { useTheme } from "@mui/material/styles";
import Zoom from "@mui/material/Zoom";
import { SxProps } from "@mui/system";
import { useState } from "react";

const fabStyle = {
  position: "absolute",
  bottom: 16,
  right: 16,
};

export default function FloatingActionButtonZoom() {
  const theme = useTheme();
  const [value, setValue] = useState<number>(0);

  const transitionDuration = {
    enter: theme.transitions.duration.enteringScreen,
    exit: theme.transitions.duration.leavingScreen,
  };

  const fabs = [
    {
      color: "primary" as "primary",
      sx: fabStyle as SxProps,
      icon: <AddIcon />,
      label: "Add",
    },
  ];

  const handleClick = () => {};

  return (
    <Box
      sx={{
        bgcolor: "background.paper",
        width: 500,
        position: "relative",
        minHeight: 200,
      }}
    >
      {fabs.map((fab, index) => (
        <Zoom
          key={fab.color}
          in={value === index}
          timeout={transitionDuration}
          style={{
            transitionDelay: `${
              value === index ? transitionDuration.exit : 0
            }ms`,
          }}
          onClick={handleClick}
          unmountOnExit
        >
          <Fab sx={fab.sx} aria-label={fab.label} color={fab.color}>
            {fab.icon}
          </Fab>
        </Zoom>
      ))}
    </Box>
  );
}
