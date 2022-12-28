import React, { useState, useEffect } from "react";
import style from "./style.module.scss";
import { connect } from "react-redux";

import {
  getRouterAction,
  deleteRouterAction,
} from "../../store/actions/routers";

const routersList = [
  {
    name: "Маршрут 1",
    fromLat: "59.84",
    fromLan: "30.29",
    toLat: "39.82",
    toLan: "10.42",
  },
  {
    name: "Маршрут 2",
    fromLat: "19.83",
    fromLan: "30.28",
    toLat: "59.83",
    toLan: "30.41",
  },
  {
    name: "Маршрут 3",
    fromLat: "59.82",
    fromLan: "30.27",
    toLat: "59.84",
    toLan: "30.40",
  },
  {
    name: "Маршрут 4",
    fromLat: "59.81",
    fromLan: "30.26",
    toLat: "59.85",
    toLan: "30.44",
  },
  {
    name: "Маршрут 5",
    fromLat: "59.80",
    fromLan: "30.25",
    toLat: "59.86",
    toLan: "30.45",
  },
];

function Router({ getRouterAction, deleteRouterAction }) {
  const [currentRoute, setCurrentRoute] = useState(null);

  useEffect(() => {
    if (currentRoute) {
      deleteRouterAction();
      
      getRouterAction(currentRoute);
    }
  }, [currentRoute]);

  return (
    <div className={style.router}>
      <ul className={style.router__list}>
        {routersList?.map((item, ind) => (
          <li
            className={`${style.router__item} ${
              currentRoute?.name === item?.name && style.router__item_active
            }`}
            onClick={() => setCurrentRoute(item)}
            key={ind}
          >
            {item?.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default connect(null, { getRouterAction, deleteRouterAction })(Router);
