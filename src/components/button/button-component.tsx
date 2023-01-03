import AddIcon from "@mui/icons-material/Add";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import { useTheme } from "@mui/material/styles";
import Zoom from "@mui/material/Zoom";
import { SxProps } from "@mui/system";
import { useSelector } from "react-redux";
import useFetchAPI from "../../shared/hooks/useFetchApi";
import { ICharacterMarvelModel } from "../../shared/model/Character";
import { IUserModel } from "../../shared/model/User";
import { HTTP_METHOD } from "../../shared/utils/const";
import { RootState } from "../../store/store";

const fabStyle = {
  position: "absolute",
  bottom: 16,
  right: 16,
};

export const FloatingActionButtonZoom = () => {
  const theme = useTheme();
  const { execute, cleanInitialValues } = useFetchAPI();

  const charactersEntity: ICharacterMarvelModel[] = useSelector(
    (state: RootState) => state.characterSlice.characters
  );

  const userEntity: IUserModel = useSelector(
    (state: RootState) => state.userSlice.user
  );

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

  const handleClick = () => {
    execute(
      HTTP_METHOD.post,
      `/character/save?userId=${userEntity.id}`,
      charactersEntity
    );
    return () => {
      cleanInitialValues();
    };
  };

  return (
    <Box
      sx={{
        bgcolor: "background.paper",
        width: 500,
        position: "relative",
        minHeight: 200,
      }}
    >
      {fabs.map((fab) => (
        <Zoom
          key={fab.color}
          in={true}
          timeout={transitionDuration}
          style={{
            transitionDelay: `${transitionDuration.exit}ms`,
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
};

export default FloatingActionButtonZoom;
