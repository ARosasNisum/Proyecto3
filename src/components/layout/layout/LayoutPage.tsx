import React from "react";
import MenuHorizontal from "../menu_horizontal/MenuHorizontal.tsx";
import {Outlet} from "react-router-dom";
import {Card} from "primereact/card";
import {Divider} from "primereact/divider";

const Layout: React.FC = () => {
    return (
        <div className="layout">
            <div className="layout-top">
                <MenuHorizontal/>
            </div>
            <div className="layout-center">
                <Card>
                    {<Outlet/> || 'Put default content here, if any.'}
                </Card>
            </div>
            <div className="layout-bottom">
                <Divider/>
                <footer style={{textAlign: 'center', padding: '10px'}}>
                    South unit content.
                </footer>
            </div>
        </div>
    );
};

export default Layout;