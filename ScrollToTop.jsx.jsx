import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Ye line page ko har baar top par le jayegi
    window.scrollTo(0, 0);
  }, [pathname]); // Jab bhi path (URL) badlega, ye chalega

  return null;
};

export default ScrollToTop;