import React, { useEffect } from "react";

import { AppDispatch } from "./store/store";
import { getEntities } from "./store/slices/characterSlice";

import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getEntities({ userId: 1 }));
  }, []);

  return <div className="App">asdasd</div>;
}

export default App;
