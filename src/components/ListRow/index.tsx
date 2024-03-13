import { ListProps } from "types/components/ListRow";
import ListOption from "./ListOption";
import "./listRow.scss"

export default function ListRow({ items }: ListProps) {
  return (
    <div className="row justify-content-md-center">
      <ul className="list-group list-group-flush col-12 col-sm col-md-6 col-lg-6">
        {items.map((item, index) => (
          <ListOption key={index} {...item} />
        ))}
      </ul>
    </div>
  );
}
