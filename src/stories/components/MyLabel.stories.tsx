import {  Meta, StoryFn } from "@storybook/react";
import { MyLabel } from "../../components/MyLabel";
//* importamos el componente a probar

//* hacemos esta configuracion , el titulo seria donde pondriamos el componente en SB , component el componente a probar
export default {
    title : "UI/MyLabel",
    component : MyLabel,
   /*  argTypes :{
        size : { control : 'select'}
    }, */
    tags: ['autodocs'], //* genera automaticamente los docs
} as Meta <typeof MyLabel>


const Template : StoryFn<typeof MyLabel> = ( args ) => <MyLabel {...args}/> //* hacemos un Template del componente

export const Basic = Template.bind({}); //* aca creamos los distintos tipos , con bind le estamos diciendo que cree una copia del Template, rompiendo la referencia de JS con los objetos
Basic.args = {
    size: "normal",
    allCaps : false
}

export const AllCaps = Template.bind({}); //*  hacemos esta copia para poder mutar el mismo objeto y no tener incovenientes
AllCaps.args = {
    size : 'normal',
    allCaps : true,
}

export const Secondary = Template.bind({});
Secondary.args = {
    size : "normal",
    color : 'secondary',
}

export const Tertiary = Template.bind({});
Tertiary.args = {
    size : "normal",
    color : 'tertiary',
}
