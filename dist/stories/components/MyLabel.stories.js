var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsx as _jsx } from "react/jsx-runtime";
import { MyLabel } from "../../components/MyLabel";
//* importamos el componente a probar
//* hacemos esta configuracion , el titulo seria donde pondriamos el componente en SB , component el componente a probar
export default {
    title: "UI/MyLabel",
    component: MyLabel,
    /*  argTypes :{
         size : { control : 'select'}
     }, */
    tags: ['autodocs'], //* genera automaticamente los docs
};
var Template = function (args) { return _jsx(MyLabel, __assign({}, args), void 0); }; //* hacemos un Template del componente
export var Basic = Template.bind({}); //* aca creamos los distintos tipos , con bind le estamos diciendo que cree una copia del Template, rompiendo la referencia de JS con los objetos
Basic.args = {
    size: "normal",
    allCaps: false,
    fontColor: "#000000"
};
export var AllCaps = Template.bind({}); //*  hacemos esta copia para poder mutar el mismo objeto y no tener incovenientes
AllCaps.args = {
    size: 'normal',
    allCaps: true,
};
export var Secondary = Template.bind({});
Secondary.args = {
    size: "normal",
    color: 'secondary',
};
export var Tertiary = Template.bind({});
Tertiary.args = {
    size: "normal",
    color: 'tertiary',
};
export var CustomColorFont = Template.bind({});
CustomColorFont.args = {
    size: "h1",
    fontColor: "#5517ac",
};
export var CustomBackgroundColor = Template.bind({});
CustomBackgroundColor.args = {
    size: "h1",
    fontColor: "white",
    backgroundColor: 'black'
};
