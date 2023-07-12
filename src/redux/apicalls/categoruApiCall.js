import request from "../../pages/utils/request.js";
import { toast } from "react-toastify";
import { categoryAction } from "../slices/categorySlice.js";

// get all categories
export function getcategories() {
  return async (disPatch) => {
    try {
      const { data } = await request.get("/api/categorys");
      disPatch(categoryAction.setCategory(data));
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
}
// add categories
export function aaddcategories(newCategory) {
  return async (disPatch, getState) => {
    try {
      const { data } = await request.post("/api/categorys", newCategory, {
        headers: {
          Authorization: "Bearer " + getState().auth.user.token,
        },
      });
      disPatch(categoryAction.addCategory(data._id));
      toast.success(`Added category _${data.title}_ sccessed`);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
}
// delete categories
export function deletecategories(categoryid) {
  return async (disPatch, getState) => {
    try {
      await request.delete(`/api/categorys/${categoryid}`, {
        headers: {
          Authorization: "Bearer " + getState().auth.user.token,
        },
      });
      disPatch(categoryAction.deleteCategory(categoryid));
      toast.success(`category deleted successfully`);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
}
