import { Tooltip as BSToolTip } from "bootstrap";
import { cloneElement, useEffect, useRef } from "react";

export const Tooltip = (p: { children: JSX.Element; text: string }) => {
  const childRef = useRef(undefined as unknown as Element);

  useEffect(() => {
    const t = new BSToolTip(childRef.current, {
      title: p.text,
      placement: "top",
      trigger: "hover",
    });
    return () => t.dispose();
  }, [p.text]);

  return cloneElement(p.children, { ref: childRef });
};
