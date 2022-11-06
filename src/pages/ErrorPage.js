import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="error-page">
            <h1 className="App">404 Page Not Found</h1>
            <Link className="error-link" to="/">Go Back Home</Link>
        </div>
    );
}

export default ErrorPage;