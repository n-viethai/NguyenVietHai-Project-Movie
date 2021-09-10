import { layDanhSachBanner } from "../../services/QuanLyPhimService";
import { SET_CAROUSEL } from "../types/CarouselType";

export const getCarouselAction = () => {
  //   return async (dispatch) => {
  //     try {
  //       const result = await axios({
  //         url: `${DOMAIN}/api/QuanLyPhim/LayDanhSachBanner`,
  //         method: "GET",
  //         headers: {
  //           TokenCybersoft: TokenCybersoft,
  //         },
  //       });
  //       dispatch({
  //         type: SET_CAROUSEL,
  //         arrImg: result.data.content,
  //       });
  //     } catch (error) {
  //       console.log({ error });
  //     }
  //   };

  return async (dispatch) => {
    try {
      const result = await layDanhSachBanner();
      dispatch({
        type: SET_CAROUSEL,
        arrImg: result.data.content,
      });
    } catch (error) {
      console.log({ error });
    }
  };
};
