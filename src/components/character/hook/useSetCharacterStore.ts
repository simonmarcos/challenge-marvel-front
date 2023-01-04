import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { ICharacterMarvelModel } from "../../../shared/model/Character";
import {
  deleteCharacters,
  setCharacters,
} from "../../../store/slices/characterSlice";
import { AppDispatch } from "../../../store/store";
import useCheckID from "./useCheckID";

const useSetCharacterStore = (props: { character: ICharacterMarvelModel }) => {
  const dispatch = useDispatch<AppDispatch>();

  const valueChecked = useCheckID(props.character.marvelId!);
  const [checked, setChecked] = useState<boolean>(false);

  useEffect(() => {
    setChecked(valueChecked);
  }, [valueChecked]);

  const handleEvent = () => {
    if (checked) {
      setChecked(false);
      dispatch(deleteCharacters(props.character));
    } else {
      setChecked(true);
      dispatch(setCharacters(props.character));
    }
  };

  return { checked, handleEvent };
};

export default useSetCharacterStore;
