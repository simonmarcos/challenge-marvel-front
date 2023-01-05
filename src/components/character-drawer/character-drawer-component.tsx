import BackspaceIcon from "@mui/icons-material/Backspace";
import Button from "@mui/material/Button";
import ButtonBase from "@mui/material/ButtonBase";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import { useEffect } from "react";
import { ICharacterMarvelModel } from "../../shared/model/Character";
import useDeleteCharacter from "../character/hook/useDeleteCharacter";
import useSetCharacterStore from "../character/hook/useSetCharacterStore";

const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
});

const CharacterDrawerComponent = (props: {
  character: ICharacterMarvelModel;
}) => {
  const { handleEvent } = useSetCharacterStore({ character: props.character });
  const { isSuccess, deleteCharacter } = useDeleteCharacter({
    marvelId: props.character.marvelId!,
  });

  useEffect(() => {
    if (isSuccess) handleEvent();
  }, [isSuccess]);

  const handleChange = () => {
    deleteCharacter();
  };

  return (
    <Paper
      sx={{
        p: 3,
        margin: "20px auto",
        maxWidth: 150,
        minWidth: 150,
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
              <Typography variant="body2" color="text.secondary">
                ID: {props.character.marvelId}
              </Typography>
              <Button
                style={{ display: "flex", margin: "0 auto" }}
                onClick={handleChange}
              >
                <BackspaceIcon />
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default CharacterDrawerComponent;
