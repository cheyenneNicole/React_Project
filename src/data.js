
import iphone11 from "./Images/iphone11.png";
import iphonexr from "./Images/iphone-xr.png";
import iphone11Ex from "./Images/iphone-11-pro-max.png";

const ADD_CHECKOUT= 'ADD_CHECKOUT';
const ADD_ITEM = 'ADD_ITEM';
const REMOVE_ITEM = 'REMOVE_ITEM';
const SUB_QUANTITY = 'SUB_QUANTITY';
const ADD_QUANTITY = 'ADD_QUANTITY';
const ADD_SHIPPING = 'ADD_SHIPPING';



const initialState ={
    items:[
        {
            id: 0,
            name: 'iPhone11',
            description: 'it features a 6.1-inch LCD display that Apple calls a "Liquid Retina HD Display." It features a 1792 x 828 resolution at 326ppi a 1400:1 contrast ratio, 625 nits max brightness, True Tone support for adjusting the white balance to the ambient lighting, and wide color support for true-to-life colors.',
            features: 'Finish. Black, Green, Yellow, Purple, and White and Capacity 64GB,SDisplay Liquid Retina HD display Splash, Water, and Dust Resistant 3 Rated IP68 (maximum depth of 2 meters up to 30 minutes) under IEC standard 60529.Chip. A13 Bionic chip, Camera. Dual 12MP Ultra Wide and Wide cameras Video Recording',
            stars: 4.5,
            inStock: true,
            img: './Images/iphone11', 
            colors: ['purple', 'yellow', 'green', 'white', 'black', 'red'],
            priceTotal: 699.00,
            priceMonthly: "41.66/mo",
            details: 'The iPhone 11 display has rounded corners that follow a beautiful curved design, and these corners are within a standard rectangle.',
            sku: '09437296284',
            img: iphone11

        },
        {
            id: 1,
            name: 'iPhone11 pro max',
            description: 'it features a 6.1-inch LCD display that Apple calls a "Liquid Retina HD Display." It features a 1792 x 828 resolution at 326ppi a 1400:1 contrast ratio, 625 nits max brightness, True Tone support for adjusting the white balance to the ambient lighting, and wide color support for true-to-life colors.',
            features: 'Finish. Black, Green, Yellow, Purple, and White and Capacity 64GB,SDisplay Liquid Retina HD display Splash, Water, and Dust Resistant 3 Rated IP68 (maximum depth of 2 meters up to 30 minutes) under IEC standard 60529.Chip. A13 Bionic chip, Camera. Dual 12MP Ultra Wide and Wide cameras Video Recording',
            stars: 4.5,
            inStock: true,
            img: './Images/iphone11', 
            colors: ['purple', 'yellow', 'green', 'white', 'black', 'red'],
            priceTotal: 699.00,
            priceMonthly: "41.66/mo",
            details: 'The iPhone 11 display has rounded corners that follow a beautiful curved design, and these corners are within a standard rectangle.',
            sku: '09437296284',
            img: iphone11Ex
        },
        {
            id: 2,
            name: 'iPhone XR',
            description: 'it features a 6.1-inch LCD display that Apple calls a "Liquid Retina HD Display." It features a 1792 x 828 resolution at 326ppi a 1400:1 contrast ratio, 625 nits max brightness, True Tone support for adjusting the white balance to the ambient lighting, and wide color support for true-to-life colors.',
            features: 'Finish. Black, Green, Yellow, Purple, and White and Capacity 64GB,SDisplay Liquid Retina HD display Splash, Water, and Dust Resistant 3 Rated IP68 (maximum depth of 2 meters up to 30 minutes) under IEC standard 60529.Chip. A13 Bionic chip, Camera. Dual 12MP Ultra Wide and Wide cameras Video Recording',
            stars: 4.5,
            inStock: true,
            img: './Images/iphone11', 
            colors: ['purple', 'yellow', 'green', 'white', 'black', 'red'],
            priceTotal: 699.00,
            priceMonthly: "41.66/mo",
            details: 'The iPhone 11 display has rounded corners that follow a beautiful curved design, and these corners are within a standard rectangle.',
            sku: '09437296284',
            img: iphonexr
        }
    ],
    addedItems:[],
    total: 0.00

}
const itemReducer = (state = initialState, action)=>{

    if(action.type === ADD_ITEM){
        let addedItem = state.items.find(item=> item.id === action.id)
       let existed_item= state.addedItems.find(item=> action.id === item.id)
       if(existed_item)
       {
          addedItem.quantity += 1 
           return{
              ...state,
               total: state.total + addedItem.priceTotal
                }
      }
       else{
          addedItem.quantity = 1;
          let newTotal = state.total + addedItem.priceTotal
          
          return{
              ...state,
              addedItems: [...state.addedItems, addedItem],
              total : newTotal
          }
          
      }
  }
  if(action.type === REMOVE_ITEM){
      let itemToRemove= state.addedItems.find(item=> action.id === item.id)
      let new_items = state.addedItems.filter(item=> action.id !== item.id)
      let newTotal = state.total - (itemToRemove.priceTotal * itemToRemove.quantity )
      console.log(itemToRemove)
      return{
          ...state,
          addedItems: new_items,
          total: newTotal
      }
  }
  //INSIDE CART COMPONENT
  if(action.type=== ADD_QUANTITY){
      let addedItem = state.items.find(item=> item.id === action.id)
        addedItem.quantity += 1 
        let newTotal = state.total + addedItem.priceTotal
        return{
            ...state,
            total: newTotal
        }
  }
  if(action.type=== SUB_QUANTITY){  
      let addedItem = state.items.find(item=> item.id === action.id) 
      //if the qt == 0 then it should be removed
      if(addedItem.quantity === 1){
          let new_items = state.addedItems.filter(item=>item.id !== action.id)
          let newTotal = state.total - addedItem.priceTotal
          return{
              ...state,
              addedItems: new_items,
              total: newTotal
          }
      }
      else {
          addedItem.quantity -= 1
          let newTotal = state.total - addedItem.priceTotal
          return{
              ...state,
              total: newTotal
          }
      }
  }
  if(action.type=== ADD_SHIPPING){
    return{
        ...state,
        total: state.total + 6.00
    }
}

if(action.type=== 'SUB_SHIPPING'){
  return{
      ...state,
      total: state.total - 6.00
  }
}

else{
  return state
  }
}
export default itemReducer;
