import { useParams } from "react-router-dom"
import { useFetch } from "../../hooks/useFetch"
function ArticlesDetail() {
    const {id} = useParams()
    const url= 'http://localhost:3000/articles/' + id
    console.log(url)
    const {data: artile, isPending, error}=useFetch(url)
  return (
    <div>
         {isPending&& <h3>Loading...</h3>}
        {error&&<h3>{error}</h3>}
        {artile&&(<>
        <img src={artile.image} alt={artile.title} height='300'  />
        <h3>Title: { artile.title}</h3>
         <p>Author: <i>{ artile.author}</i></p>
         <p>
            {artile.body}
         </p>
        </>)}
    </div>
  )
}

export default ArticlesDetail