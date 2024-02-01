import { useState } from "react";
import { useForm } from "react-hook-form";

export const useRegisterProps = () => {

  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {

    console.log(data);
  };

  return {
    handleClick,
    show,
    register,
    handleSubmit,
    onSubmit
  };
};
