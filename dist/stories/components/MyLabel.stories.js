"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomBackgroundColor = exports.CustomColorFont = exports.Tertiary = exports.Secondary = exports.AllCaps = exports.Basic = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var MyLabel_1 = require("../../components/MyLabel");
//* importamos el componente a probar
//* hacemos esta configuracion , el titulo seria donde pondriamos el componente en SB , component el componente a probar
exports.default = {
    title: "UI/MyLabel",
    component: MyLabel_1.MyLabel,
    /*  argTypes :{
         size : { control : 'select'}
     }, */
    tags: ['autodocs'], //* genera automaticamente los docs
};
var Template = function (args) { return (0, jsx_runtime_1.jsx)(MyLabel_1.MyLabel, __assign({}, args)); }; //* hacemos un Template del componente
exports.Basic = Template.bind({}); //* aca creamos los distintos tipos , con bind le estamos diciendo que cree una copia del Template, rompiendo la referencia de JS con los objetos
exports.Basic.args = {
    size: "normal",
    allCaps: false,
    fontColor: "#000000"
};
exports.AllCaps = Template.bind({}); //*  hacemos esta copia para poder mutar el mismo objeto y no tener incovenientes
exports.AllCaps.args = {
    size: 'normal',
    allCaps: true,
};
exports.Secondary = Template.bind({});
exports.Secondary.args = {
    size: "normal",
    color: 'secondary',
};
exports.Tertiary = Template.bind({});
exports.Tertiary.args = {
    size: "normal",
    color: 'tertiary',
};
exports.CustomColorFont = Template.bind({});
exports.CustomColorFont.args = {
    size: "h1",
    fontColor: "#5517ac",
};
exports.CustomBackgroundColor = Template.bind({});
exports.CustomBackgroundColor.args = {
    size: "h1",
    fontColor: "white",
    backgroundColor: 'black'
};
