import React from "react";
import {MdSpaceDashboard,MdFavorite} from 'react-icons/md'
import {FaGripfire,FaPlay,FaSignOutAlt} from 'react-icons/fa'
import { IoLibrary } from 'react-icons/io5'
import SidebarButton from "./sidebarButton"
import "./sidebar.scss";

export default function Sidebar() {
  return (
    <div className="sidebar-container">
      <img
        src="https://scontent.fsgn12-1.fna.fbcdn.net/v/t39.30808-6/269718825_297116925684414_1411415654089061183_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=e3f864&_nc_ohc=i_jnTdEgIkEAX8W-gmj&_nc_ht=scontent.fsgn12-1.fna&oh=00_AT9m_7_y7rfrS9vE6Kug74ghkczsjnOAsk3Ehpx2wXO_mw&oe=62F711F9"
        alt="profile"
        className="profile-image"
      />
      <div className="">
        <SidebarButton title="Feed" to="/feed" icon={<MdSpaceDashboard />} />
        <SidebarButton title="Trending" to="/trending" icon={<FaGripfire />} />
        <SidebarButton title="Player" to="/player" icon={<FaPlay />} />
        <SidebarButton title="Favorites" to="/favorites" icon={<MdFavorite />} />
        <SidebarButton title="Library" to="/" icon={<IoLibrary />} />
      </div>
        <SidebarButton title="Sign Out" to="" icon={<FaSignOutAlt />} />
    </div>
  );
}
