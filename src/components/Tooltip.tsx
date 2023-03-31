import { Tooltip as BSToolTip } from "bootstrap";
import { cloneElement, useEffect, useRef } from "react";

export const Tooltip = (props: { children: JSX.Element; text: string }) => {
  const childRef = useRef(undefined as unknown as Element);

  useEffect(() => {
    const tooltip = new BSToolTip(childRef.current, {
      title: props.text,
      placement: "top",
      trigger: "hover",
    });
    return () => tooltip.dispose();
  }, [props.text]);

  return cloneElement(props.children, { ref: childRef });
};
