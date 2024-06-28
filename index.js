import React from "react";
// import ReactDOM from "react-dom";
import { createRoot } from 'react-dom/client';

document.body.innerHTML = '<div id="app"></div>';

const root = createRoot(document.getElementById('app'));

const Myfunc = () => {
  return (
    <>
      <h1>Hello world</h1>
      <h4>child entry test</h4>
      <h4>child entry test</h4>
      <h4>child entry test</h4>
      
    </>
  )
}
root.render(<Myfunc />);