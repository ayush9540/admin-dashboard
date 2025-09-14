
// Sidebar and Cards Icons
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import ContentPasteIcon from "@mui/icons-material/ContentPaste";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import Inventory2Icon from "@mui/icons-material/Inventory2";
import LeaderboardIcon from "@mui/icons-material/Leaderboard";
import PaidIcon from '@mui/icons-material/Paid';
import SavingsIcon from '@mui/icons-material/Savings';
import ShopIcon from '@mui/icons-material/Shop';

//Sidebar Data
export const sidebarData = [
  {
    icon: HomeRoundedIcon,
    heading: "Dashboard",
  },
  {
    icon: ContentPasteIcon,
    heading: "Orders",
  },
  {
    icon: PeopleAltIcon,
    heading: "Customers",
  },
  {
    icon: Inventory2Icon,
    heading: "Products",
  },
  {
    icon: LeaderboardIcon,
    heading: "Analytics",
  }
];

//Cards Data
export const cardsData = [
  {
    title: "Sales",
    color: {
      backGround: "linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)",
      boxShadow: "0px 10px 20px 0px #e0c6f5",
    },
    barValue: 70,
    value: "25,970",
    png: PaidIcon,
    series: [
      {
        name: "Sales",
        data: [31, 40, 28, 51, 42, 109, 100],
      },
    ],
  },
  {
    title: "Revenue",
    color: {
      backGround: "linear-gradient(180deg, #FF919D 0%, #FC929D 100%)",
      boxShadow: "0px 10px 20px 0px #FDC0C7",
    },
    barValue: 80,
    value: "14,270",
    png: SavingsIcon,
    series: [
      {
        name: "Revenue",
        data: [10, 100, 50, 70, 80, 30, 40],
      },
    ],
  },
  {
    title: "Expenses",
    color: {
      backGround:
        "linear-gradient(rgb(248, 212, 154) -146.42%, rgb(255 202 113) -46.42%)",
      boxShadow: "0px 10px 20px 0px #F9D59B",
    },
    barValue: 60,
    value: "4,270",
    png: ShopIcon,
    series: [
      {
        name: "Expenses",
        data: [10, 25, 15, 30, 12, 15, 20],
      },
    ],
  },
];


// Recent Update Card Data

import img1 from '../assets/images/img1.png'
import img2 from '../assets/images/img2.png'
import img3 from '../assets/images/img3.png'

export const UpdatesData = [
  {
    img: img1,
    name: "Andrew ",
    noti: "has ordered Apple smart watch 2500mh battery.",
    time: "25 seconds ago",
  },
  {
    img: img2,
    name: "James ",
    noti: "has received Samsung gadget for charging battery.",
    time: "30 minutes ago",
  },
  {
    img: img3,
    name: "Iron Man ",
    noti: "has ordered Apple smart watch, samsung Gear 2500mh battery.",
    time: "2 hours ago",
  },
];