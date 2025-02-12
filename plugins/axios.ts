import { defineNuxtPlugin } from "#app";
import axios from "axios";

export default defineNuxtPlugin((nuxtApp) => {
  const api = axios.create({
    baseURL: "https://osoncopyapi.pythonanywhere.com/api",
    headers: {
      common: {
        "Content-Type": "application/json",
      },
    },
  });

  nuxtApp.provide("axios", api);
});
