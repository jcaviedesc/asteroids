"use client";

import { memo } from "react";
import AsteroidItem, { AsteroidItemProps } from "./AsteroidItem";

const AsteroidItemClientWrapper = (props: AsteroidItemProps) => {
  return (
    <AsteroidItem
      {...props}
      onAddToFavorite={(id) => {
        console.log(id);
      }}
    />
  );
};

export default memo(AsteroidItemClientWrapper);
