import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useDispatch,useSelector} from 'react-redux'
import {increment,decrement} from './features/counter/reduxslice'
import { useGetPokemonByNameQuery,useDeletePostByNameMutation } from './services/Pokemon'

function App() {
  const dispatch=useDispatch()
  const manipulated=useSelector((state)=>{return( state.counter.value)})
  const { data, error, isLoading } = useGetPokemonByNameQuery()
  const[deleteFun,response]=useDeletePostByNameMutation()

 

  // const { data, error, isLoading } = useGetPokemonByNameQuery()
  // console.log(data)
  


  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={ ()=>{dispatch(increment())} }>
          count is {manipulated}
        </button>
        <button onClick={  deleteFun('bulbasaur') }>
          Delete
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

    {/* *******redux api******* */}
    {
      error?(
        <>oops there is an error</>
      ):isLoading ?(
        <>loading....</>
      ):data?(
        <>
        {
          (data.results).map((value)=>{
            console.log(value)
            return <>
            {/* <img src={value.sprites.front_shiny} alt={data.species.name} width="500px"/> */}
            <h2>{value.name} <a href={value.url}>Details</a></h2> 
            
            
            
            
             </>
          })
        }

          {/* <h3>{data.results}</h3> */}
          {/* {console.log(data.results)} */}
        </>
      ):null




    }




    </>
  )
}

export default App
