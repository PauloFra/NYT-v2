import {createContext , useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import api from '../api'

export const NewsContext = createContext()

function NewsProvider({children}) {
  
    const [arrNews , setArrNews] = useState([])  
    const [loading , setLoading] = useState(true)  
    const [pageLoad , setPageLoad] = useState(true)  
    useEffect(()=>{
   setLoading(false)
 },[])
  async function getNews(section){
    try{
        const {data} = await api.get(`${section}.json?api-key=MtNvPePihFmABWskxQqc0uobSzMoeT1K`);
        setArrNews(data.results);
        
        setPageLoad(false)
    }catch(error){
        console.log(error)
    }
   
  }
  if(loading){
    return(<h1>Loading</h1>)
  }
  return (
    <NewsContext.Provider value={{arrNews , setArrNews , getNews ,setLoading ,loading,pageLoad}}>
        {children}
    </NewsContext.Provider>
  )
}

export default NewsProvider