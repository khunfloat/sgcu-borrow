import Itemcard from "./Itemcard";
export default function Itemlist({ items }) {
  return (
    <div className="grid grid-cols-2 gap-3 mb-44">
      {items.map((item) => (
        <Itemcard key={item.id} item={item} />
      ))}
    </div>
  );
}
