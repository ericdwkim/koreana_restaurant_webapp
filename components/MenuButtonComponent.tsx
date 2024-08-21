'use client';

import Link from 'next/link';

export const MenuButton = () => {
    return (
        <Link
            href={"/menu"}
            className="
        mt-6
        inline-block
        text-white
        font-bold
        py-2 px-4
        cursor-pointer
        rounded-full
        uppercase
        border-none
        shadow-md
        bg-gradient-to-r from-red-500 to-black
        hover:shadow-lg
      "
        >
            MENU
        </Link>
    );
}

export default MenuButton;
