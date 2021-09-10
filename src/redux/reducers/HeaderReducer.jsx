const stateDefault = {
    headerHeight : 0,
}

export const HeaderReducer = (state = stateDefault, aciton) =>{
    switch(aciton.type) {
        case "HEADER_HEIGHT" : {
            state.headerHeight = aciton.height;
            return {...state}
        }
        default : return {...state}
    }
}