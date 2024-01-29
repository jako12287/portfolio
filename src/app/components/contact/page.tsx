"use client"
import { Controller, SubmitHandler, useForm } from "react-hook-form"
import CustomTitle from "../share/customTitle"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { ErrorMessage } from "@hookform/error-message"
import styles from "./contact.module.css"
import BtnPrimary from "../share/btnPrimary"

const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$/;

const schema = yup.object({
    name: yup.string().required("Ingresa tu nombre"),
    email: yup.string().matches(emailRegex, "Ingresa un email válido").required("Ingresa un email"),
    message: yup.string().required("Escribe tu mensaje")
});

type ValuesFormProps = {
    name: string
    email: string
    message: string
}

const Contact = () => {
    const { handleSubmit, control, formState: { errors } } = useForm({ mode: "onChange", resolver: yupResolver(schema) })

    const onSubmit: SubmitHandler<ValuesFormProps> = (values: ValuesFormProps) => {
        console.log(values)
    }
    return <section className={styles.container}>
        <CustomTitle title="Contáctame" />

        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.formGroup}>

                <label htmlFor="name">Nombre:</label>
                <Controller
                    name="name"
                    defaultValue=""
                    control={control}
                    render={({ field }) => <input className={styles.input} id="name" type="text" {...field} />}
                />
                <ErrorMessage
                    errors={errors}
                    name="name"
                    render={({ message }) => <p className={styles.textError}>{message}</p>}
                />
            </div>

            <div className={styles.formGroup}>

                <label htmlFor="email">Email:</label>
                <Controller
                    name="email"
                    defaultValue=""
                    control={control}
                    render={({ field }) => <input className={styles.input} id="email" type="email" {...field} />}
                />
                <ErrorMessage
                    errors={errors}
                    name="email"
                    render={({ message }) => <p className={styles.textError}>{message}</p>}
                />
            </div>
            <div className={styles.formGroup}>

                <label htmlFor="message">Mensaje:</label>
                <Controller
                    name="message"
                    defaultValue=""
                    control={control}
                    render={({ field }) => <textarea className={styles.textArea} id="message" {...field} />}
                />
                <ErrorMessage
                    errors={errors}
                    name="message"
                    render={({ message }) => <p className={styles.textError}>{message}</p>}
                />
            </div>
            <div className={styles.containerButton}>

                <BtnPrimary title="Enviar" />
            </div>
        </form>
    </section>
}


export default Contact