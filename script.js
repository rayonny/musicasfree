const songName = document.getElementById('song-name');
const bandName = document.getElementById('band-name');
const song = document.getElementById('audio');
const cover = document.getElementById('cover');
const play = document.getElementById('play');
const previou = document.getElementById('previous');
const likeButton = document.getElementById('like');
const next = document.getElementById('next');
const currentProgress = document.getElementById('current-progress');
const progressContainer = document.getElementById('progress-container')
const shuffleButton = document.getElementById('shuffles');
const repeatButton = document.getElementById('repeat');
const songTime = document.getElementById('song-time');
const totalTime = document.getElementById('total-time');


const originalplaylist = [{
  songName: 'Amor e Fé',
  artist: 'Hungria Hip Hop',
  file: 'amorefe',
  liked: false,
}, {
  songName: 'anotai',
  artist: 'Mc lipi',
  file: 'anotai',
  liked: false,
}, {
  songName: 'MC Gontijo Baile',
  artist: 'DJ Sati Marconex',
  file: 'baile_coringa',
  liked: false,
}, {
  songName: 'Believer',
  artist: 'Imagine Dragons',
  file: 'Believer',
  liked: false,
}, {
  songName: 'black',
  artist: 'MC Teteu - Topic',
  file: 'black',
  liked: false,
}, {
  songName: 'bloody Mary',
  artist: 'Lady Gaga',
  file: 'bloody_Mary',
  liked: false,
}, {
  songName: 'chefin212',
  artist: 'Mc Chefin',
  file: 'chefin212',
  liked: false,
}, {
  songName: 'ela ta cheirosa',
  artist: 'Tribo da Periferia',
  file: 'cheirosa',
  liked: false,
}, {
  songName: 'crazy In Love',
  artist: 'Byonce',
  file: 'Crazy',
  liked: false,
}, {
  songName: 'Fim da Estrada',
  artist: 'Milionário e José Rico',
  file: 'Fimdeestrada',
  liked: false,
}, {
  songName: 'Girls Like You Cardi B',
  artist: 'Maroon 5',
  file: 'Girls',
  liked: false,
}, {
  songName: 'Hozier',
  artist: 'Take Me To Church',
  file: 'Take',
  liked: false,
}, {
  songName: 'Ela ta Virada',
  artist: 'Tribo Da Periferia',
  file: 'virada',
  liked: false,
}  , {
    songName: 'Rolling in the Deep',
    artist: 'Adele',
    file: 'Rolling',
    liked: false,
  }, {
    songName: 'Set Fire To The Rain',
    artist: 'Adele',
    file: 'SetFire',
    liked: false,
  }, {
    songName: 'Sugar',
    artist: 'Maroon 5',
    file: 'Sugar',
    liked: false,
  }
  , {
    songName: 'John Legend ',
    artist: 'Ed Sheeran',
    file: 'lyrics',
    liked: false,
  }, {
    songName: 'Uptown Funk',
    artist: 'Bruno Mars',
    file: 'Uptown',
    liked: false,
  }, {
    songName: 'Royalty',
    artist: 'DJ Twister Ma',
    file: 'Royalty',
    liked: false,
  }, {
    songName: 'Lil Nas X',
    artist: 'Billy Ray Cyrus',
    file: 'OldTown',
    liked: false,
  }, {
    songName: 'Vou de LaLA 2',
    artist: 'GR6 Explode',
    file: 'voudelala',
    liked: false,
  }, {
    songName: 'Someone You Loved',
    artist: 'Lewis Capaldi',
    file: 'Someone',
    liked: false,
  }
  , {
    songName: 'Oque Tem Na Sopa',
    artist: 'Palava cantada',
    file: 'Sopa',
    liked: false,
  }, {
    songName: 'Lavar As Mãos',
    artist: 'Palavra cantada',
    file: 'Lavar',
    liked: false,
  }, {
    songName: 'Run the World (Girls)',
    artist: 'Beyoncé',
    file: 'Beyonce',
    liked: false,
  }, {
    songName: 'Radioactive',
    artist: 'Imagine Dragons',
    file: 'Dragons',
    liked: false,
  }, {
    songName: 'Umbrella',
    artist: 'Rihanna',
    file: 'rihana',
    liked: false,
  }, {
    songName: 'Hoje Ela Já Chorou',
    artist: 'Hungria Hip Hop',
    file: 'Mato',
    liked: false,
  }, {
    songName: 'É Natural',
    artist: 'ferrugem e sorriso',
    file: 'ferrugemesorriso',
    liked: false,
  }, {
    songName: ' Heart Attack',
    artist: 'Demi Lovato ',
    file: 'Demi',
    liked: false,
  }, {
    songName: 'Ela Que Decide ',
    artist: 'Tribo Da Periferia',
    file: 'Decide',
    liked: false,
  }, {
    songName: 'Beija-Flor Marília Mendonça',
    artist: 'Henrique e Juliano',
    file: 'florbeijaflor',
    liked: false,
  }, {
    songName: 'Conspiração',
    artist: 'Tribo da Periferia-Marília Mendonçaa',
    file: 'tribo',
    liked: false,
  }, {
    songName: 'Unstoppable ',
    artist: 'Sia',
    file: 'sia',
    liked: false,
  }, {
    songName: 'Vai Mostrar O Peitinho ',
    artist: 'Kaio Viana e MC CJ',
    file: 'banana',
    liked: false,
  }, {
    songName: ' Please Me',
    artist: 'Cardi B & Bruno Mars',
    file: 'cardi',
    liked: false,
  }, {
    songName: 'Coraçao cigano',
    artist: 'Luan Santana - Luisa Sonza',
    file: 'luan',
    liked: false,
  }, {
    songName: 'only girl',
    artist: 'Rihanna',
    file: 'Rihanna',
    liked: false,
  }, {
    songName: 'SEM ALIANÇA NO DEDO ',
    artist: 'MC Xenon',
    file: 'Xenon',
    liked: false,
  }, {
    songName: 'I Like It',
    artist: 'Cardi B, Bad Bunny & J Balvin',
    file: 'Bad',
    liked: false,
  }, {
    songName: 'Chantaje',
    artist: 'Shakira',
    file: 'shakira',
    liked: false,
  },  {
    songName: 'Like A Boy ',
    artist: 'Ciara',
    file: 'Ciara',
    liked: false,
  }, ];


let isPlaying = false;
let isShuffled = false;
let repeatOn = false;


let sortedPlaylist = [...originalplaylist];
let index = 0;


function playSong() {
  play.querySelector('.bi').classList.remove('bi-play-circle-fill');
  play.querySelector('.bi').classList.add('bi-pause-circle-fill');
  song.play();
  isPlaying = true;
}

function pauseSong() {
  play.querySelector('.bi').classList.add('bi-play-circle-fill');
  play.querySelector('.bi').classList.remove('bi-pause-circle-fill');
  song.pause();
  isPlaying = false;
}

function playPauseDecider() {
  if (isPlaying === true) {
    pauseSong();
  } else {
    playSong();
  }
}

function likeButtonRender() {
  if (sortedPlaylist[index].liked === true) {
    likeButton.querySelector('.bi').classList.remove('bi-heart');
    likeButton.querySelector('.bi').classList.add('bi-heart-fill');
    likeButton.classList.add('button-active');
  } else {
    likeButton.querySelector('.bi').classList.add('bi-heart');
    likeButton.querySelector('.bi').classList.remove('bi-heart-fill');
    likeButton.classList.remove('button-active');
  }
}

function initializeSong() {
  cover.src = `img/${sortedPlaylist[index].file}.jpg`;
  song.src = `song/${sortedPlaylist[index].file}.mp3`;
  songName.innerText = sortedPlaylist[index].songName;
  bandName.innerText = sortedPlaylist[index].artist;
  likeButtonRender();
}

function previouSong() {
  if (index === 0) {
    index = sortedPlaylist.length - 1;
  } else {
    index -= 1;
  }
  initializeSong();
  playSong();
}

function nextSong() {
  if (index === sortedPlaylist.length - 1) {
    index = 0;
  } else {
    index += 1;
  }
  initializeSong();
  playSong();
}

function updateProgress() {
  const barWidth = (song.currentTime / song.duration) * 100;
  currentProgress.style.setProperty('--progress', `${barWidth}%`);
  songTime.innerText = toHHMMSS(song.currentTime);
}

function jumpTo(event) {
  const width = progressContainer.clientWidth;
  const clickPosition = event.offsetX;
  const jumpToTime = (clickPosition / width) * song.duration;
  song.currentTime = jumpToTime;
}

function shuffleArray(preShuffleArray) {
  const size = preShuffleArray.length;
  let currentIndex = size - 1;
  while (currentIndex > 0) {
    let randomIndex = Math.floor(Math.random() * size);
    let aux = preShuffleArray[currentIndex];
    preShuffleArray[currentIndex] = preShuffleArray[randomIndex];
    preShuffleArray[randomIndex] = aux;
    currentIndex -= 1;
  }
}

function shuffleButtonClicked() {
  if (isShuffled === false) {
    isShuffled = true;
    shuffleArray(sortedPlaylist);
    shuffleButton.classList.add('button-active');
  } else {
    isShuffled = false;
    sortedPlaylist = [...originalplaylist];
    shuffleButton.classList.remove('button-active');
  }
}

function repeatButtonClicked() {
  if (repeatOn === false) {
    repeatOn = true;
    repeatButton.classList.add('button-active');
  } else {
    repeatOn = false;
    repeatButton.classList.remove('button-active');
  }
}

function nextOrRepeat() {
  if (repeatOn === false) {
    nextSong();
  } else {
    playSong();
  }
}

function toHHMMSS(originalNumber) {
  let hours = Math.floor(originalNumber / 3600);
  let min = Math.floor((originalNumber - hours * 3600) / 60);
  let secs = Math.floor(originalNumber - hours * 3600 - min * 60);

  return `${hours.toString().padStart(2, '0')}:${min
    .toString()
    .padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}

function updateTotalTime() {
  totalTime.innerText = toHHMMSS(song.duration);
}

function likeButtonClicked() {
  if (sortedPlaylist[index].liked === false) {
    sortedPlaylist[index].liked = true;
  } else {
    sortedPlaylist[index].liked = false;
  }
  likeButtonRender();
  localStorage.setItem('playlist', JSON.stringify(originalPlaylist));
}

initializeSong();

play.addEventListener('click', playPauseDecider);
previou.addEventListener('click', previouSong);
next.addEventListener('click', nextSong);
song.addEventListener('timeupdate', updateProgress);
song.addEventListener('ended', nextOrRepeat);
song.addEventListener('loadedmetadata', updateTotalTime);
progressContainer.addEventListener('click', jumpTo);
shuffleButton.addEventListener('click', shuffleButtonClicked);
repeatButton.addEventListener('click', repeatButtonClicked);
likeButton.addEventListener('click', likeButtonClicked);


// This is the service worker with the combined offline experience (Offline page + Offline copy of pages)

const CACHE = "pwabuilder-offline-page";

importScripts('https://storage.googleapis.com/workbox-cdn/releases/5.1.2/workbox-sw.js');

// TODO: replace the following with the correct offline fallback page i.e.: const offlineFallbackPage = "offline.html";
const offlineFallbackPage = "ToDo-replace-this-name.html";

self.addEventListener("message", (event) => {
  if (event.data && event.data.type === "SKIP_WAITING") {
    self.skipWaiting();
  }
});

self.addEventListener('install', async (event) => {
  event.waitUntil(
    caches.open(CACHE)
      .then((cache) => cache.add(offlineFallbackPage))
  );
});

if (workbox.navigationPreload.isSupported()) {
  workbox.navigationPreload.enable();
}

workbox.routing.registerRoute(
  new RegExp('/*'),
  new workbox.strategies.StaleWhileRevalidate({
    cacheName: CACHE
  })
);

self.addEventListener('fetch', (event) => {
  if (event.request.mode === 'navigate') {
    event.respondWith((async () => {
      try {
        const preloadResp = await event.preloadResponse;

        if (preloadResp) {
          return preloadResp;
        }

        const networkResp = await fetch(event.request);
        return networkResp;
      } catch (error) {

        const cache = await caches.open(CACHE);
        const cachedResp = await cache.match(offlineFallbackPage);
        return cachedResp;
      }
    })());
  }
});
