import * as yup from "yup";

const currentDate = new Date();
const currentDateLocated = currentDate.toLocaleDateString("pt-BR");
const minDate = new Date("01/01/1950");

export const loginSchema = yup.object({
  cpf: yup
    .string()
    .required("Campo obrigatório!")
    .matches(
      /^\d{3}\.\d{3}\.\d{3}-\d{2}$/,
      "CPF inválido! (formato aceito: 000.000.000-00)"
    ),
  date: yup
    .date()
    .required("Campo obrigatório!")
    .max(currentDate, `A data não pode ser superior à ${currentDateLocated}`)
    .min(minDate, "A data não pode ser inferior a 1950"),
});
