
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

window.addEventListener('load',(event) => {
  document.querySelector('.container .skills .percent .progress').classList.add('animate8');
});

/*
let timer = 0;
window.addEventListener('load',(event)=>{
  let intersectionObserver = new IntersectionObserver(entries =>{
    entries.forEach(entry => {
      if(entry.isIntersecting)
      {
        setTimeout(function() {entry.target.classList.add('animate');}, timer);
        timer += 50;
        intersectionObserver.unobserve(entry.target);
        setTimeout(function() {timer = 0}, 1000);
      }
      
    });
  });

  document.querySelectorAll('.container .skills .percent .progress').forEach(obj =>{
    intersectionObserver.observe(obj);
  });

});
  
*/
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
    OR
    $.getJSON(
    "http://swquotesapi.digitaljedi.dk/api/SWQuote/RandomStarWarsQuote", 
    function(data4){
        document.getElementById("qoute").innerHTML = data4.starWarsQuote;
});
*/


function sendEmail()
    {
      document.getElementById("btn1").style.animation = "myframes 1s linear forwards"; 

      var subjectval = document.getElementById("Subject").nodeValue;
      var bodyval = document.getElementById("Body").nodeValue;
      

      Email.send({
      Host : "smtp.gmail.com",
      Username : "Mshadow0012@gmail.com",
      Password : "HinokamiKagura12",
      To : 'Mhlengi12@gmail.com',
      From : "Mshadow0012@gmail.com",
      Subject : subjectval,
      Body : bodyval
  }).then(
    message => alert(message)
  );
    }
