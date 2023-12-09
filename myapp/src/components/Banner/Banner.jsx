import React, { useEffect,useState } from "react";
import axios from '../../constants/axios';
import { trending,imageUrl} from '../../constants/Url';

import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import InfoIcon from '@mui/icons-material/Info';
import "./Banner.css"; 
/*import { CenterFocusStrong } from "@mui/icons-material";*/

function Banner () 
{
const [movies, setMovies] = useState([])


useEffect(()=>{
axios.get(`${trending}`)    


.then((response)=>{
    setMovies(response.data.results[Math.floor(Math.random()* response.data.results.length-1)]); 
    
}

).catch((err) =>{
    console.log(err);
});

},[]);

console.log("movies*********",movies);  
function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
}

    return (
        <>
    
        <div
        
        style=
        {{ 
            backgroundImage:
            `Url(${movies?imageUrl+movies.backdrop_path:" "})`,
        
        }
        
       
        }
         className="Banner"
         >
            <div className="Content">
                <div className="Title">{movies.length!==0? movies.title:""} </div>
                <div className="Netflixbanner_button1">
                    <button className="button1">
                        <PlayArrowIcon/>PLAY</button>
                        <button className="button1">
                            <InfoIcon/>MORE INFO</button>
                    
                    </div>
                              
                    <div className="description">{truncate(movies?.overview, 300)}
                        </div>
                
                <div className="fade_bottom"></div>


            </div>
            
        </div> 
       
        </>
        
        
        




    );


        };
export default Banner;
