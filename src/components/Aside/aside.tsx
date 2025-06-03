import { Navigate, useNavigate } from "react-router-dom";
import { ClickButton } from "../Button/Button";

export const Aside = () => {
  const navigate = useNavigate();
  return (
    <aside className="layout-aside">
      <div className="logo">
        <img src="/assets/kv-logo.png" alt="loading" />
      </div>
      <nav>
        <div className="nav-div" onClick={() => navigate("")}>
          <img src="/assets/icon.svg" alt="" />
          <div>Employee List </div>
          <br />
        </div>

        <div>
          <button
            type="button" className="logout"
            onClick={() => {
              localStorage.setItem("IsLoggedIn", "false");
              navigate("/");
            }}
          >
            log out
          </button>
        </div>
      </nav>
    </aside>
  );
};
