// export const SelectField = ({
//   options,
//   value,
//   borderRadius,
//   width,
//   height,
//   onInputChange,
// }: {
//   options: string[];
//   value?: string;
//   borderRadius?: number;
//   width?: number;
//   height?: number;
//   onInputChange?: (input: string) => void;
// }) => {
//   return (
//     <select
//       name=""
//       id=""
//       value={value}
//       style={{ borderRadius: borderRadius, width: width, height: height }}
//       onChange={
//         onInputChange ? (e) => onInputChange(e.target.value) : undefined
//       }
//     >
//       {options.map((option) => (
//         <option key={option}>{option}</option>
//       ))}
//     </select>
//   );
// };
export const SelectField = ({
  options,
  value,
  borderRadius,
  width,
  height,
  onInputChange,
}: {
  options: string[];
  value?: string;
  borderRadius?: number;
  width?: number;
  height?: number;
  onInputChange?: (input: string) => void;
}) => {
  return (
    <select
      name=""
      id=""
      value={value}
      style={{ borderRadius: borderRadius, width: width, height: height }}
      onChange={
        onInputChange ? (e) => onInputChange(e.target.value) : undefined
      }
    >
      {options.map((option) => (
        <option key={option}>{option}</option>
      ))}
    </select>
  );
};
