import Button from "./common/Button";
import { appConfig } from "../configs/index";
const { timeValues } = appConfig;

const TimeOperator = () => {
  return (
    <>
      {timeValues.map((item, index: number) => (
        <Button title={item} key={index} />
      ))}
    </>
  );
};

export default TimeOperator;
