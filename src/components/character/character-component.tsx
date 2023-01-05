import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import StarPurple500Icon from "@mui/icons-material/StarPurple500";
import ButtonBase from "@mui/material/ButtonBase";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import { useTranslation } from "react-i18next";
import { ICharacterMarvelModel } from "../../shared/model/Character";
import ButtonSelectedComponent from "../button/button-selected";
import useSetCharacterStore from "./hook/useSetCharacterStore";

import "./styles.scss";

const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
});

const CharacterComponent = (props: { character: ICharacterMarvelModel }) => {
  const { t: translate } = useTranslation("character");
  const { checked, handleEvent } = useSetCharacterStore({
    character: props.character,
  });

  const handleChange = () => {
    if (!checked) handleEvent();
  };

  return (
    <Paper
      className={checked ? "paper-checked" : ""}
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
                  : translate("app.character.cards.description")}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                ID: {props.character.marvelId}
              </Typography>
              <ButtonSelectedComponent
                handleChange={handleChange}
                icon={
                  checked ? <StarPurple500Icon /> : <AddCircleOutlineIcon />
                }
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default CharacterComponent;
