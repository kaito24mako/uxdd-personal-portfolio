import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <div className="notFound-container">
      <h2>404 Error</h2>
      <h1>Page Not Found</h1>
      <p>Sorry, the page you are looking for does not exist.</p>
      <Link to="/">
        <button>Home</button>
      </Link>
    </div>
  );
}

export default NotFoundPage;
