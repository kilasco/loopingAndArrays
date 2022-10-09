// ~ PART A ~ //


 for (i = 1000; i > 0; i -= 2){
     console.log(i);
 }

 for (i = 0; i < 10001; i ++) {
     // console.log(i);
     if (i == 2500){
         alert("A quarter of the way there!")
     } else if (i == 5000){
         alert("Halfway there!")
     } else if (i == 10000){
         alert("The loop is done!");
     }
 }

// ~ Part B ~ //

const favoriteShows = ["Game of Thrones", "Rings of Power", "The Haunting of Hill House", "Breaking Bad", "Dragonball Z" ];



for (i = 0; i < favoriteShows.length; i ++) {
        console.log("My #" + (1+i) + " favorite show is "+ favoriteShows[i]);       
}
