import Itemcard from "./Itemcard";

const Itemlist = ({ items }) => (
  <div className="grid grid-cols-2 gap-3 mb-44">
    {items.map((item) => (
      <Itemcard
        key={item.id}
        name={item.name}
        amount={item.amount}
        image_url={item.image_url}
      />
    ))}
  </div>
);

export default Itemlist;
