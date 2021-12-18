const initialState = {
    bookingList: []
}

export default function bookingReducer(state = initialState, action) {
    switch (action.type) {
        case "ADD_TO_BOOKING_LIST": {
            const newState = { ...state, bookingList: [...state.bookingList, action.payload] };
            return newState
        }
        default:
            return state;
    }
}