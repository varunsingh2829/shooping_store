export  const reducer = (state,action ) => {
    if(action.type === "remove_item") {
        return {
            ...state,
            item: state.item.filter((curel) => {
                return curel.id !== action.payload;
            }),
        };
    }
    if(action.type === "clear_cart") {
        return {
            ...state,
            item: [],
        };
    }
    if(action.type === "increment") {

        let updateditem = state.item.map((curelm) => {
            if (curelm.id===action.payload){
                return {...curelm,amount:curelm.amount+1};

            }
            return curelm;

        });
        return {
            ...state,
            item: updateditem,
        };
    }
    if(action.type === "decrement") {

        let updateditem = state.item.map((curelm) => {
            if (curelm.id===action.payload && curelm.amount>=1){

                return {...curelm,amount:curelm.amount-1};

            }
            return curelm;

        }).filter((curel) => {
            return curel.amount !== 0;

        });
        return {
            ...state,
            item: updateditem,
        };
    }

    if(action.type === "get_total"){
         let {totalitems,totalamount} = state.item.reduce((accum,curvalue) =>{
             let {price,amount} = curvalue;
             accum.totalamount += price*amount;
             accum.totalitems += amount;
             console.log(accum);
             return accum;
             
         },{totalitems : 0,totalamount : 0});

         return {...state, totalitems,totalamount};
    }
    return state;

};