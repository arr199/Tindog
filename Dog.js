export class Dog {

    constructor(data) {

        Object.assign(this,data)
        


    }
    getDogHtml(){
         return ` 
            <div style="background-image: url(${this.avatar}); " class="hero-container" id="hero-container">
                <h1 class="dog-name">${this.name} , ${this.age}</h1>
                <h2 class="question">How you doin?</h2>
            </div>` 
        }
    renderLike(){
        return `<img class="hidden-like" src="images/badge-like.png">`

    }
    renderDislike() { 
        return `<img class="hidden-dislike" src="images/badge-nope.png">`
        
        

    }





      
       

    
}