import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";

import "./Form.style.scss";
import { useRef } from "react";

type Inputs = {
  name: string;
  email: string;
  subjet: string;
  message: string;
};

export const Form = () => {
  const form = useRef<HTMLFormElement>(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSendMessage = async (data: Inputs) => {
    emailjs
      .sendForm(
        import.meta.env.PUBLIC_SERVICE_ID,
        import.meta.env.PUBLIC_TEMPLATE_ID,
        form.current!,
        import.meta.env.PUBLIC_USER_ID
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const isValidEmail = (email: string): boolean => {
    const match = String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );

    return !!match;
  };

  const isEmail = (email: string): string | undefined => {
    return isValidEmail(email) ? undefined : "El correo no parece ser válido";
  };

  return (
    <form
      ref={form}
      onSubmit={handleSubmit(onSendMessage)}
      className="form-one text-align-center"
      noValidate
    >
      {errors.name && <p className="text-error">{errors.name.message}</p>}
      <div className="form">
        <div className="form-background"></div>
        <input
          {...register("name", {
            required: "el nombre es requerido",
            minLength: { value: 1, message: "minimo 1 caracter" },
          })}
          name="name"
          type="text"
          required
        />

        <label className="lbl-name">
          <p className="text-name">nombre</p>
        </label>
      </div>
      {errors.email && <p className="text-error">{errors.email.message}</p>}

      <div className="form">
        <input
          {...register("email", {
            required: "el correo es requerido",
            validate: isEmail,
          })}
          name="email"
          type="mail"
          required
        />
        <label className="lbl-name">
          <p className="text-name">correo electronico</p>
        </label>
      </div>

      {errors.subjet && <p className="text-error">{errors.subjet.message}</p>}
      <div className="form">
        <input
          {...register("subjet", {
            required: "el sujeto es requerido",
            minLength: { value: 1, message: "minimo 1 caracter" },
          })}
          name="subjet"
          type="text"
          required
        />
        <label className="lbl-name">
          <p className="text-name">sujeto</p>
        </label>
      </div>

      {errors.message && <p className="text-error">{errors.message.message}</p>}
      <div className="form-message">
        <textarea
          {...register("message", {
            required: "el mensage es requerido",
            minLength: { value: 10, message: "minimo 10 caracteres" },
          })}
          name="message"
          cols={30}
          rows={10}
          required
        ></textarea>
        <label className="lbl-name">
          <p className="text-name-one">tu mensage</p>
        </label>
      </div>
      <input className="bottom" type="submit" value="Enviar" />
    </form>
  );
};
