export const LOAD_B_MOVIES = 'LOAD_B_MOVIES';
export const LOAD_H_MOVIES = 'LOAD_H_MOVIES';
export const ADD_TO_FAVORITE = 'ADD_TO_FAVORITE';
export const ADD_TO_SAVE = 'ADD_TO_SAVE';
export const ADD_TO_WATCH = 'ADD_TO_WATCH';
//export const REMOVE_FROM_FAVOURITE = 'REMOVE_FROM_FAVOURITE';
export const REMOVE_FROM_LIKE = 'REMOVE_FROM_LIKE';
export const REMOVE_FROM_SAVE = 'REMOVE_FROM_SAVE';
export const REMOVE_FROM_WATCH = 'REMOVE_FROM_WATCH';
export function loadBollywood(bMovies) { // add product
    return {
        type: LOAD_B_MOVIES,
        bMovies: {
            ...bMovies,

        },
    }
}
export function loadHollywood(hMovies) { // add product
    return {
        type: LOAD_H_MOVIES,
        hMovies: {
            ...hMovies,

        },
    }
}

export function addFavorite(data) {
    return {
        type: ADD_TO_FAVORITE,
        payload: data,
    };
};
export function addSave(data) {
    return {
        type: ADD_TO_SAVE,
        payload: data,
    };
};

export function addWatch(data) {
    return {
        type: ADD_TO_WATCH,
        payload: data,
    };
};
export const RemoveFromFavouriteAction = (name) => {
    return {
        type: REMOVE_FROM_LIKE,
        payload: name,
    };
};
export const RemoveFromSaveAction = (name) => {
    return {
        type: REMOVE_FROM_SAVE,
        payload: name,
    };
};
export const RemoveFromWatchAction = (name) => {
    return {
        type: REMOVE_FROM_WATCH,
        payload: name,
    };
};
// export const removeItemFromCart = index => ({
//     type: REMOVE_ITEM,
//     payload: index,
// });





