import { AppState } from "../AppState.js";
import { housesService } from "../services/HousesService.js";
import { getFormData } from "../utils/FormHandler.js";
import { Pop } from "../utils/Pop.js";


export class HousesController{
  constructor(){
    AppState.on('houses', this.drawHouses)
    
console.log('houses controller is working');
  this.getHouses()
  }

async deleteHouse(houseId){
  try {
    const confirmed = await Pop.confirm('Are you sure you want to delete this house?', 'this cannot be undone',' Yup send it', 'NOOO dont send it!')
    if (!confirmed) {
      return
    }
    await housesService.deleteHouse(houseId)
  } catch (error) {
    console.error('COULD NOT DELETE HOUSE');
     Pop.error(error, 'COULD NOT DELETE HOUSE')
    
  }
}


async getHouses(){
  try {
    await housesService.getHouses()
  } catch (error) {
    console.error('COULD NOT GET HOUSES');
     Pop.error(error, 'COULD NOT GET HOUSES ')
    }
  }
  
  async createHouseListing(){
    try {
      event.preventDefault()
      const FormElem = event.target
      const rawHouseData = getFormData(FormElem)
      await housesService.createHouse(rawHouseData)
    } catch (error) {
      console.error('COULD NOT CREATE HOUSES');
       Pop.error(error, 'COULD NOT CREATE HOUSES ')
      
  }
}


drawHouses(){
  const houses = AppState.houses
  let content = ''
  houses.forEach(house => content += house.houseCard)
  const housesElem = document.getElementById('houseList')
  housesElem.innerHTML = content
}




}