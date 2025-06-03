// import "./Inputtextfield.css";
// export const Inputtextfield = ({
//   type,
//   placeholder = " ",
// }: {
//   type: string;
//   placeholder: string;
// }) => {
//   return (
//     <input
//       type={type}
//       name=""
//       id=""
//       className="Inputtextfield"
//       placeholder={placeholder}
//     />
//   );
// };
import "./Inputtextfield.css";
export const Inputtextfield = ({
  id,
  label,
  type,
  placeholder = " ",
  value,
  onInputChange,
  endorment,
}: {
  id?: string;
  type?: string;
  placeholder: string;
  value?: string;
  onInputChange?: (input: string) => void;
  endorment?: React.ReactNode;
  label?: string;
}) => {
  return (
    <>
      <input
        aria-label={label}
        type={type}
        name=""
        id=""
        value={value}
        className="Inputtextfield"
        placeholder={placeholder}
        onChange={
          onInputChange ? (e) => onInputChange(e.target.value) : undefined
        }
        required
      />

      {endorment ? endorment : null}
    </>
  );
};
