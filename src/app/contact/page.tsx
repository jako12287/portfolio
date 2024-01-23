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
    const { handleSubmit, control } = useForm({ mode: "onChange", errors:{} })

    const onSubmit: SubmitHandler<ValuesFormProps> = (values: ValuesFormProps) => {
        console.log(values)
    }
    return <div>
        <CustomTitle title="Contactame" />

        <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="name">Nombre:</label>
            <Controller
                name="name"
                control={control}
                render={() => <input id="name" type="text" />}
            />

        </form>
    </div>
}


export default Contact