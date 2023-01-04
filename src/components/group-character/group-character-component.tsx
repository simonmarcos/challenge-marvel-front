import { ICharacterMarvelModel } from "../../shared/model/Character";
import CharacterComponent from "../character/character-component";
import DrawerComponent from "../drawer/drawer-component";
import PaginationComponent from "../pagination/pagination";

import "./styles.scss";

const GroupCharactersComponent = (props: {
  characterEntity: ICharacterMarvelModel[];
}) => {
  const GroupOfCharactersComponent = () => (
    <>
      {props.characterEntity.map((character: ICharacterMarvelModel) => {
        return <CharacterComponent character={character} />;
      })}
    </>
  );

  return (
    <div className="container">
      <div>
        <DrawerComponent />
      </div>
      <div className="characters">
        <div className="group-of-characters">
          <GroupOfCharactersComponent />
        </div>
        <div className="pagination">
          <PaginationComponent />
        </div>
      </div>
    </div>
  );
};

export default GroupCharactersComponent;
