import { useState } from "react";

const useModal = () => {
  const [open, setOpen] = useState(false);
  const [detail, setDetail] = useState(0);

  const openModal = (id) => {
    setDetail(id);
    setOpen(true);
  };

  const closeModal = () => {
    setDetail(null);
    setOpen(false);
  };

  return { detail, open, openModal, closeModal };
};

export default useModal;
