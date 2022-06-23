import { useNavigate } from "react-router-dom";
import * as api from "../api";
import { AUTH } from "../constants/actionTypes";

export const signIn = (formData, history) => async (dispatch) => {
  const navigate = useNavigate();
  try {
    // login the user
    navigate("/");
  } catch (error) {
    console.log(error);
  }
};

export const signUp = (formData, history) => async (dispatch) => {
  const navigate = useNavigate();
  try {
    // login the user
    navigate("/");
  } catch (error) {
    console.log(error);
  }
};
