import { createAction, props } from "@ngrx/store";

export const updateUser = createAction("update User", props<{ dataUser }>());

export const sendMessage = createAction(
  "Send Message",
  props<{ msg: string }>()
);
