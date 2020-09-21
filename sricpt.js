window.onload = function()
{
    let progress = document.getElementById('scrollBar');
      let totalHeight = document.body.scrollHeight - window.innerHeight;
      window.onscroll = function()
      {
      let progressHeight = (window.pageYOffset / totalHeight) * 100;
      progress.style.height = progressHeight + "%";
      }

}


/*
const progressBar = document.getElementsByClassName('progress-bar')[0]
setInterval(() => {
    const computedStyle = getComputedStyle(progressBar)
    const width = parseFloat(computedStyle.getPropertyValue('--width')) || 0
    progressBar.style.setProperty('--width',width + .01)
}, 20)
*/