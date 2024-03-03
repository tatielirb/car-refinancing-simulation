import React from "react";
import { ListProps } from "types/components/ListRow";
import ListOption from "./ListOption";

export default function ListRow({ items }: ListProps) {
  return (
    <div className="row justify-content-md-center">
      <ul className="list-group list-group-flush col col-6">
        {items.map((item, index) => (
          <ListOption key={index} {...item} />
        ))}
      </ul>
    </div>
  );
}
