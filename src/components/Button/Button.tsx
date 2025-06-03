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

