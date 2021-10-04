import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch({
      type:"CHUYEN_TAB_ACTIVE",
      tabKey: 1
    });
  }, [pathname,dispatch]);
  return null;
}
