import axios from "../config/axios";
import { API_ENDPOINTS } from "../utils/api";
import { errorToastHandler } from "../utils/toast/actions";

const useDeleteCourse = () => {
  const deleteCourse = async (id) => {
    try {
      const res = await axios.delete(`${API_ENDPOINTS.COURSE}/${id}`);
      const data = res.data;
      if (!data) {
        return errorToastHandler({
          status: 404,
          message: "No course found",
        });
      }
      return data;
    } catch (error) {
      errorToastHandler(error.response);
    }
  };

  return deleteCourse;
};

export default useDeleteCourse;
