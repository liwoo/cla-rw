import { useRef, useState, useEffect } from "react";
import {
  useSpring,
  SpringConfig,
  SpringValue,
  AnimationConfig,
  SpringValues,
} from "@react-spring/web";

interface SpringStyleSet {
  opacity: number;
  transform: string;
}

// The return type of the hook will include AnimatedValue for each style property
type UseInViewSpringReturnType = [
  SpringValues<SpringStyleSet>,
  React.RefObject<HTMLDivElement>
];

const useInViewSpring = (
  fromStyle: SpringStyleSet,
  toStyle: SpringStyleSet,
  delay: number = 0,
  threshold: number = 0.1
): UseInViewSpringReturnType => {
  const [inView, setInView] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement>(null);

  const springProps = useSpring({
    from: fromStyle,
    to: inView ? toStyle : fromStyle,
    delay,
    config: { tension: 120, friction: 14 } as SpringConfig,
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [ref, threshold]);

  return [springProps as unknown as SpringValues<SpringStyleSet>, ref];
};

export default useInViewSpring;
