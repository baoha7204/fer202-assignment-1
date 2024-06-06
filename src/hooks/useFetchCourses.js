import { useEffect, useState } from "react";
import { API_ENDPOINTS } from "../utils/api";
import axios from "../config/axios";
import { errorToastHandler } from "../utils/toast/actions";
import useAuth from "./useAuth";

const useFetchCourses = () => {
  const { auth } = useAuth();
  const [courses, setCourses] = useState([]);

  const handleDeleteCourse = (id) => {
    const newCourses = courses.filter((course) => course.id !== id);
    setCourses(newCourses);
  };

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
        if (auth?.user) {
          return setCourses(data);
        }
        const fileteredData = data.filter((course) => course.active);
        setCourses(fileteredData);
      } catch (error) {
        errorToastHandler(error.response);
      }
    };

    fetchRemote();

    return () => controller.abort();
  }, [auth?.user]);

  return { courses, handleDeleteCourse };
};

export default useFetchCourses;
