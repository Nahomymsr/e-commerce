export function DptoReducer(state,action){
    switch(action.type){
        case "SET_DATA":
            return{...state,data: action.payload}
        
    }
}