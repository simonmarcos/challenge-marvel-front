import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CharacterComponent from "../../components/character/character-component";
import withAuth from "../../shared/hoc/authenticated";
import { ICharacterModel } from "../../shared/model/Character";
import { getEntitiesForMarvelAPI } from "../../store/slices/characterSlice";
import { AppDispatch, RootState } from "../../store/store";

const CharacterPage = () => {
  const dispatch = useDispatch<AppDispatch>();

  const characterEntity: ICharacterModel[] = useSelector(
    (state: RootState) => state.characterSlice.characters
  );

  useEffect(() => {
    dispatch(getEntitiesForMarvelAPI({}));
  }, []);

  return characterEntity.length > 0 ? (
    <>
      {characterEntity.map((character) => {
        return (
          <CharacterComponent
            key={`index ${character.id}`}
            id={character.id}
            name={character.name}
            description={character.description}
            thumbnail={character.thumbnail}
          />
        );
      })}
    </>
  ) : (
    <>LOADING</>
  );
};

export default withAuth(CharacterPage);
