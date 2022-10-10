import React from "react";

const Stats = (): JSX.Element => {
  const stats = [
    {
      id: "stats-1",
      title: "Active Users",
      value: "1800+",
      icon: "fa-solid fa-users px-2",
    },
    {
      id: "stats-3",
      title: "Transactions",
      value: "$15MM+",
      icon: "fa-solid fa-arrow-right-arrow-left px-2",
    },
  ];

  return (
    <section>
      <div className="container-fluid d-flex justify-content-center align-items-center mx-auto row py-5 bg-primary bg-gradient w-100">
        <h2 className="text-center text-white pb-5">
          Join the most rapid growing tool used to monitor personal finances.
        </h2>
        <div className="row">
          {stats.map((stat) => (
            <div className="col-md-6 mb-5" key={stat.id}>
              <div className="text-center justify-content-center text-white fs-3">
                <span>
                  {stat.value}&nbsp;{stat.title}&nbsp;
                  <i className={stat.icon}></i>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
