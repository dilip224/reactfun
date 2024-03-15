import { useParams,useSearchParams } from "react-router-dom"


export const Props = () => {
let {value}=useParams()   //value ra router ma vako :value same huna parcha
const [valu,setValue]=useSearchParams()
console.log(value)
    return (
    <h1>Props name:{value}</h1>
  )
}
