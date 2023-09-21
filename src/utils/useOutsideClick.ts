import { useEffect, useRef } from "react";

type OutsideClickHandler = (event: MouseEvent) => void;

export const useOutsideClick = (
  callback: OutsideClickHandler
): React.RefObject<HTMLDivElement> => {
  const ref = useRef<HTMLDivElement | null>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (ref.current && !ref.current.contains(event.target as Node)) {
      callback(event);
    }
  };

  useEffect(() => {
    const handleMouseDown = (event: MouseEvent) => {
      handleClickOutside(event);
    };

    document.addEventListener("mousedown", handleMouseDown);

    return () => {
      document.removeEventListener("mousedown", handleMouseDown);
    };
  }, [callback]);

  return ref;
};
