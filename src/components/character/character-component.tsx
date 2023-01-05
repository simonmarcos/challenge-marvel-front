import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import StarPurple500Icon from "@mui/icons-material/StarPurple500";
import { Button } from "@mui/material";
import ButtonBase from "@mui/material/ButtonBase";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import { ICharacterMarvelModel } from "../../shared/model/Character";
import useSetCharacterStore from "./hook/useSetCharacterStore";

const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
});

const CharacterComponent = (props: { character: ICharacterMarvelModel }) => {
  const { checked, handleEvent } = useSetCharacterStore({
    character: props.character,
  });

  const handleChange = () => {
    if (!checked) handleEvent();
  };

  return (
    <Paper
      sx={{
        p: 3,
        margin: "20px auto",
        maxWidth: 450,
        minWidth: 450,
        minHeight: 100,
        maxHeight: 200,
        flexGrow: 1,
        borderRadius: 3,
        backgroundColor: (theme) =>
          theme.palette.mode === "dark" ? "#1A2027" : "#fff",
      }}
    >
      <Grid container spacing={2}>
        <Grid item>
          <ButtonBase sx={{ width: 128, height: 128 }}>
            <Img alt="complex" src={props.character.thumbnail?.toString()} />
          </ButtonBase>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item container direction="column" spacing={2}>
            <Grid item>
              <Typography gutterBottom variant="subtitle1" component="div">
                {props.character.name}
              </Typography>
              <Typography variant="body2" gutterBottom>
                {props.character.description !== ""
                  ? props.character.description
                  : "Sin descripción"}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                ID: {props.character.marvelId}
              </Typography>
              {checked ? (
                <Button
                  style={{ display: "flex", margin: "0 auto" }}
                  onClick={handleChange}
                >
                  <StarPurple500Icon />
                </Button>
              ) : (
                <Button
                  style={{ display: "flex", margin: "0 auto" }}
                  onClick={handleChange}
                >
                  <AddCircleOutlineIcon />
                </Button>
              )}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default CharacterComponent;
