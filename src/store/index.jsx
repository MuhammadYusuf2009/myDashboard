import { persistReducer, persistStore } from "redux-persist";
import { encryptTransform } from "redux-persist-transform-encrypt";
import storage from "redux-persist/lib/storage";
import { configureStore } from "@reduxjs/toolkit";
import combineRedux from "./reducer";

const persistConfig = {
  key: "root",
  storage,
  version: 5,
  whitelist: ["App", "Todolist", "plans"],
  transforms: [
    encryptTransform({
      secretKey: "MuhammadYusuf",
    }),
  ],
};

const persistedReducer = persistReducer(persistConfig, combineRedux);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["persist/PERSIST"],
        ignoredPaths: ["register"],
      },
    }),
});

const persistor = persistStore(store);

export { store, persistor };
