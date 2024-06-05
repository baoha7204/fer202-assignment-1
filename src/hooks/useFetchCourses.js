import { useEffect, useState } from "react";
import { API_ENDPOINTS } from "../utils/api";
import axios from "../config/axios";
import { errorToastHandler } from "../utils/toast/actions";

const useFetchCourses = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const controller = new AbortController();
    const fetchRemote = async () => {
      try {
        const res = await axios.get(API_ENDPOINTS.COURSE, {
          signal: controller.signal,
        });
        const data = res.data;
        if (!data || data.length === 0) {
          return errorToastHandler({
            status: 404,
            message: "No courses found",
          });
        }
        const fileteredData = data.filter((course) => course.active);
        setCourses(fileteredData);
      } catch (error) {
        errorToastHandler(error.response);
      }
    };

    fetchRemote();

    return () => controller.abort();
  }, []);

  return courses;
};

export default useFetchCourses;
