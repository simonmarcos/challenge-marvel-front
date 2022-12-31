import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";

const useCheckID = (id: number): boolean => {
  const characterIDsList: Array<number> = useSelector(
    (state: RootState) => state.characterSlice.characters
  );

  const checkIfThisCharacterExistsInList = (): boolean => {
    const characterFound = characterIDsList.find(
      (characterID) => characterID === id
    );
    return characterFound === undefined ? false : true;
  };

  return checkIfThisCharacterExistsInList();
};

export default useCheckID;
