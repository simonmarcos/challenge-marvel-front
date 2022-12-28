import { useEffect } from "react";
import CharacterComponent from "../../components/character/character-component";
import useFetchAPI from "../../shared/hooks/useFetchApi";
import { ICharacterModel } from "../../shared/model/Character";

const CharacterPage = () => {
  const { data, isPending, execute } = useFetchAPI();
  const characterEntity: ICharacterModel[] = data;

  useEffect(() => {
    execute("get", "/character/findAllFromMarvelApi");
  }, []);

  return !isPending && characterEntity.length > 0 ? (
    <>
      {characterEntity.map((character: ICharacterModel) => {
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
