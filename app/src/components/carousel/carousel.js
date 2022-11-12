import "./carousel.css";
import React from "react";

const Image = ({ urlString, altName }) => {
  document.addEventListener(
    "contextmenu",
    function (e) {
      alert("You've tried to open context menu"); //here you draw your own menu
      e.preventDefault();
    },
    false
  );
  return (
    <img
      // onContextMenu={() => {
      //   return false;
      // }}
      // http://www.pagetutor.com/no_right_click/
      className="image"
      src={require(`${urlString}`)}
      alt={altName}
    />
  );
};

export const ImageCarousel = () => {
  return (
    <div id="container">
      <Image urlString="./mountain.jpg" altName="this alt name"></Image>
      <img className="image" src={require("./mountain.jpg")} alt="Mountain" />
      <img className="image" src={require("./building.jpeg")} alt="Building" />
      <img className="image" src={require("./mountain.jpg")} alt="Mountain" />
      <img className="image" src={require("./building.jpeg")} alt="Building" />
    </div>
  );
};

export const HomePage = () => {
  return (
    <>
      <div id="container">
        <Image urlString="./mountain.jpg" altName="this alt name"></Image>
      </div>
      <h3>barrett kowalsky is a photographer based in</h3>
      <br />
      <h3>denver, colorado</h3>
    </>
  );
};
