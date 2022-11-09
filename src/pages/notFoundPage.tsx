import { Link } from "react-router-dom";
const NotFoundPage = () => {
  return (
    <div>
      <p>error 404</p>
      <p> Sorry, this page doesn't exist. </p>
      <Link to="/">return to home page</Link>
    </div>
  );
};

export default NotFoundPage;
