import './MyLabel.css'

export interface Props{
    label: string;
    size : "normal" | "h1" | "h2" | "h3";
} 


export const MyLabel = ({label="No label" , size = 'normal'}:Props) => {
  return (
    <span className = {`${size}`} >
        {label}
    </span>
  )
}
