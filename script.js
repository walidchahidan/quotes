let url = "https://type.fit/api/quotes";
 

    function randomBetween(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    async function getQuotes(url) {
      let quote = document.getElementById("quote");
      let auth = document.getElementById("auth");
      
      let data = await fetch(url);
      let data2 = await data.json();
      let nbr = randomBetween(1,1000);

      
        let user = data2[nbr];
        // console.log(user.text);
        // console.log(user.author);
       quote.textContent=user.text;
       auth.textContent=user.author;

       if(user.author==null){
        auth.innerText="Inkonnu";
       }
    }
    
    getQuotes(url);



