import {MenuItem} from "primereact/menuitem";
import {Menubar} from "primereact/menubar";

import './MenuHorizontal.css'
import {useAuth} from "../../../hooks/useAuth.tsx";
import {useNavigate} from "react-router-dom";

const MenuHorizontal = () => {
    const auth = useAuth()
    const navigate = useNavigate()

    const logoutClick = () => {
        auth.logout()
        navigate("/")
    }

    const logoutTemplate = (item: MenuItem) => (
        <a href="#" className={"flex align-items-center p-menuitem-link"} onClick={logoutClick}>
            <span className={item.icon}/>
            <span className="mx-2">{item.label}</span>
        </a>
    );


    const items: MenuItem[] = [
        {
            label: 'TV',
            icon: 'pi pi-check',
            items: [
                {
                    label: 'TV.1.1',
                    icon: 'pi pi-fw pi-check',
                    url: '#'
                },
                {
                    label: 'TV.4.1',
                    icon: 'pi pi-fw pi-check',
                    url: '#'
                }
            ]
        },
        {
            label: 'Sports',
            icon: 'pi pi-file',
            items: [
                {
                    label: 'Sports.1.1',
                    icon: 'pi pi-fw pi-file',
                    url: '#'
                }
            ]
        },
        {
            label: 'Entertainment',
            icon: 'pi pi-pencil',
            items: [
                {
                    label: 'Entertainment.1.1',
                    icon: 'pi pi-fw pi-pencil',
                    url: '#'
                },
                {
                    label: 'Entertainment.1.2',
                    icon: 'pi pi-fw pi-pencil',
                    url: '#'
                }
            ]
        },
        {
            label: 'Tech',
            icon: 'pi pi-user',
            items: [
                {
                    label: 'Tech.1.1',
                    icon: 'pi pi-fw pi-user',
                    url: '#'
                },
                {
                    label: 'Tech.1.2',
                    icon: 'pi pi-fw pi-user',
                    url: '#'
                }
            ]
        },
        {
            label: 'Logout',
            icon: 'pi pi-power-off',
            url: '/',
            template: logoutTemplate
        }
    ];

    return (
        <div className="horizontal-menu">
            <Menubar model={items}/>
        </div>
    );
};

export default MenuHorizontal;