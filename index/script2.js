const songName=document.getElementById("song-name"),bandName=document.getElementById("band-name"),song=document.getElementById("audio"),cover=document.getElementById("cover"),play=document.getElementById("play"),previou=document.getElementById("previous"),likeButton=document.getElementById("like"),next=document.getElementById("next"),currentProgress=document.getElementById("current-progress"),progressContainer=document.getElementById("progress-container"),shuffleButton=document.getElementById("shuffles"),repeatButton=document.getElementById("repeat"),songTime=document.getElementById("song-time"),totalTime=document.getElementById("total-time"),baile_coringa={songName:"MC Gontijo Baile",artist:"DJ Sati Marconex",file:"baile_coringa",liked:!1},Royalty={songName:"Royalty",artist:"DJ Twister Ma",file:"Royalty",liked:!1},black={songName:"black",artist:"MC Teteu - Topic",file:"black",liked:!1},bloody_Mary={songName:"bloody Mary",artist:"Lady Gaga",file:"bloody_Mary",liked:!1},OldTown={songName:"Lil Nas X",artist:"Billy Ray Cyrus",file:"OldTown",liked:!1},voudelala={songName:"Vou de LaLA 2",artist:"GR6 Explode",file:"voudelala",liked:!1},Someone={songName:"Someone You Loved",artist:"Lewis Capaldi",file:"Someone",liked:!1},Fimdeestrada={songName:"Fim da Estrada",artist:"Milion\xE1rio e Jos\xE9 Rico",file:"Fimdeestrada",liked:!1},sopa={songName:"Oque Tem Na Sopa",artist:"Palava cantada",file:"Sopa",liked:!1},Lavar={songName:"Lavar As M\xE3os",artist:"Palavra cantada",file:"Lavar",liked:!1};let isPlaying=!1,isShuffled=!1,repeatOn=!1;const originalplaylist=[baile_coringa,Royalty,black,bloody_Mary,OldTown,voudelala,Someone,Fimdeestrada,Lavar,sopa];let sortedPlaylist=[...originalplaylist],index=0;function playSong(){play.querySelector(".bi").classList.remove("bi-play-circle-fill"),play.querySelector(".bi").classList.add("bi-pause-circle-fill"),song.play(),isPlaying=!0}function pauseSong(){play.querySelector(".bi").classList.add("bi-play-circle-fill"),play.querySelector(".bi").classList.remove("bi-pause-circle-fill"),song.pause(),isPlaying=!1}function playPauseDecider(){!0===isPlaying?pauseSong():playSong()}function likeButtonRender(){!0===sortedPlaylist[index].liked?(likeButton.querySelector(".bi").classList.remove("bi-heart"),likeButton.querySelector(".bi").classList.add("bi-heart-fill"),likeButton.classList.add("button-active")):(likeButton.querySelector(".bi").classList.add("bi-heart"),likeButton.querySelector(".bi").classList.remove("bi-heart-fill"),likeButton.classList.remove("button-active"))}function initializeSong(){cover.src=`img/${sortedPlaylist[index].file}.jpg`,song.src=`song/${sortedPlaylist[index].file}.mp3`,songName.innerText=sortedPlaylist[index].songName,bandName.innerText=sortedPlaylist[index].artist,likeButtonRender()}function previouSong(){0===index?index=sortedPlaylist.length-1:index-=1,initializeSong(),playSong()}function nextSong(){index===sortedPlaylist.length-1?index=0:index+=1,initializeSong(),playSong()}function updateProgress(){const a=100*(song.currentTime/song.duration);currentProgress.style.setProperty("--progress",`${a}%`),songTime.innerText=toHHMMSS(song.currentTime)}function jumpTo(a){const b=progressContainer.clientWidth,c=a.offsetX,d=c/b*song.duration;song.currentTime=d}function shuffleArray(a){const b=a.length;for(let c=b-1;0<c;){let d=Math.floor(Math.random()*b),e=a[c];a[c]=a[d],a[d]=e,c-=1}}function shuffleButtonClicked(){!1===isShuffled?(isShuffled=!0,shuffleArray(sortedPlaylist),shuffleButton.classList.add("button-active")):(isShuffled=!1,sortedPlaylist=[...originalplaylist],shuffleButton.classList.remove("button-active"))}function repeatButtonClicked(){!1===repeatOn?(repeatOn=!0,repeatButton.classList.add("button-active")):(repeatOn=!1,repeatButton.classList.remove("button-active"))}function nextOrRepeat(){!1===repeatOn?nextSong():playSong()}function toHHMMSS(a){let b=Math.floor(a/3600),c=Math.floor((a-3600*b)/60),d=Math.floor(a-3600*b-60*c);return`${b.toString().padStart(2,"0")}:${c.toString().padStart(2,"0")}:${d.toString().padStart(2,"0")}`}function updateTotalTime(){totalTime.innerText=toHHMMSS(song.duration)}function likeButtonClicked(){sortedPlaylist[index].liked=!(!1!==sortedPlaylist[index].liked),likeButtonRender(),localStorage.setItem("playlist",JSON.stringify(originalPlaylist))}initializeSong(),play.addEventListener("click",playPauseDecider),previou.addEventListener("click",previouSong),next.addEventListener("click",nextSong),song.addEventListener("timeupdate",updateProgress),song.addEventListener("ended",nextOrRepeat),song.addEventListener("loadedmetadata",updateTotalTime),progressContainer.addEventListener("click",jumpTo),shuffleButton.addEventListener("click",shuffleButtonClicked),repeatButton.addEventListener("click",repeatButtonClicked),likeButton.addEventListener("click",likeButtonClicked);