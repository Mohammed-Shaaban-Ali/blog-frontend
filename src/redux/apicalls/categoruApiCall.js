import request from "../../pages/utils/request.js";
import { toast } from "react-toastify";
import { categoryAction } from "../slices/categorySlice.js";

// get all categories
export function getcategories() {
  return async (disPatch) => {
    try {
      const { data } = await request.get("/api/categorys");
      console.log(data);
      disPatch(categoryAction.setCategory(data));
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
}
