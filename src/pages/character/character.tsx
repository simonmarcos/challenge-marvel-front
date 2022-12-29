import CharacterComponent from "../../components/character/character-component";
import { ICharacterModel } from "../../shared/model/Character";

const CharacterPage = (props: { characterEntity: ICharacterModel[] }) => {
  return (
    <>
      {props.characterEntity.map((character: ICharacterModel) => {
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
  );
};

export default CharacterPage;
