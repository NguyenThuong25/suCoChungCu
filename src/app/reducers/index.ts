import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer,
  createReducer,
  on,
  Action
} from "@ngrx/store";
import { environment } from "../../environments/environment";
import { updateUser } from "./action";

export interface State {
  user;
  message: string;
}

export const initialState: State = {
  user: {
    id: 0,
    name: "1",
    address: "1",
    email: "1",
    phone: "1"
  },
  message: "Hello World"
};

export const userReducer = createReducer(
  // State mặc định ban đầu
  initialState,

  // Hàm xử lý khi nhận action createUser
  on(updateUser, (state, { dataUser }) => {
    // Dữ liệu trả về là 1 state mới vẫn có các thuộc tính như cũ, cập nhật thuộc tính user với giá trị mới là dataUser
    return { ...state, user: dataUser };
  })

  // Hàm xử lý khi nhận action sendMessage
  // on(sendMessage, (state, { msg }) => {
  //   // Dữ liệu trả về là 1 state mới vẫn có các thuộc tính như cũ, cập nhật thuộc tính message với giá trị mới là msg
  //   return { ...state, message: msg };
  // })
);

export function reducer(state: State | undefined, action: Action) {
  return userReducer(state, action);
}

export const reducers: ActionReducerMap<any> = {
  app: reducer
};
