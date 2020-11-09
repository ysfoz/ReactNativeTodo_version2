function reducer(state,action) {
    switch(action.type){
        case 'ADD_DELETED_ITEM':
            const newList =[...state.deletedList];
            newList.push(action.payload.deletedItem)
            state.deletedList = newList;
            return {...state}
        //     return{
        //         ...state,
        //         deletedList:[...state,action.payload.deletedItem]
        // }  
        case 'CLEAR_All':
            state.deletedList = []
            return {...state}

        case 'CLEAR_ITEM':
            const newList2 = [...state.deletedList];
            newList2.splice(action.payload.INDEX,1)
            state.deletedList = newList2
            return{...state}

    default:
        return state;  
    }
}

export {reducer}