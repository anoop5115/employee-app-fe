import { IoMdAddCircle } from "react-icons/io";
import { IoAddOutline } from "react-icons/io5";

export const createEditButton = ({
  icon,
  text,
  backgroundcolor,
  borderradius,
}: {
  icon?: "Edit" | "Add";
  text?: string;
  backgroundcolor?: string;
  borderradius?: number;
}) => {
  return (
    <button style={{ borderRadius: borderradius }}>
      <div className="b-elements">
        <IoMdAddCircle color="blue"/>
        create Employee
      </div>
    </button>
  );
};
