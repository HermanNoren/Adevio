import "./service.css";

function Service({
  index,
  title,
  abbr,
  setModal,
  colorClass,
}: {
  index: number;
  title: string;
  abbr: string;
  setModal: any;
  colorClass: string;
}) {
  return (
    <div
      className={`service ${colorClass}`}
      onMouseEnter={() => {
        setModal({ active: true, index: index });
      }}
      onMouseLeave={() => {
        setModal({ active: false, index: index });
      }}
    >
      <h2 className="">{abbr}</h2>
      <p className="">{title}</p>
    </div>
  );
}

export default Service;
