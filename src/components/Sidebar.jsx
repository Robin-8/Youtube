import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const handilBurg = useSelector((store) => store.handbur.handBurger);
  if (!handilBurg) return null;
  return (
    <div className="fixed top-0 left-0 h-full p-5 shadow-2xl w-36 pt-24 bg-white overflow-y-scroll">
      <Link to={'/'}><h1>Home</h1></Link>
      <h1>Shorts</h1>
      <h1>Subscription</h1>
      <ul>
        <h1 className="font-bold pt-4">You</h1>
        <li>Your Channel</li>
        <li>History</li>
        <li>Play List</li>
        <li>Your Videos</li>
        <li>Watch Later</li>
        <li>Liked Videos</li>
      </ul>
      <ul>
        <h1 className="font-bold pt-4">Explore</h1>
        <li>Shopping</li>
        <li>Music</li>
        <li>Films</li>
        <li>Live</li>
        <li>Gaming</li>
        <li>News</li>
        <li>Sport</li>
        <li>Courses</li>
      </ul>
      <ul>
        <li>Settings</li>
      </ul>
    </div>
  );
};

export default Sidebar;
