
import React,{useState,useEffect} from 'react'
//  import POSTER from "../../ASSETS/POSTERS/POSTER1.JPG"
import './RowPost.css'
import axios from '../../constants/axios';
import YouTube from 'react-youtube';
import {imageUrl} from '../../constants/Url';
import { api_key } from '../../constants/Api';



const RowPost=(props) =>{
    const[rowPost,setrowPost]=useState([])
    const[urlId,seturlId]=useState()
    const[hide,setHide]=useState(false)
    useEffect(()=>{
        
        axios.get(props.url).then(response=>{
            console.table(response.data)
            setrowPost(response.data.results)
        } ).catch(err=>{
            
        })
        
        
    
    },[props.url]);
      
    let opts = {
        height: '290', 
        width:"100%",
        playerVars: {
        // https://developers.google.com/youtube/player_parameter
       // url:`https://www.youtube.com/watch?v=ysz5S6PUM-U`,

          autoplay: 1,
        },
    }
   const handleClick=(id)=>
{
  
  
      
        console.table("xxxxxxxx",id)
        axios.get(`/movie/${id}/videos?api_key=${api_key}&language=en-US`).then(response=>{
          if( response.data.results.length!==0){
            seturlId(response.data.results[0])}// console.log(response.data)
            else
            {
                console.log("no videos")
            }
            
        })
        
        .catch(err=>{

        })
      }
    
      
        /*const handle = (movie) => {
            if (urlId) {
              seturlId("");
            } else {
              movieTrailer(movie?.name || movie?.title || movie?.original_title || "")
                .then((url) => {
                  const urlParams = new URLSearchParams(new URL(url).search);
                  urlId(urlParams.get("v"));
                })
                .catch((error) => console.log(error));
            }*/
           
      
        
           
            
    return (
        
        <div className='row'>
            
            <h1 >{props.title}</h1> 
            <div className='poster'>
            {

                rowPost.map((obj)=>
               <img  className={props.isSmall?'smallposter':'POST'} src={`${imageUrl+obj.backdrop_path}`}alt="ndnfdjn"onClick={()=>handleClick(obj.id)}/>
                )
              
              
}

            </div>
            
     {urlId && <YouTube  videoId={urlId.key}  opts={opts}/>   }   </div>


    )
          }

export default RowPost 