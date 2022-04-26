import React from 'react';

// import TwitterIcon from '@mui/icons-material/Twitter';

import HomeIcon from '@mui/icons-material/Home';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';

import TagIcon from '@mui/icons-material/Tag';

import NotificationsIcon from '@mui/icons-material/Notifications';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';

import EmailIcon from '@mui/icons-material/Email';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';

import BookmarkIcon from '@mui/icons-material/Bookmark';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';

import FeaturedPlayListIcon from '@mui/icons-material/FeaturedPlayList';
import FeaturedPlayListOutlinedIcon from '@mui/icons-material/FeaturedPlayListOutlined';

import PersonIcon from '@mui/icons-material/Person';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';

import MoreHorizIcon from '@mui/icons-material/MoreHoriz';


export const SidebarData = [
    {
        title: "Home",
        icon: <HomeOutlinedIcon />,
        activeIcon: <HomeIcon />,
        link: "/home"
    },
    {
        title: "Explore",
        icon: <TagIcon />,
        activeIcon: <TagIcon />,
        link: "/explore"
    },
    {
        title: "Notifications",
        icon: <NotificationsNoneOutlinedIcon />,
        activeIcon: <NotificationsIcon />,
        link: "/notifications"
    },
    {
        title: "Messages",
        icon: <EmailOutlinedIcon />,
        activeIcon: <EmailIcon />,
        link: "/messages"
    },
    {
        title: "Bookmarks",
        icon: <BookmarkBorderOutlinedIcon />,
        activeIcon: <BookmarkIcon />,
        link: "/bookmarks"
    },
    {
        title: "Lists",
        icon: <FeaturedPlayListOutlinedIcon />,
        activeIcon: <FeaturedPlayListIcon />,
        link: "/lists"
    },
    {
        title: "Profile",
        icon: <PermIdentityOutlinedIcon />,
        activeIcon: <PersonIcon />,
        link: "/profile"
    },
    {
        title: "More",
        icon: <MoreHorizIcon />,
        activeIcon: <MoreHorizIcon />,
        link: "/more"
    },
]