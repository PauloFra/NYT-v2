import{useParams} from 'react-router-dom'
import {useContext , useState , useEffect} from 'react'
import { NewsContext } from '../context/NewsContext'
import { LimpaId } from '../Uteis'
import './NewsDetails.css'
function NewsDetails() {
  const {type , id} = useParams()
  const [arrayEspecifico , setArrayEspecifico] = useState([])
  const {arrNews , setArrNews , getNews} = useContext(NewsContext);
  
  function setup(){
    if(!arrNews.lenght){
      getNews(type)
    }
  }
 useEffect(()=>{
    setup()
  },[])
  useEffect(()=>{
    setArrayEspecifico(arrNews.filter(item => LimpaId(item.uri) === id ))
  },[arrNews])

  return (
    <section className='sectionDetails'>
      <h1>{arrayEspecifico.map((el , ind)=>(
        <div key={ind} className="contentDetails">
          <h2>{el.title}</h2>
          <div className='divImgDetails'>
          {el.multimedia === null
            ?
            <>
            <img src="https://i.pinimg.com/favicons/c115e4c7f92cf93aa6b944aaf53ad63fe4512051128972c908d6e0eb.png?419b248f431932f391bf2c37ac6ccf2b" alt="" />
            </>
            :
            <>
              <img src={el.multimedia[1].url} alt="" />
            </>
            }
          </div>
            <div  className="text-right">
              <h3>{el.title}</h3>
              <p>{el.abstract}</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam animi odit magnam cupiditate earum eos, doloribus dolorem porro architecto fuga quos iure saepe rem. Esse numquam distinctio suscipit. Quibusdam, laudantium!</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis debitis magnam temporibus aspernatur, corporis ducimus ipsum ratione culpa, accusamus est facilis excepturi quasi sit cum esse necessitatibus natus impedit maxime doloribus? Nostrum ex voluptas quisquam ducimus accusamus, dolore nam beatae!</p>
            </div>
            <div className="text-left">
              <h3>{el.title}</h3>
              <p>{el.abstract}</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam animi odit magnam cupiditate earum eos, doloribus dolorem porro architecto fuga quos iure saepe rem. Esse numquam distinctio suscipit. Quibusdam, laudantium!</p>
            </div>
        </div>
      ))}</h1>
      
    </section>

  )
}

export default NewsDetails