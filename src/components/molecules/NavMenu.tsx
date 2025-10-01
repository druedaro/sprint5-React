import type { NavMenuProps } from "../../types";


const NavMenu = ({ items }: NavMenuProps) => {
    return (
        <nav>
            <ul className="flex space-x-8">
                {items.map((item) => (
                    <li key={item.id}>
                        <a href={item.href} className="text-gray-700 hover:text-red-600 font-medium uppercase text-base">
                            {item.label}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default NavMenu;
