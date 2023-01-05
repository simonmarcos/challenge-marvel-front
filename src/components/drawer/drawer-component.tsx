import { List, Paper, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { ICharacterMarvelModel } from "../../shared/model/Character";
import { RootState } from "../../store/store";
import FloatingActionButtonZoom from "../button/button-component";
import CharacterDrawerComponent from "../character-drawer/character-drawer-component";

const DrawerComponent = () => {
  const { t: translate } = useTranslation("drawer");
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
          ? translate("app.drawer.myselections")
          : translate("app.drawer.selection")}
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
