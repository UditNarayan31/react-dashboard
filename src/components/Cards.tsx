const cards = [
  {
    id: 1,
    title: "150GB",
    subtitle: "Number",
    desc: "Update Now",
    icon: "mdi-account",
  },
  {
    id: 2,
    title: "+45K",
    subtitle: "Followers",
    desc: "Last Research",
    icon: "mdi-cog",
  },
  {
    id: 3,
    title: "150000",
    subtitle: "Users",
    desc: "Customer feedback",
    icon: "mdi-message",
  },
  {
    id: 4,
    title: "23",
    subtitle: "Errors",
    desc: "In the last hours",
    icon: "mdi-chart-bar",
  },
];

const Cards = () => {
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {cards.map((card) => (
          <div
            key={card.id}
            className="bg-white rounded-2xl shadow-lg h-26 p-2 text-center hover:shadow-xl transition"
          >
            <div className="row">
              <div className="col-3">
                <i className={`mdi ${card.icon} text-3xl text-blue-600`}></i>
              </div>
              <div className="col-9">
                <p className="text-gray-600 text-sm ml-5">{card.subtitle}</p>
                <h5 className="text-lg font-semibold ml-5 text-gray-800 relative bottom-2">
                  {card.title}
                </h5>
              </div>
            </div>
            <div className="relative bottom-5">
              <hr></hr>

              <p className="text-gray-600 text-sm mt-1 relative bottom-3">
                {card.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
