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
    /**
        * ¿Elige su color de fuente?
    */
   fontColor? : string;
      /**
        * ¿Elige su color de fondo?
    */
    backgroundColor? : string;
} 


export const MyLabel = ({
        label="No label" , 
        size = 'normal' , 
        allCaps = false , 
        color = "primary" , 
        fontColor="#aaaaaaa" ,
        backgroundColor = 'transparent'
    }:Props) => {
  return (
    <span className = {`${size}  color: text-${color} label`} style={{color: fontColor , backgroundColor : backgroundColor }} >
        {allCaps === true ?  label.toUpperCase() : label}
    </span>
  )
}
