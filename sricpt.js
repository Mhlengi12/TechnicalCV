
window.onload = function()
{ 
    let progress = document.getElementById('scrollBar');
      let totalHeight = document.body.scrollHeight - window.innerHeight;
      window.onscroll = function()
      {
      let progressHeight = (window.pageYOffset / totalHeight) * 100;
      progress.style.height = progressHeight + "%";
      }

      if(progressHeight >= 70)
      {
        //document.getElementById('loadbar').style.animation ='animate2 4s ease-in-out forwards';
      }

  

/*
    var qouteid;
    while(qouteid != "27")
    {
    fetch("http://swquotesapi.digitaljedi.dk/api/SWQuote/RandomStarWarsQuote")
    .then((result) => result.json())
    .then((data2) =>{
        console.log(data2)
        qouteid = '${data2.id}'.toString();

        if(qouteid == "27")
        {
            user.appendChild('<li>Favourite Qoute: "${data2.starWarsQoute}" </li> ');
        }
        else
        {
            continue;
        }
        
    });

    }
*/
}

var large = document.getElementsByClassName("cert")
large.onclick = function enlarge()
{
    $("div").click(function()
{
    $("div").animate({width:'250px'} ,{height:'200px'}, 1000);

})

}

