import { useRef } from "react";

export function ComponentA() {
  const ref = useRef<HTMLParagraphElement | null>(null);

  const changeHeadingColor = function () {
    if (ref.current) {
      ref.current.style.color = "red";
    }
  };

  return (
    <div>
      <p ref={ref}>This is some heading</p>
      <button onClick={changeHeadingColor}>Change Color</button>
    </div>
  );
}
