// TODO: THE DISLIKE BUTTON
//       FIX THE DOCUMENT EVENT LISTENER


import { Dog } from "./Dog.js";
import { dogsData } from "./data.js";

const randomElementFromArray = (array) =>  Math.floor(Math.random() * array.length)


const DogArray = []

for (let i = 0 ; i< dogsData.length ;i++){
    const renderDog = new Dog(dogsData[i])
    DogArray.push(renderDog)
}


// FIX THIS EVENT LISTENER : is not working due to the img inside the button 
// is not able to get the button id beacuse of the img inside
document.addEventListener("click" , (e) => {
    
    console.log(e.target.id)
   

})



document.querySelector("#like-button").addEventListener("click" , () =>

{
   document.querySelector("#like-button").disabled = true
   document.querySelector("#dislike-button").disabled = true
   let dog = DogArray[randomElementFromArray(DogArray)]
    
      if ( DogArray.every( (e) => e.hasBeenSwiped == true)){
        document.getElementById("hero-container").innerHTML += dog.renderLike()
        dog.hasBeenLiked = true
      
      }
      else {
        if (dog.hasBeenSwiped == false){
            dog.hasBeenSwiped = true
            dog.hasBeenLiked = true
            document.getElementById("hero-container").innerHTML += dog.renderLike()
            
            setTimeout(() => { 
                render(dog)
                document.querySelector("#like-button").disabled = false
                document.querySelector("#dislike-button").disabled = false
                
            }, 1500); 
            
        } 
        else {
            while (true){
                dog = DogArray[randomElementFromArray(DogArray)]
                if (dog.hasBeenSwiped == false){
                    dog.hasBeenSwiped = true
                    dog.hasBeenLiked = true
                    document.getElementById("hero-container").innerHTML += dog.renderLike()
                    
                    setTimeout(() => {
                        render(dog)
                        document.querySelector("#like-button").disabled = false
                        document.querySelector("#dislike-button").disabled = false
                       
                    }, 1500);
                    break
                   

                } 
            
            }
        }

      }
  
    
})


document.querySelector("#dislike-button").addEventListener("click", () => {
   
    document.querySelector("#like-button").disabled = true
    document.querySelector("#dislike-button").disabled = true
    let dog = DogArray[randomElementFromArray(DogArray)]
    
      if ( DogArray.every( (e) => e.hasBeenSwiped == true)){
        document.getElementById("hero-container").innerHTML += dog.renderDislike()
        dog.hasBeenLiked = true
      
      }
      else {
        if (dog.hasBeenSwiped == false){
            dog.hasBeenSwiped = true
            dog.hasBeenLiked = true
            document.getElementById("hero-container").innerHTML += dog.renderDislike()
            
            setTimeout(() => { 
                render(dog)
                document.querySelector("#like-button").disabled = false
                document.querySelector("#dislike-button").disabled = false
                
            }, 1500); 
            
        } 
        else {
            while (true){
                dog = DogArray[randomElementFromArray(DogArray)]
                if (dog.hasBeenSwiped == false){
                    dog.hasBeenSwiped = true
                    dog.hasBeenLiked = true
                    document.getElementById("hero-container").innerHTML += dog.renderDislike()
                    
                    setTimeout(() => {
                        render(dog)
                        document.querySelector("#like-button").disabled = false
                        document.querySelector("#dislike-button").disabled = false
                       
                    }, 1500);
                    break
                   

                } 
            
            }
        }

      }


} )




function render(dog){
   dog.hasBeenSwiped = true

   document.getElementById("main").innerHTML = dog.getDogHtml()
     
}


render(DogArray[randomElementFromArray(DogArray)])



