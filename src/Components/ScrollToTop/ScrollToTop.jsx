import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
    dispatch({
      type:"CHUYEN_TAB_ACTIVE",
      tabKey: 1
    });
  },[pathname]);
  return null;
}
