import { ICharacterModel } from "../../shared/model/Character";
import CharacterComponent from "../character/character-component";
import PaginationLink from "../pagination/pagination";

import "./styles.scss";

const HomeComponent = (props: { characterEntity: ICharacterModel[] }) => {
  const GroupOfCharactersComponent = () => (
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

  return (
    <div className="container">
      <div className="group-of-characters">
        <GroupOfCharactersComponent />
      </div>
      <div>
        <PaginationLink />
      </div>
    </div>
  );
};

export default HomeComponent;
