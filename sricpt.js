
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

var large = document.getElementsByClassName("box")
large.onclick = function enlarge()
{
    $("div").click(function()
{
    $("div").animate({width:'250px'} ,{height:'200px'}, 5000);

})

}



