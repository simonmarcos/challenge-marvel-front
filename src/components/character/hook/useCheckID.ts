import { useSelector } from "react-redux";
import { ICharacterMarvelModel } from "../../../shared/model/Character";
import { RootState } from "../../../store/store";

const useCheckID = (id: number): boolean => {
  const characterIDsList: ICharacterMarvelModel[] = useSelector(
    (state: RootState) => state.characterSlice.characters
  );

  const checkIfThisCharacterExistsInList = (): boolean => {
    const characterFound = characterIDsList.find(
      (character) => character.marvelId === id
    );
    return characterFound === undefined ? false : true;
  };

  return checkIfThisCharacterExistsInList();
};

export default useCheckID;
