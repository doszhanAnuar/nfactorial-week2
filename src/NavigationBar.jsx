import { format } from "date-fns";
import facebook from "./assets/facebook.png";

export const NavigationBar = () => {
  const date = new Date();
  const dateFormat = format(date, "MM/dd/yyyy");
  return (
    <nav className="navbar navbar-expand-lg bg-dark">
      <div className="container-fluid">
        <img src={facebook} />
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarScroll"
          aria-controls="navbarScroll"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="format d-flex flex-direction-row-reverse"
          id="navbarScroll"
        >
          {dateFormat}
        </div>
      </div>
    </nav>
  );
};
