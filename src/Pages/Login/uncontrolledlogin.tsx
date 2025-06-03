// import "./Login.css";

// import { useRef, useEffect } from "react";
// import kvLogo from "../../assets/kv-logo.png";

// import "./uncontrolled.css";
// import LoginInput from "./loginbutton";
// import { ClickButton } from "../../components/Button/Button";
// const UncontrolledLogin = () => {
//   const usernameRef = useRef<HTMLInputElement | null>(null);
//   const clearButtonRef = useRef<HTMLButtonElement | null>(null);
//   const clearUsername = () => {
//     if (usernameRef.current && clearButtonRef.current) {
//       usernameRef.current.value = "";
//       clearButtonRef.current.disabled = true;
//     }
//   };
//   const clearButton = (name: string) => {
//     if (name.length > 0 && clearButtonRef.current) {
//       clearButtonRef.current.disabled = false;
//       clearButtonRef.current.onclick = clearUsername;
//     } else if (name.length == 0 && clearButtonRef.current) {
//       clearButtonRef.current.disabled = true;
//     }
//   };

//   useEffect(() => {
//     if (usernameRef?.current) usernameRef.current.focus();
//   }, []);

//   return (
//     <div className="content">
//       <div className="pattern-side">
//         <div className="pattern" />
//         <div className="circle-large">
//           <div className="circle-inner">
//             <img src={kvLoginImg} alt="KV Login" className="login-image" />
//           </div>
//         </div>
//       </div>
//       <div className="login-side">
//         <div className="login-content">
//           <img className="logo" src={kvLogo} alt="KV Logo" />
//           <form>
//             <LoginInput
//               id="login-username-input"
//               label="Username"
//               ref={usernameRef}
//               onChange={(e) => clearButton(e.target.value)}
//               endAdornment={
//                 <button                  type="button"
//                   disabled={true}
//                   onClick={clearUsername}
//                   ref={clearButtonRef}
//                 >
//                   clear
//                 </button>
//               }
//             />

//             <LoginInput id="login-password-input" label="Password" />

//             <clickButton type="submit" className="login-button">
//               Log in
//             </clickButton>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default UncontrolledLogin;
