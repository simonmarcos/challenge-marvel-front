import { List, Paper } from "@mui/material";
import { useSelector } from "react-redux";
import { ICharacterMarvelModel } from "../../shared/model/Character";
import { RootState } from "../../store/store";
import CharacterMiniComponent from "../character-mini/character-mini-component";

const DrawerComponent = () => {
  const charactersEntity: ICharacterMarvelModel[] = useSelector(
    (state: RootState) => state.characterSlice.characters
  );

  return charactersEntity.length > 0 ? (
    <Paper style={{ maxHeight: 1500, overflow: "auto" }}>
      <List>
        {charactersEntity.map((character: ICharacterMarvelModel) => {
          return (
            <CharacterMiniComponent
              character={{ ...character, description: null }}
            />
          );
        })}
      </List>
    </Paper>
  ) : null;
};

export default DrawerComponent;
