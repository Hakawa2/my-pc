import { useEffect, useRef } from "react";

export function useHoverClass<T extends HTMLElement = HTMLElement>(
  className: string
) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const handleEnter = () => el.classList.add(className);
    const handleLeave = () => el.classList.remove(className);

    el.addEventListener("mouseenter", handleEnter);
    el.addEventListener("mouseleave", handleLeave);

    return () => {
      el.removeEventListener("mouseenter", handleEnter);
      el.removeEventListener("mouseleave", handleLeave);
    };
  }, [className]);

  return ref;
}
