const { configureStore } = require("@reduxjs/toolkit");
import counterReducer from "./counter/countrSlice";
import usersReducer from "./users/usersSlice";

const store = configureStore({
    reducer: {
        counter: counterReducer,
        users: usersReducer
    }
})

export default store;