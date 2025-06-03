import { useEffect, useState } from "react";
export let useMousePostion = () => {
  let [mousePostion, setMousePostion] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const handleMouse = (event: MouseEvent) => {
      setMousePostion({ x: event.clientX, y: event.clientY });
    };
    window.addEventListener("mousemove", handleMouse);
    console.log(mousePostion.x, mousePostion.y);
  }, []);
  return mousePostion;
};
