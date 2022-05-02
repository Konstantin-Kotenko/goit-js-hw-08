import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

const onPlay = function (data) {
  localStorage.setItem('videoplayer-current-time', data.seconds);
};

const timeSeconds = localStorage.getItem('videoplayer-current-time');

player.setCurrentTime(timeSeconds).then(function (seconds) {
  seconds = timeSeconds;
});

player.on('timeupdate', throttle(onPlay, 1000));
