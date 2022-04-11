import {useContext , useEffect} from 'react'
import { NewsContext } from '../context/NewsContext'
import List from '../components/List'
import moment from 'moment'
import './News.css'
function News({section}) {
    const {arrNews , getNews ,loading,setLoading , pageLoad} = useContext(NewsContext)
   
   useEffect(()=>{
   getNews(section)
   },[loading])

   if(pageLoad){
     
     return(<h1></h1>)
   }
  return (
    <>
     <main>
     <div className='divHour'>
        <p>
            {moment().format('MMMM Do YYYY, h:mm:ss a')}
        </p>          
        <p>
            21ºC
        </p>
      </div>
    <List arrayN={arrNews} sectionName={section}/>
     </main>
    </>
  )
}
export default News