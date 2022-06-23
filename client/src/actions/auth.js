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
    // send the Post Request to Create a new user with given data
    navigate("/");
  } catch (error) {
    console.log(error);
  }
};

// 1 Litre Whiskey Scottish
// 2 Litre Vodka Absolute
// Cola 6 Litre
// Mineral Water
