import Link from 'next/link'

const NavLink = ({ href, title }) => {
    return (
        <Link
            href={href}
            className="block py-2 ol-3 or-4 font-semibold text-neutral-900 sm-text-xl rounded md:p-0 hover:text-neutral-200"
        >
            {title}
        </Link>
    );
}

export default NavLink;