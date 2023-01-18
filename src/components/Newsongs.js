import React , {useState, useEffect}  from 'react';
import { getLatestSong } from '../services/api';
import Top from './Top';


const Newsongs = () => {

    const [newSongs,setNewSongs]=useState([])
        
    
   
    useEffect(()=>{
      const fetchAPI= async () =>{
         const data=await getLatestSong();
         setNewSongs(data)
      }
      fetchAPI();
  },[])

    return (
       <div>
        <Top title="جدیدترین آهنگ ها" state={newSongs}/>
        </div>
    );
}

export default Newsongs;