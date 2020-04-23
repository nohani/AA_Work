import React from 'react';
import ReactDOM from "react-dom";
import Clock from './clock';
import Tabs from './tabs';

const tabs = [{"title":"content"}, {"title":"content2"}, {"title":"content3"}]

window.addEventListener("DOMContentLoaded", event => {
  const root = document.getElementById("root");
  const element = (<> < Clock /> < Tabs tabs={tabs}/> </>)
  ReactDOM.render(element, root);
   
});
