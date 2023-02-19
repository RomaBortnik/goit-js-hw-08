import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const LOCALSTORAGE_KEY = 'videoplayer-current-time';

player.on('timeupdate', throttle(setCurrentPlayerTime, 1000));

player
  .setCurrentTime(localStorage.getItem(LOCALSTORAGE_KEY))
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        // the time was less than 0 or greater than the video’s duration
        break;

      default:
        // some other error occurred
        break;
    }
  });

function setCurrentPlayerTime(event) {
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(event.seconds));
}
