import React from "react";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";

import "./styles.scss";

const Topbar = () => {
  const history = useHistory();

  const links = [
    { title: "Home", path: "/home" },
    { title: "Games", path: "/games" },
  ];

  return (
    <div className="topbar__principal">
      {links.map((value) => {
        return (
          <Button
            className="topbar__item"
            onClick={() => history.push(value.path)}
          >
            {value.title}
          </Button>
        );
      })}
    </div>
  );
};

export default Topbar;
