import { MyLabel } from "../../components/MyLabel";
//* importamos el componente a probar

export default {
    title : "UI/MyLabel",
    component : MyLabel
}//* hacemos esta configuracion , el titulo seria donde pondriamos el componente en SB , component el componente a probar


const Template = () => <MyLabel /> //* hacemos un Template del componente

export const Basic = Template.bind({}); //* aca creamos los distintos tipos , con bind le estamos diciendo que cree una copia del Template, rompiendo la referencia de JS con los objetos

export const AllCaps = Template.bind({}); //*  hacemos esta copia para poder mutar el mismo objeto y no tener incovenientes

export const Secondary = Template.bind({});