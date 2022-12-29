import { useDispatch } from "react-redux";
import { ICharacterModel } from "../../shared/model/Character";
import { setPagination } from "../../store/slices/paginationSilice";
import { AppDispatch } from "../../store/store";
import CharacterComponent from "../character/character-component";
import PaginationComponent from "../pagination/pagination";

import "./styles.scss";

const HomeComponent = (props: { characterEntity: ICharacterModel[] }) => {
  const dispatch = useDispatch<AppDispatch>();

  const handlePagination = (value: number) => {
    dispatch(setPagination(value));
  };

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
      <div className="pagination">
        <PaginationComponent handlePagination={handlePagination} />
      </div>
    </div>
  );
};

export default HomeComponent;
