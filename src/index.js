import ReactDOM from "react-dom"
import React from "react"
import { App } from "./App"

const rootEl = document.getElementById("react-app-root")

rootEl && ReactDOM.render(<App />, rootEl)