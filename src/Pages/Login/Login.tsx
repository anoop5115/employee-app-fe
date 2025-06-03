import { useActionState, useEffect, useState } from "react";
import { ClickButton } from "../../components/Button/Button";
import { Inputtextfield } from "../../components/Inputtextfield/Inputtestfield";
import { Labeltext } from "../../components/label/Label";
import "./Login.css";
import { useMousePostion } from "../../hooks/useMousePointer";
import { Navigate, useNavigate } from "react-router-dom";
import { useLoginMutation } from "../../api-service/auth/login.api";

export const Login = () => {
  const [login] = useLoginMutation();
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState("Login");
  const updatepass = (newpass: string) => {
    setPassword(newpass);
  };
  const update = (newUsername: string) => {
    setUsername(newUsername);
    console.log(newUsername);
  };
  const onLogin = async () => {
    setLoading("Loading");
    login({ email: username, password: password })
      .unwrap()
      .then((res) => {
        localStorage.setItem("token", res.accessToken);
        console.log();
        localStorage.setItem("IsLoggedIn", "true");
        setLoading("Login");
        navigate("/employee", { replace: true });
      })
      .catch((e) => {
        // alert("incorrect credentials");
        setErr(e.data.message);
        setLoading("Login");
      });
  };

  const isLogged = () => {
    return localStorage.getItem("IsLoggedIn") == "true";
  };
  if (isLogged()) return <Navigate to="/employee" />;

  const user = "test@gmail.com";
  const pass = "test";

  const verify = () => {
    if (username === user && pass === password) {
      localStorage.setItem("IsLoggedIn", "true");
      navigate("/employee", { replace: true });
      console.log("verified");
      return true;
    } else {
      localStorage.setItem("IsLoggedIn", "false");
      console.log("not verified");
    }
  };

  // const updatepass = (newpass: string) => {
  //   setPassword(newpass);
  // };
  // const update = (newUsername: string) => {
  //   setUsername(newUsername);
  //   console.log(newUsername);
  // };
  let pos = useMousePostion();
  let [err, setErr] = useState("");
  useEffect(() => {
    // console.log(username);
    if (username.length > 10) {
      err = "not more than 10";
    } else {
      err = "";
    }

    //

    setErr(err);
  }, [username]);
  return (
    <>
      <main>
        <div className="leftcontainer">
          <img src="/assets/kv-login.jpeg" alt="" />
        </div>
        <div className="rightcontainer">
          <div className="rightcontainer-box">
            <div className="rightcontainer-box1">
              <img src="/assets/kv-logo.png" alt="Circle image" />
            </div>
            <form>
              <div className="rightcontainer-box2">
                <Labeltext label="email"></Labeltext>
                <Inputtextfield
                  type="text"
                  value={username}
                  placeholder=""
                  onInputChange={update}
                  endorment={
                    <button
                      style={{ float: "right", position: "relative" }}
                      className="clear-button"
                      type="button"
                      onClick={() => {
                        setUsername("");
                        console.log("aaaaaaaaa");
                      }}
                    >
                      CLEAR
                    </button>
                  }
                ></Inputtextfield>
              </div>

              <div className="rightcontainer-box2">
                <Labeltext label="password"></Labeltext>
                <Inputtextfield
                  type="password"
                  value={password}
                  placeholder=""
                  onInputChange={updatepass}
                ></Inputtextfield>
              </div>

              <p>{err}</p>
              <div>
                {/* <ClickButton label={"login"}  ></ClickButton>
                 */}
                {/* <button type="button" onClick={verify}>
                  Login
                </button> */}
                <ClickButton
                  type="button"
                  label={loading}
                  fun={onLogin}
                ></ClickButton>
              </div>
            </form>
          </div>
        </div>
      </main>
      {pos.x} ,{pos.y}
    </>
  );
};
// function setLoading(arg0: string) {
//   throw new Error("Function not implemented.");
// }

// function e(reason: any): PromiseLike<never> {
//   throw new Error("Function not implemented.");
// }
// // Test 2: Render login form with all required elements
// it("should render login form with all required elements", () => {
//   renderLogin();

//   // Check if username input is present
//   const usernameInput = screen.getByLabelText("Username");
//   expect(usernameInput).toBeInTheDocument();

//   // Check if password input is present
//   const passwordInput = screen.getByLabelText("Password");
//   expect(passwordInput).toBeInTheDocument();

//   // Check if submit button is present
//   const submitButton = screen.getByRole("button", { name: /log in/i });
//   expect(submitButton).toBeInTheDocument();
//   expect(submitButton).toHaveAttribute("type", "submit");
// });
