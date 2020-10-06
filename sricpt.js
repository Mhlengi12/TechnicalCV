
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

    var form = document.getElementsByClassName("gitapi")
    var user = document.getElementById("gituser")
    user = "Mhlengi12"
    fetch("https://api.github.com/users" + user)
    .then((result) => result.json())
    .then((data) =>{
    console.log(data)

    form.innerHTML ='<a target="_blank" href ="https://api.github.com/${originalName}> img scr="${data.avatar_url}"/> '
    user.innerHTML = '<p><ul><li> Name: "${data.name}"</li> <li> Repos:"${data.repos_url}"  </li>Total Repos: #"${data.public_repos}" <li>Starting Date: "${data.created_at}" </li> <li> </li> </ul></p>'
    });

/*
    fetch("https://official-joke-api.appspot.com/random_joke")
    .then((result) => result.json())
    .then((data1) =>{
    console.log(data1)

    document.getElementById("joke").appendChild('<li>Setup "${data1.setup}" </li> <li> Punchline: "${data1.punchline}" </li> ')
    });
*/
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

}
/*
$element.document.querySelector("loadbar");
$element.addEventListner('click', () => {
 $element.classList.toggle("animation")
})
*/

var large = document.getElementsByClassName("cert")
large.onclick = function enlarge()
{
    $("div").click(function()
{
    $("div").animate({width:'250px'} ,{height:'200px'}, 1000);

})

}



