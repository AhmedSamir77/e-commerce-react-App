import React from "react";
import "./NotFound.module.css";
import notfound from './../../assets/images/error.svg';

export default function NotFound() {
  return <>
 <img src={notfound} className="w-75" alt="" />
  </>
}
