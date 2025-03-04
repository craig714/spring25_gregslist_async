import { AppState } from "../AppState.js"

export class House {
  constructor(data) {
      this.id = data.id
      this.bedrooms = data.bedrooms
      this.bathrooms = data.bathrooms
      this.levels = data.levels
      this.imgUrl = data.imgUrl
      this.year = data.year
      this.price = data.price
      this.description = data.description
      this.creatorId = data.creatorId
      this.creator = data.creator
  }

// get deleteButton() {
//     // NOTE who is currently logged in
//     const user = AppState.identity

//     // NOTE if user is not logged in
//     if (user == null) {
//       return ''
//     }

//     // NTOE if the logged in user did not create the car
//     if (this.creatorId != user.id) {
//       return ''
//     }

//     return `
//      <button onclick="app.housesController.deleteHouse('${this.id}')" class="btn btn-outline-danger">
//         Delete Car
//       </button>
//     `
//   }



  get houseCard(){
    return `
    
    
      <div class="col-md-4 mb-2 shadow">
              <img src="${this.imgUrl}" class="img-fluid rounded-start" alt="...">
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">$ ${this.price.toLocaleString()}</h5>
                <p class="card-text">${this.description}</p>
                <p class="card-text">Year: ${this.year}</p>
                <p class="card-text">Bedrooms: ${this.bedrooms}</p>
                <p class="card-text">Bathrooms: ${this.bathrooms}</p>
                <p class="card-text">Levels: ${this.levels}</p>
                <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
                <button onclick="app.housesController.deleteHouse('${this.id}')" class="btn btn-outline-danger">
        Delete House
      </button>
              </div>
            </div>
          </div>
        </div>
    
    
    `
  }





















}