
import {
    LOAD_PRODUCTS,
    SET_GRIDVIEW,
    SET_LISTVIEW,
    UPDATE_FILTERS,
    UPDATE_SORT,
    SORT_PRODUCTS,
    FILTER_PRODUCTS,
    CLEAR_FILTERS,
} from '../actions';

const filter_reducer=(state, action)=>{

    if(action.type===LOAD_PRODUCTS){
        let maxPrice=action.payload.map((p)=>p.price);
        maxPrice=Math.max(...maxPrice)
        return {...state,all_products:[...action.payload],filtered_product:[...action.payload],
        filters:{...state.filters,max_price:maxPrice,price:maxPrice}}
    }
    // To display products in grid view usig buttons
    if(action.type===SET_GRIDVIEW){
        return {...state,grid_view:true}
    }
    //To dispaly products in list view using buttons
     if(action.type===SET_LISTVIEW){
        return {...state,grid_view:false}
    }

    //handling sorting --updating select values

    if(action.type===UPDATE_SORT){
        return {...state, sort:action.payload}
    }
    
    //handling sorting --

    if(action.type===SORT_PRODUCTS){
      const {sort,filtered_product}=state;
      let tempProduct=[...filtered_product];

      if(sort==="price-lowest"){
      tempProduct=tempProduct.sort((a,b)=>a.price-b.price)
      }

      if(sort==="price-highest"){
        tempProduct=tempProduct.sort((a,b)=>b.price-a.price)
      }
   //local.compare()
      if(sort==="name-a"){
        tempProduct=tempProduct.sort((a,b)=>{
            return a.name.localeCompare(b.name)
        })
      }

      if(sort==="name-z"){
        tempProduct=tempProduct.sort((a,b)=>{
            return b.name.localeCompare(a.name)
        })
      }
      return {...state,filtered_product:tempProduct}
    }
      // Filter
       if(action.type===UPDATE_FILTERS){
        const {name,value}=action.payload
        return {...state,filters:{...state.filters,[name]:value}}

       }
       if(action.type===FILTER_PRODUCTS){
        const {all_products}=state;
        const {text,category,company,color,price,shipping}=state.filters

        // to get all data from scratch while filtering
        let tempProducts=[...all_products]

        //filtering

       if(text){
        tempProducts=tempProducts.filter((product)=>{
          return product.name.toLowerCase().startsWith(text)
        })
       }

// category
        if(category!=='all'){
          tempProducts=tempProducts.filter((product)=>{
            return product.category===category
          })
        }
 //company
 if(company!=='all'){
  tempProducts=tempProducts.filter((product)=>{
    return product.company===company
  })
}

//color
if(color!=='all'){
  tempProducts=tempProducts.filter((product)=>{
    return product.colors.find((c)=> c===color)
  })
}

//price
 tempProducts=tempProducts.filter((product)=>product.price<=price)

//shipping

if(shipping){
   tempProducts=tempProducts.filter((product)=>product.shipping===true)
}

        return {...state,filtered_product:tempProducts}
       }



   
       if(action.type===CLEAR_FILTERS){
         return {...state,  filters:{
          ...state.filters,
          text:'',
          company:'all',
          category:'all',
          color:'all',
          price:state.filters.max_price,
          shipping:false,
        },}
       }

      
    
    throw new Error (`No matching '${action.type}' -action type`)
}

export default filter_reducer;