import { List, Paper, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { ICharacterMarvelModel } from "../../shared/model/Character";
import { RootState } from "../../store/store";
import FloatingActionButtonZoom from "../button/button-component";
import CharacterDrawerComponent from "../character-drawer/character-drawer-component";

const DrawerComponent = () => {
  const charactersEntity: ICharacterMarvelModel[] = useSelector(
    (state: RootState) => state.characterSlice.characters
  );

  return (
    <Paper
      style={{
        border: 5,
        borderColor: "red",
        marginTop: 20,
        maxHeight: 1500,
        overflow: "auto",
        padding: 20,
      }}
    >
      <Typography variant="h6" component="p" style={{ textAlign: "center" }}>
        {charactersEntity.length > 0
          ? "MIS SELECCIONES"
          : "SELECCIONE PERSONAJES PARA SU PERFIL"}
      </Typography>

      {charactersEntity.length > 0 ? (
        <>
          <div>
            <FloatingActionButtonZoom />
          </div>
          <List>
            {charactersEntity.map((character: ICharacterMarvelModel) => {
              return (
                <CharacterDrawerComponent
                  key={`index ${character.marvelId}`}
                  character={character}
                />
              );
            })}
          </List>
        </>
      ) : null}
    </Paper>
  );
};

export default DrawerComponent;
