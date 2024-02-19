import React, { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import Header from "../components/Header/Header";

const Layout = () => {

    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            navigate('/login');
        }else{
            navigate('/monitoring')
        }
    }, [navigate]);

    return (
        <div>
        <header>
            <Header/>
        </header>

        <main>
            <div className="container mx-auto">
                <Outlet/>
            </div>
            
        </main>
    </div>
    );
};

export default Layout;