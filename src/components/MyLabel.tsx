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
} 


export const MyLabel = ({label="No label" , size = 'normal'}:Props) => {
  return (
    <span className = {`${size}`} >
        {label}
    </span>
  )
}
