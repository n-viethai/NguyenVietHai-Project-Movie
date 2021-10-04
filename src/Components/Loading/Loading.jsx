import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import loading from "../../assets/img/Bean Eater-1s-200px.svg";

function Loading() {
  const { isLoading } = useSelector((state) => state.LoadingReducer);
  return (
    <Fragment>
      {isLoading ? (
        <div className="fixed top-0 left-0 w-full h-full z-50 flex justify-center items-center bg-white">
          <div>
            <img src={loading} alt="..." />
          </div>
        </div>
      ) : (
        ""
      )}
    </Fragment>
  );
}

export default Loading;
