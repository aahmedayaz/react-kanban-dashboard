import { FiHome } from "react-icons/fi";
import { GrProjects } from "react-icons/gr";
import { GiHamburgerMenu } from "react-icons/gi";
import { SlCalender } from "react-icons/sl";
import { TbReport } from "react-icons/tb";

const data = [
    {
        title: 'Dashboard',
        icon: <FiHome />,
        url: '/dashboard',
        id: 1
    },
    {
        title: 'Projects',
        icon: <GrProjects />,
        url: '/projects',
        id: 2
    },
    {
        title: 'My Tasks',
        icon: <GiHamburgerMenu />,
        url: '/mytasks',
        id: 3
    },
    {
        title: 'Calender',
        icon: <SlCalender />,
        url: '/calender',
        id: 4
    },
    {
        title: 'Reports',
        icon: <TbReport />,
        url: '/reports',
        id: 5,
        sublinks : [
            {
                title: 'KANBAN Reports',
                icon: <TbReport />,
                url: '/reports/kanban',
                id: 6
            },
            {
                title: 'Agile Reports',
                icon: <TbReport />,
                url: '/reports/agile',
                id: 7
            }
        ]
    },
]

export default data