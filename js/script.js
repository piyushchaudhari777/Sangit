console.log("Welcome  to melody");

//initialize the variable
let songIndex=0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myprogressBar = document.getElementById('myprogressBar');
let gif = document.getElementById('gif');
let mastersongname = document.getElementById('mastersongname');
let songitem =Array.from(document.getElementsByClassName('songitem'));


let songs =[
    {songName: "Levitating" ,filepath: "songs/1.mp3" , coverpath:"cover/1.jpg"},
    {songName: "No Lie" ,filepath: "songs/2.mp3" , coverpath:"cover/2.jpg"},
    {songName: "Gazab ka hai ye Din" ,filepath: "songs/3.mp3" , coverpath:"cover/3.jpg"},
    {songName: "Lean On" ,filepath: "songs/4.mp3" , coverpath:"cover/4.jpg"},
    {songName: "Play Date" ,filepath: "songs/5.mp3" , coverpath:"cover/5.jpg"},
    {songName: "Let me love you" ,filepath: "songs/6.mp3" , coverpath:"cover/6.jpg"},
    {songName: "On and On" ,filepath: "songs/7.mp3" , coverpath:"cover/7.jpg"},
]

songitem.forEach((element ,i)=>{
        // console.log('element ,i');
        element.getElementsByTagName("img")[0].src =songs[i].coverpath;
        element.getElementsByClassName("songname")[0].innerText =songs[i].songName;
})

//handle play/pause click
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;
    }
    else
    {
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity = 0;
    }    
})
//listen to events
audioElement.addEventListener('timeupdate',()=>{
    console.log('timeupdate');
    //updateseekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100);
    // console.log(progress);
    myprogressBar.value = progress;
})

myprogressBar.addEventListener('change',()=>{
    audioElement.currentTime = myprogressBar.value * audioElement.duration/100;
})

const makeallplays = ()=>{
        Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
            element.classList.remove('fa-circle-pause');
            element.classList.add('fa-circle-play');
    })

}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
        console.log(e.target);
        makeallplays();
       
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioElement.src = `songs/${songIndex+1}.mp3`;
        mastersongname.innerText =songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');

    
    })    
})

document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=6){
        songIndex = 0;
    }
    else
    {
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    mastersongname.innerText =songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
    
})

document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex = 0;
    }
    else
    {
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    mastersongname.innerText =songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
    
})