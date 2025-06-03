import "./Button.css";
export const ClickButton = ({
  label,
  fun,
  type = "submit",
  
}: {
  label: String;
  fun: () => void;
  type?: "submit" | "reset" | "button" | undefined;

}) => {
  return (
    <button type={type} className="ClickButton" onClick={fun} >
      {label}
    </button>
  );
};

// import { useState, useEffect } from "react";

// function useMousePosition() {
//   const [mousePosition, setMousePosition] = useState({ x: null, y: null });

//   useEffect(() => {
//     function handleMouseMove(event) {
//       setMousePosition({ x: event.clientX, y: event.clientY });
//     }

//     window.addEventListener("mousemove", handleMouseMove);

//     return () => {
//       window.removeEventListener("mousemove", handleMouseMove);
//     };
//   }, []);

//   return mousePosition;
// }

// export default useMousePosition;
