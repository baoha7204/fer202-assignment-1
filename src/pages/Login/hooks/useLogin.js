import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginFormSchema } from "../lib/schema";
import { handleSubmitForm } from "../../../usecase";
import axios from "../../../config/axios";
import { API_ENDPOINTS } from "../../../utils/api";
import { errorToastHandler } from "../../../utils/toast/actions";
import { useEffect } from "react";
import { toastError } from "../../../utils/toast";

export default function useLogin() {
  const { setAuth } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const {
    handleSubmit,
    reset,
    control,
    formState: { errors, isSubmitSuccessful, isSubmitting },
  } = useForm({
    resolver: zodResolver(LoginFormSchema),
  });

  const onSubmit = async (data) => {
    const result = handleSubmitForm(data, LoginFormSchema);

    if (!result || !result.success || result.error) {
      return;
    }

    const { user, password } = result.data;

    try {
      const res = await axios.get(API_ENDPOINTS.USER);
      const foundUser = res.data.find(
        (userData) =>
          userData.username === user && userData.password === password
      );
      if (!foundUser) {
        return errorToastHandler({
          status: 401,
          message: "Invalid credentials",
        });
      }
      setAuth({ user: foundUser });

      // unauthenticated user is redirected to the page they were trying to access
      const from = location.state?.from?.pathname;
      if (from) {
        return navigate(from, { replace: true });
      }

      navigate("/admin");
    } catch (error) {
      errorToastHandler(error.response);
    }

    if (isSubmitSuccessful) {
      reset();
    }
  };

  useEffect(() => {
    if (errors?.user?.message) {
      toastError(errors.user.message);
    }
    if (errors?.password?.message) {
      toastError(errors.password.message);
    }
  }, [errors]);

  return [handleSubmit(onSubmit), isSubmitting, control];
}
