console.log("Welcome To Spotify");
let songIndex = 0;
let audioElement = new Audio('songs/song1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let songItem = Array.from(document.getElementsByClassName('songItem'));
let songs = [
    { songName:"Despacito", filePath: "songs/song1.mp3", coverPath : "img/cover1.jpg" },
    { songName:"Cover Me In Sunshine", filePath: "songs/song2.mp3", coverPath : "img/cover2.jpg" },
    { songName:"Up", filePath: "songs/song3.mp3", coverPath : "img/cover3.jpg" },
    { songName:"Fake Smile", filePath: "songs/song4.mp3", coverPath : "img/cover4.jpg" },
    { songName:"Your Power", filePath: "songs/song5.mp3", coverPath : "img/cover5.jpg" },
    { songName:"I can't fall in love", filePath: "songs/song6.mp3", coverPath : "img/cover6.jpg" }
]

masterPlay.addEventListener('click', ()=>
{
    if(audioElement.paused || audioElement.currentTime<=0)
    {
        audioElement.play();
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');
        gif.style.opacity=1;
    }
    else
    {
        audioElement.pause();
        masterPlay.classList.remove('fa-pause');
        masterPlay.classList.add('fa-play');
        gif.style.opacity=0;
    }
})
audioElement.addEventListener('timeupdate', ()=>{
    console.log("timeupdate");
    progress = parseInt((audioElement.currentTime/audioElement.duration) * 100);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change' ,()=>
{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})
songItem.forEach((element,i)=>
{
    console.log(element,i);
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;

})
const makeAllPlays=()=>
{
   
    Array.from(document.getElementsByClassName('songItemPlay')).forEach(()=>
    {
        e.target.classList.remove('fa-pause'),
        e.target.classList.add('fa-play')
    })
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>
{
    element.addEventListener('click',(e)=>
    {
        makeAllPlays();
        e.target.classList.remove('fa-play'),
        e.target.classList.add('fa-pause'),
        audioElement.src='songs/song.mp3';
        audioElement.currentTime=0;
        audioElement.play();
    })

})