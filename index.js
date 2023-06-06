const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MmRkMGJhYzhlOTA2MDk0YzNhYzIyMGJlMzM5MzQ2YyIsInN1YiI6IjY0MjVhN2I1MzdiM2E5MDA5Nzc3ZjM5NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.AoR1XhMnpo-5ICMOCdNZlkifsbb74HIiuQCigrheOvk'
    }
  };
  const slider=document.getElementById("slider")
  const slider2=document.getElementById("slider2")  
  const slider3=document.getElementById("slider3")  
  const background=document.getElementById("backgtound-img")  
fetch('https://api.themoviedb.org/3/discover/movie?include_adult=true&include_video=false&language=en-US&page=1&sort_by=popularity.desc', options)
.then((response) =>{   
   // console.log(response.status)
  return  response.json()  
    
} )
.then((response) =>{   
  const data = response.results;
 
  
   for (let i = 0; i < 20; i++) {     
    
  let a=data[i]["poster_path"]      
  let img=document.createElement("img") 
img.src="https://image.tmdb.org/t/p/w500"+a    
img.id="img"+ i  
img.classList.add("sliderimg")   
slider.appendChild(img)
  
  }
   // console.log(response.results)
} )
.catch(err => console.error(err));  




fetch('https://api.themoviedb.org/3/discover/tv?include_adult=true&include_video=false&language=en-US&page=1&sort_by=popularity.desc', options)
.then((response) =>{   
    console.log(response.status)
  return  response.json()  
    
} )
.then((response) =>{   
   const data=response.results    
    
  
   for (let i = 0; i < 20; i++) {
  let a=data[i]["poster_path"]      
  let img=document.createElement("img") 
img.src="https://image.tmdb.org/t/p/w500"+a    
img.id="img"+ i  
img.classList.add("sliderimg")   
slider2.appendChild(img)
  //console.log("https://image.tmdb.org/t/p/w500"+a)
  }
   // console.log(response.results)
} )
.catch(err => console.error(err)); 






fetch('https://api.themoviedb.org/3/trending/person/day?language=en-US', options)
.then((response) =>{   
    console.log(response.status)
  return  response.json()  
    
} )
.then((response) =>{   
   const data=response.results    
    
  
   for (let i = 0; i < 20; i++) {
  let a=data[i]["profile_path"]      
  let img=document.createElement("img") 
img.src="https://image.tmdb.org/t/p/w500"+a    
img.id="img"+ i  
img.classList.add("sliderimg")   
slider3.appendChild(img)
  //console.log("https://image.tmdb.org/t/p/w500"+a)
  }
   // console.log(response.results)
} )
.catch(err => console.error(err));