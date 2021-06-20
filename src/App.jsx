import "./styles.css";

import Header from "./components/Header";
import Main from "./components/Main";
import { useState } from "react";

export default function App() {
  const [form, setForm] = useState([]);

  return (
    // <> </> <- These are called React Fragments, and they allow us to return more than one top component
    <>
      <Header />
      <Main />
    </>
  );
}
