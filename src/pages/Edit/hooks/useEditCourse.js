import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { handleSubmitForm } from "../../../usecase";
import { API_ENDPOINTS } from "../../../utils/api";
import { EditFormSchema } from "../lib/schema";
import { errorToastHandler } from "../../../utils/toast/actions";
import axios from "../../../config/axios";
import { useNavigate } from "react-router-dom";
import dayjs from "dayjs";

const useEditCourse = (mode, course) => {
  const navigate = useNavigate();
  const {
    handleSubmit,
    reset,
    control,
    formState: { isSubmitSuccessful, isSubmitting },
  } = useForm({
    resolver: zodResolver(EditFormSchema),
    defaultValues: {
      title: course?.title || "",
      image: course?.image || "",
      description: course?.description || "",
      weeks: course?.weeks,
      date: dayjs(course?.date),
      active: course?.active,
    },
  });

  const onSubmit = async (data) => {
    const result = handleSubmitForm(data, EditFormSchema);

    if (!result || !result.success || result.error) {
      return;
    }

    try {
      let res;
      if (mode === "edit") {
        res = await axios.put(`${API_ENDPOINTS.COURSE}/${course.id}`, {
          ...result.data,
        });
      } else {
        res = await axios.post(API_ENDPOINTS.COURSE, { ...result.data });
      }
      const data = res.data;
      if (!data) {
        return errorToastHandler({ message: "Failed to update course" });
      }
      navigate("/admin");
    } catch (error) {
      errorToastHandler(error.response);
    }

    if (isSubmitSuccessful) {
      reset();
    }
  };

  return [handleSubmit(onSubmit), isSubmitting, control];
};

export default useEditCourse;
