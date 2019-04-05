import { createStore } from "redux";

import dataReducer from "./reducers/data-reducer";

const store = createStore(dataReducer);

export default store;
