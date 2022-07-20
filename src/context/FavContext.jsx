import React, { useState, useCallback } from "react";

export const FavContext = React.createContext(null);
export function FavProvider(props) {
  const [favContext, setFavContext] = useState([]);

  const addFav = useCallback((gifId) =>
    setFavContext((curr) => [gifId, ...curr])
  );
  const removeFav = useCallback((gifId) =>
    setFavContext((curr) => curr.filter((val) => val.gif_id !== gifId))
  );
  const clearFav = useCallback(() => setFavContext([]));

  return (
    <FavContext.Provider value={{ addFav, removeFav, clearFav, favContext }}>
      {props.children}
    </FavContext.Provider>
  );
}
