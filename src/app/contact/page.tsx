"use client"
import { Controller, SubmitHandler, useForm } from "react-hook-form"
import CustomTitle from "../components/customTitle"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"

const schema = yup.object({
    name: yup.string().required("Valor requerido"),
    email: yup.string().email().required(),
    message: yup.string().required()
})

type ValuesFormProps = {
    name: string
    email: string
    message: string
}

const Contact = () => {
    const { handleSubmit, control } = useForm({ mode: "onChange", resolver: yupResolver(schema) })

    const onSubmit: SubmitHandler<ValuesFormProps> = (values: ValuesFormProps) => {
        console.log(values)
    }
    return <div>
        <CustomTitle title="Contactame" />

        <form onSubmit={handleSubmit(onSubmit)}>
            <div>

                <label htmlFor="name">Nombre:,,</label>
                <Controller
                    name="name"
                    control={control}
                    render={({ field }) => <input id="name" type="text" {...field} />}
                />
            </div>

            <div>

                <label htmlFor="email">Email:</label>
                <Controller
                    name="email"
                    control={control}
                    render={({ field }) => <input id="email" type="email" {...field} />}
                />
            </div>
            <div>

                <label htmlFor="message">Mensaje:</label>
                <Controller
                    name="message"
                    control={control}
                    render={({ field }) => <textarea id="message" {...field} />}
                />
            </div>
            <button>enviar</button>
        </form>
    </div>
}


export default Contact