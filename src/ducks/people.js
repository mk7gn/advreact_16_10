import {appName} from '../config'
import {Record, Map} from 'immutable'
import {reset} from 'redux-form'

/**
 * Constants
 * */
export const moduleName = 'people'
const prefix = `${appName}/${moduleName}`

export const ADD_PEOPLE_START = `${prefix}/ADD_PEOPLE_START`
export const ADD_PEOPLE_SUCCESS = `${prefix}/ADD_PEOPLE_SUCCESS`

/**
 * Reducer
 * */
export const ReducerRecord = Record({
    entities: new Map(),
    loading: false,
    error: null
})

export default function reducer(state = new ReducerRecord(), action) {
    const {type, payload} = action

    switch (type) {
        case ADD_PEOPLE_START:
            return state.set('loading', true)

        case ADD_PEOPLE_SUCCESS:
            return state
                .update('entities', entities => entities.merge(payload))
                .set('loading', false)

        default:
            return state
    }
}

/**
 * Selectors
 * */

/**
 * Action Creators
 * */
export function addHuman(firstName, lastName, email) {
    const id = +new Date();
    return (dispatch) => {
        dispatch({
            type: ADD_PEOPLE_START
        })

        dispatch({
            type: ADD_PEOPLE_SUCCESS,
            payload: { [id]: {firstName, lastName, email} }
        })

        dispatch(reset(moduleName))
    }
}