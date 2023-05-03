import './MyLabel.css'

export interface Props{
    /**
        * ¿Que dira el label?
    */
    label: string;
    /**
        * ¿Cual sera su tamaño?
    */
    size : "normal" | "h1" | "h2" | "h3";
    /**
        * ¿Sera en Mayusculas?
    */
    allCaps? : true | false;
    /**
        * ¿Elige entre los 3 colores?
    */
    color? : "primary" | "secondary" | "tertiary";

} 


export const MyLabel = ({label="No label" , size = 'normal' , allCaps = false , color = "primary"}:Props) => {
  return (
    <span className = {`${size}  color: text-${color}`} >
        {allCaps === true ?  label.toUpperCase() : label}
    </span>
  )
}
