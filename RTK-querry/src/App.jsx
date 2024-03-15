import './App.css'
import { useGetAllDocQuery,useDeleteDataMutation,useCreateDataMutation,useUpdateDataMutation } from "./services/crud"

function App() {
  const {data,error,isLoading}=useGetAllDocQuery('posts')
  const [funParam,data1]=useDeleteDataMutation()
  const [funParam1,data2]=useDeleteDataMutation()
  const [funParam2,data4]=useUpdateDataMutation()
  console.log("is loading "+isLoading)
  console.log("is success "+ data4.isSuccess)
  // const scroll=()=>{
  //   funParam(55)
  // }
  const data3=({
    id:5,
    title: 'aabay lauday nikal fursat may',
    body: 'bar',
    userId: 2,
  })
  const scroll=()=>{
    funParam2(data3)
  }
 
  return (
    <>
      { error?(
          <>OOps there is an error</>
        ):isLoading?(
          <>Loading...</>
        ):data?(
         <> 
        <button onClick={scroll}>Anjela</button>

         {data.map((data)=>{
          // console.log(data)
          return( 
          <><h2>{data.id}.{data.title}</h2>
          <h5>Ans:{data.body}</h5>
          {/* <h1>{value+='❤️'}</h1> */}
          </>  )
          }
          )}
          </>
        ):null
      }
    </>
  )
}

export default App
