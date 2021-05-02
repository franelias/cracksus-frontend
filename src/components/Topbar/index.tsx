import React from "react";
import { Link } from "react-router-dom";

import "./styles.scss";

const Topbar = () => {
  const links = [
    { title: "Home", path: "/home" },
    { title: "Games", path: "/games" },
  ];

  return (
    <div className="topbar__principal">
      {links.map((value) => {
        return (
          <Link className="topbar__item" to={value.path}>
            {value.title}
          </Link>
        );
      })}
    </div>
  );
};

export default Topbar;
