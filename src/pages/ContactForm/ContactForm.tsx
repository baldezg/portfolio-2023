import React from "react";
import "./ContactForm.css";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import emailjs from "@emailjs/browser";

interface IFormInput {
  name: string;
  email: string;
  message: string;
}

const formSchema: yup.ObjectSchema<IFormInput> = yup.object({
  name: yup.string().required("Por gentileza me diga o seu nome."),
  email: yup
    .string()
    .email("Verifique se o email está digitado corretamente.")
    .required("Me informe um email para que eu possa respondê-lo(a)."),
  message: yup.string().required("Sobre qual assunto você deseja conversar."),
});

const emailConfig: string = process.env.REACT_APP_SERVICE as string;
const emailTemplate: string = process.env.REACT_APP_TEMPLATE as string;

const ContactForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IFormInput>({
    resolver: yupResolver(formSchema),
  });

  const sendEmail: SubmitHandler<IFormInput> = (data) => {
    const { name, email, message } = data;

    const templateParams = {
      from_name: name,
      email: email,
      message: message,
    };

    emailjs
      .send(
        emailConfig,
        emailTemplate,
        templateParams,
        process.env.REACT_APP_PK
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    reset();
  };

  return (
    <section>
      <h1 className="form__heading">Como posso te ajudar?</h1>

      <form onSubmit={handleSubmit(sendEmail)} className="form">
        <div className="form__field">
          <label>Nome</label>
          <input {...register("name")} className="form__input" />
          <p>{errors.name?.message}</p>
        </div>
        <div className="form__field">
          <label>Email</label>
          <input {...register("email")} className="form__input" />
          <p>{errors.email?.message}</p>
        </div>
        <div>
          <label>Escreva sua mensagem</label>
          <textarea {...register("message")}></textarea>
          <p>{errors.message?.message}</p>
        </div>
        <input type="submit" className="form__submit" />
      </form>
    </section>
  );
};

export default ContactForm;
