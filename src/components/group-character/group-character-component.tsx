import {
  ICharacterMarvelModel
} from "../../shared/model/Character";
import FloatingActionButtonZoom from "../button/button-component";
import CharacterComponent from "../character/character-component";
import PaginationComponent from "../pagination/pagination";

import "./styles.scss";

const GroupCharactersComponent = (props: {
  characterEntity: ICharacterMarvelModel[];
}) => {
  const GroupOfCharactersComponent = () => (
    <>
      {props.characterEntity.map((character: ICharacterMarvelModel) => {
        return (
          <CharacterComponent
            key={`index ${character.marvelId}`}
            marvelId={character.marvelId}
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
        <FloatingActionButtonZoom />
      </div>
      <div className="pagination">
        <PaginationComponent />
      </div>
    </div>
  );
};

export default GroupCharactersComponent;
