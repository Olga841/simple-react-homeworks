import {UserType} from "../HW8";

export type HomeWorkReducerType = SortUpAT | SortDownAT | CheckAT
export type SortUpAT = {
    type: 'sort-up',
}
export type SortDownAT = {
    type: 'sort-down',
}
export type CheckAT = {
    type: 'check',
}

export const homeWorkReducer = (state: Array<UserType>, action: HomeWorkReducerType): Array<UserType> => { // need to fix any
    switch (action.type) {
        case 'sort-up': {
            return [...state.sort((a,b) => a.name.localeCompare(b.name))]
        }
        case 'sort-down': {
            return [...state.sort((a,b) => b.name.localeCompare(a.name))]
        }
        case 'check': {
            return [...state.filter((a) => a.age > 18)]
        }
        default: return state
    }
}