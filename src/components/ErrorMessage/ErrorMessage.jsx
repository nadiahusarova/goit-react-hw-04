import React from "react";
import s from "./ErrorMessage.module.css";

const ErrorMessage = () => (
  <div className={s.errorWrapper}>
    <p>OOOPS! Something went wrong. Try again later.</p>
  </div>
);

export default ErrorMessage;
