import React, {useState} from 'react'
import { useDispatch } from 'react-redux';
import { getPopularVideos, getVideosByCategory } from '../../redux/actions/videos.action';
import './_categoriesbar.scss'

const Categoriesbar = () => {
const keywords = [
  'All ',
  'BackBench Coder Youtube Clone',
  'React-JS ',
  'Angular-JS ',
  'React-Native ',
  'Redux',
  'API',
  'DSA',
  'Programmer',
  'Cricket',
  'Stock Markets',
  'Movies',
  'Goldmines Telefilms',
 
]
const [activeElement,setActiveElement] = useState('All');

const dispatch = useDispatch()

const handleClick = (value)=>{
  setActiveElement(value)
  if(value==='All'){
    dispatch(getPopularVideos())
  }else{
  dispatch(getVideosByCategory(value))}
}  ; 

  return (
    <div className="categoriesBar">
      {
        keywords.map( (value, i)=>{
          return(
            <span  onClick={()=>handleClick(value)} key={i} 
                 className={activeElement===value?'active':''}
            >{value}</span>
          )
        } )
      }
    </div>
  )
}

export default Categoriesbar