import {useParams} from 'react-router-dom';
import React,{useState, useEffect, useRef} from 'react';
import playAudio from '../images/play.svg'
import pauseAudio from '../images/pause.svg'
import download from "../images/download.svg"
import axios from "axios";


    const Details = () => {
    const params = useParams();
    const [song,setSong]=useState([])
    const audioElm=useRef(null);
    const clickRef=useRef(null);
    const [isPlaying,setIsPlaying]=useState(false)
    const [openDownlod,setOpenDownlod]=useState(false)
    const [showProgress,setShowProgress]=useState(false)
   

        useEffect(()=>{
            const fetchAPI= async () =>{
           await axios.get(`https://api-beta.melobit.com/v1/song/${params.id}`)
           .then (response => {
                setSong(response.data)})
           }
           fetchAPI();
           window.scrollTo(0,0);
       },[])
       useEffect(()=>{
        if( isPlaying && audioElm.current){
            audioElm.current.play()
        }else if(audioElm.current )
        {
            audioElm.current.pause() ;
        }
       })
       const clickHandler=()=>{
        setIsPlaying(!isPlaying)
       
    }

    const onPlaying=()=>{
        const duration=audioElm.current.duration;
        const ct=audioElm.current.currentTime;
        setSong({...song,"progress" : ct/duration*100,"length":duration})
    }
    
    const checkWidth=(e)=>{
        let width=clickRef.current.clientWidth;
        const offset=e.nativeEvent.offsetX;
        const divProgress=offset/width*100;
        audioElm.current.currentTime=divProgress/100 * song.length;

    }



    return (
        <div id='details' className='container-fluid mt-2'>
              
              <div className='row justify-content-center'>

                <div className='col-12 bg-blur mt-5 d-md-block d-sm-none d-none'>
                    {
                        song.image && <img className='w-100' src={song.album.image.cover.url}  alt='slider'/>
                    }
                </div>
            </div> 
            <div className='row justify-content-center mt-5 '>
                <div className='col-md-4 col-sm-9 col-9 order-md-3 order-sm-1 order-1 text-center'>
                    <div className='top-cart position-relative'>
                    {song.album &&
                     <img src={song.album.image.cover.url} alt={song.title}/> }
                    </div>
                    <div className='bottom-cart text-center py-2 position-relative'>
                    {song.artists && <h6 className='pt-3'>{song.artists[0].fullName}</h6> }
                            <h6 className='pt-3'>{song.title}</h6>
                {
                    showProgress&&
                            <div className='progressbar-div mt-3' onClick={checkWidth} ref={clickRef}>
                                <div className='progress-div' style={{width:`${song.progress}%`}}>
                                </div>
                                <div className='row pt-3 justify-content-between duration-ct'>
                                    {
                                    audioElm.current &&
                                    <>
                                    <div className='col-5  text-dark fw-bold text-start'></div>
                                    <div className='col-5  text-dark fw-bold text-end'>{!isNaN(audioElm.current.duration.toFixed(0)) && `${audioElm.current.duration.toFixed(0)}s`}</div>
                                    </>}
                                </div>
                            </div>
                           }
                             <div className='play text-center mt-5'>
                              <button className='btn-play-pause' onClick={clickHandler}>
                                {
                                    isPlaying ? <img src={pauseAudio} alt="pause" /> :<img src={playAudio} alt="play" onClick={()=>setShowProgress(true)} /> 
                                }
                              </button>
                             {song.audio &&
                             <audio co src={song.audio.high.url} ref={audioElm} onTimeUpdate={onPlaying}></audio>
                             }
                             </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Details;