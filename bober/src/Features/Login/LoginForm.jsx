import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import React, { useState } from "react";
import "./LoginForm.css";
import { auth } from "../../firestore/firestore-config";
import { useDispatch, useSelector } from "react-redux";
import { signInUser } from "../../auth/authActions";
import { signInWithEmail } from "../../firestore/firebase-config";
import { useNavigate } from "react-router-dom";
import { updateLoading } from "../../store/global-state/globalActions";

const LoginForm = () => {
  const navigate = useNavigate();
  const isLoggedIn = useSelector((state) => state.auth.authenticated);

  const dispatch = useDispatch();
  const initalValues = {
    email: "",
    password: "",
  };

  const [formValues, setFormValues] = useState(initalValues);
  const [user, setUser] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    console.log(formValues);
  };
  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });
  const logOut = async () => {
    await signOut(auth);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(updateLoading(true))
    try {
      await signInWithEmail(formValues, navigate, dispatch);

      // console.log(isLoggedIn)
      // console.log("user",user)
    } catch (error) {
      console.log(error);
    }
    // dispatch(signInUser(formValues))
  };
  return (
    <>
      <div class="form-wrap">
        <div class="hit-the-floor">Вход!</div>

        <form class="form" onSubmit={handleSubmit}>
          <div class="control"></div>
          <div class="control block-cube block-input">
            <input
              placeholder="Электронная Почта"
              onChange={(e) => handleChange(e)}
              name="email"
              value={formValues.email}
            />
            <div class="bg-top">
              <div class="bg-inner"></div>
            </div>
            <div class="bg-right">
              <div class="bg-inner"></div>
            </div>
            <div class="bg">
              <div class="bg-inner"></div>
            </div>
          </div>
          <div class="control block-cube block-input">
            <input
              placeholder="Пароль"
              onChange={(e) => handleChange(e)}
              name="password"
              type="password"
              value={formValues.password}
            />
            <div class="bg-top">
              <div class="bg-inner"></div>
            </div>
            <div class="bg-right">
              <div class="bg-inner"></div>
            </div>
            <div class="bg">
              <div class="bg-inner"></div>
            </div>
          </div>
          <button class="btn block-cube block-cube-hover">
            <div class="bg-top">
              <div class="bg-inner"></div>
            </div>
            <div class="bg-right">
              <div class="bg-inner"></div>
            </div>
            <div class="bg">
              <div class="bg-inner"></div>
            </div>
            <div class="text">Войти</div>
          </button>
          <div class="credits"></div>
        </form>
      </div>
    </>
  );
};

export default LoginForm;
