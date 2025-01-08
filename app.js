


let api = "https://www.omdbapi.com/?apikey=4d8d0e46&t="
let title = document.getElementById('title')
let ratings = document.getElementById('ratings')
let director = document.getElementById('director')
let actor = document.getElementById('actor')
let desc = document.getElementById('desc')
let collection = document.getElementById('collection')
let date = document.getElementById('date')
let awards = document.getElementById('awards')
let genre = document.getElementById('genre')
let poster = document.getElementById('poster')




function searchMovie(){
    let movieName = document.getElementById('movieName')
    let query = api+movieName.value
    fetch(query).then((data)=>{
        return data.json()
     }).then((data)=>{
         title.innerText = data.Title;
         date.innerText = data.Released;
         director.innerText  = data.Director;
         awards.innerText = data.Awards;
         actor.innerText = data.Actors;
         desc.innerText = data.Plot;
         collection.innerText = data.BoxOffice;
         ratings.innerText = data.imdbRating;
         genre.innerText = data.Genre;
         writer.innerText = data.Writer;
         poster.src = data.Poster
         
         });

}



