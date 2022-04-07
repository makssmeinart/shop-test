import {Dispatch} from "react";
import {setAppErrorAC, setAppStatusAC} from "../m2.bll/reducer/app/appReducer";

export const handleServerNetworkError = (
  error: { message: string },
  dispatch: Dispatch<any>
) => {
  dispatch(
    setAppErrorAC(error.message ? error.message : "Some error occurred")
  );
  dispatch(setAppStatusAC("failed"));
};
