import {AppStoreType} from "./store";

const initState = {
    isLoading: false
}

type InitStateType = {
    isLoading: boolean
}

type LoadingACType = {
    type: string
    isLoading: boolean
}
export const loadingReducer = (state = initState, action: LoadingACType): InitStateType => { // fix any
    switch (action.type) {
        case 'ON': {
                return {
                    ...state,
                    isLoading : action.isLoading
                }

        }   default: return state
    }

}

export const loadingAC = (isLoading: boolean): LoadingACType => {
    return {type: 'ON', isLoading}
} // fix any