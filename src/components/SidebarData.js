import { FiHome } from "react-icons/fi";
import { GrProjects } from "react-icons/gr";
import { GiHamburgerMenu } from "react-icons/gi";
import { SlCalender } from "react-icons/sl";
import { TbReport } from "react-icons/tb";

const data = [
    {
        title: 'Dashboard',
        icon: <FiHome />,
        url: '/dashboard'
    },
    {
        title: 'Projects',
        icon: <GrProjects />,
        url: '/projects'
    },
    {
        title: 'My Tasks',
        icon: <GiHamburgerMenu />,
        url: '/mytasks'
    },
    {
        title: 'Calender',
        icon: <SlCalender />,
        url: '/calender'
    },
    {
        title: 'Reports',
        icon: <TbReport />,
        url: '/reports'
    },
]

export default data