const videos = [
  "dQw4w9WgXcQ", // sample video 1
  "3GwjfUFyY6M", // sample video 2
  "L_jWHffIx5E"  // sample video 3
];

function getVideoOfTheDay() {
  const daysSinceEpoch = Math.floor(Date.now() / (1000 * 60 * 60 * 24));
  const index = daysSinceEpoch % videos.length;
  return videos[index];
}

function loadVideo() {
  const videoId = getVideoOfTheDay();
  const iframe = document.createElement('iframe');
  iframe.width = '560';
  iframe.height = '315';
  iframe.src = `https://www.youtube.com/embed/${videoId}?rel=0`;
  iframe.frameBorder = '0';
  iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
  iframe.allowFullscreen = true;
  document.getElementById('video-container').appendChild(iframe);
}

document.addEventListener('DOMContentLoaded', loadVideo);
