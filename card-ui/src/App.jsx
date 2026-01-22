import React from "react";

const cards = [
  {
    title: "Web Development",
    desc: "Learn HTML, CSS and JavaScript to build websites.",
    img: "https://via.placeholder.com/400x200?text=Web+Development",
  },
  {
    title: "Bootstrap",
    desc: "Build responsive UI easily using Bootstrap components.",
    img: "https://via.placeholder.com/400x200?text=Bootstrap",
  },
  {
    title: "React",
    desc: "Create powerful single page applications using React.",
    img: "https://via.placeholder.com/400x200?text=React",
  },
  {
    title: "Python",
    desc: "Use Python for automation, AI and backend development.",
    img: "https://via.placeholder.com/400x200?text=Python",
  },
];

export default function App() {
  return (
    <div className="bg-light min-vh-100">
      <div className="container py-5">
        <h2 className="text-center mb-4">
          Experiment-2.2: Card Layout Using Bootstrap (React)
        </h2>

        <div className="row">
          {cards.map((card, index) => (
            <div key={index} className="col-md-4 col-sm-6 mb-4">
              <div className="card shadow h-100">
                <img src={card.img} className="card-img-top" alt={card.title} />
                <div className="card-body">
                  <h5 className="card-title">{card.title}</h5>
                  <p className="card-text">{card.desc}</p>
                  <button className="btn btn-primary">Read More</button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
