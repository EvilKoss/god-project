import { CounterStyled } from "./CounterStyled";
import Weather from "../common/Weather";
import SetDate from "./setDate/SetDate";
import TimeOperator from "./timeOperator/TimeOperator";
import store from "../../redux/store";
import { myAction } from "../../redux/actions";

import { connect } from "react-redux";

// console.log(store);

console.log("myStore.getState:", store.getState());
console.log("myStore.dispatch(myAction):", store.dispatch(myAction));

const Counter = () => {
  return (
    <CounterStyled>
      <div>
        <p className="year"></p>
        <p className="yearName"></p>
        <Weather />
      </div>
      <div>
        <p></p>
        <p></p>
        <p></p>
      </div>
      <div>
        <p></p>
        <SetDate />
      </div>
      <TimeOperator />
      <div></div>
    </CounterStyled>
  );
};

export default connect()(Counter);
