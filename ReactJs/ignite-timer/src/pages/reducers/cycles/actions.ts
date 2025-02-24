import { Cycle } from './reducer';

export enum ActionTypes{
    ADD_NEW_CYCLO='ADD_NEW_CYCLO',
    MARK_CURRENT_CYCLE_FINISHED='MARK_CURRENT_CYCLE_FINISHED',
    INTERRUPT_CURRENT_CYCLO='INTERRUPT_CURRENT_CYCLO'
}

export function addNewCycleAction(newCycle: Cycle){
    return {
        type: ActionTypes.ADD_NEW_CYCLO,
        payload: {
            newCycle,
        }   
    }
}

export function iterruptCurrentCycloAction(){
    return {        
        type: ActionTypes.INTERRUPT_CURRENT_CYCLO
    }
}

export function markCurrentCycleFinishedAction(){
    return {
        type: ActionTypes.MARK_CURRENT_CYCLE_FINISHED
    }
}