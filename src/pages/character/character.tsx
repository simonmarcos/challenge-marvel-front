import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CharacterComponent from "../../components/character/character-component";
import useFetchAPI from "../../shared/hooks/useFetchApi";
import { ICharacterModel } from "../../shared/model/Character";
import { AppDispatch, RootState } from "../../store/store";

const CharacterPage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { data, isPending, isSuccess, error, execute } = useFetchAPI();

  const characterEntity: ICharacterModel[] = useSelector(
    (state: RootState) => state.characterSlice.characters
  );

  useEffect(() => {
    // dispatch(getEntitiesForMarvelAPI({}));
    execute("get", "/character/findAllFromMarvelApi");
  }, []);

  return !isPending ? (
    <>
      {data.map((character: any) => {
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

export default CharacterPage;
