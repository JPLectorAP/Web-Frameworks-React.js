import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div>
      <h1>404 - Page Not Found</h1>
      <p>Oops! The page you are looking for does not exist.</p>
      <Link to="/">Return to Homepage</Link>
    </div>
  );
};

export default PageNotFound;
