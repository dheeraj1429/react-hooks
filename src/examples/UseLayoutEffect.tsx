import { useLayoutEffect, useRef, useState } from "react";

export function UseLayoutEffect() {
  const divRef = useRef<HTMLDivElement>(null);
  const [size, setSize] = useState({ width: 0, height: 0 });

  useLayoutEffect(() => {
    if (divRef.current) {
      setSize({
        width: divRef.current.offsetWidth,
        height: divRef.current.offsetHeight,
      });
    }
  }, []);

  return (
    <div ref={divRef}>
      Width: {size.width}, Height: {size.height}
    </div>
  );
}
