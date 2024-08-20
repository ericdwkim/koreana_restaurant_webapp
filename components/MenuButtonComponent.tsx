'use client';

import Link from 'next/link';

export const MenuButton = () => {
    return (
        <Link href={"/menu"} className="mt-6 inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">MENU</Link>
    );
}

export default MenuButton;