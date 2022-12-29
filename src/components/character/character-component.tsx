import ButtonBase from "@mui/material/ButtonBase";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import { ICharacterModel } from "../../shared/model/Character";

const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
});

export default function CharacterComponent(props: ICharacterModel) {
  return (
    <Paper
      sx={{
        p: 4,
        margin: "20px auto",
        maxWidth: 500,
        flexGrow: 1,
        backgroundColor: (theme) =>
          theme.palette.mode === "dark" ? "#1A2027" : "#fff",
      }}
    >
      <Grid container spacing={2}>
        <Grid item>
          <ButtonBase sx={{ width: 128, height: 128 }}>
            <Img alt="complex" src={props.thumbnail?.toString()} />
          </ButtonBase>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item container direction="column" spacing={2}>
            <Grid item>
              <Typography gutterBottom variant="subtitle1" component="div">
                {props.name}
              </Typography>
              <Typography variant="body2" gutterBottom>
                {props.description !== ""
                  ? props.description
                  : "Sin descripción"}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                ID: {props.id}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
}
