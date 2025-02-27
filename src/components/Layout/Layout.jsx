import Header from '../Header/Header';
import { Outlet } from 'react-router';
import { Suspense } from 'react';

function Layout() {
    return (
        <>
            <Header />
            <main>
                <Suspense fallback={<div>Завантаження...</div>}>
                    <Outlet />
                </Suspense>
            </main>
        </>
    );
}

export default Layout;