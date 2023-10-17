import PropTypes from 'prop-types';
import Link from 'next/link';

function HeaderMenu({ headerItems, differentPositionCName }) {
    return (
        <div className={`${differentPositionCName} header-menu`}>
            <nav>
                <ul className="flex justify-center">
                    {headerItems[0]?.homeBoxedMenu?.map((menuOne) => (
                        <li
                            className={`${menuOne.holderCName} py-[50px] mr-[55px] last:mr-0`}
                            key={menuOne.id}
                        >
                            <Link href={menuOne.path}>
                                <a>{menuOne.title}</a>
                            </Link>
                            {menuOne.submenuCName && !menuOne.megamenuCName && (
                                <ul className={`${menuOne.submenuCName}`}>
                                    {menuOne?.headerSubmenu?.map(
                                        (submenuOne) => (
                                            <li key={submenuOne.id}>
                                                <Link
                                                    href={`${submenuOne.submenuPath}`}
                                                >
                                                    <a>
                                                        {
                                                            submenuOne.submenuTitle
                                                        }
                                                    </a>
                                                </Link>
                                            </li>
                                        )
                                    )}
                                </ul>
                            )}
                            {menuOne.megamenuCName && !menuOne.submenuCName && (
                                <ul className={`${menuOne.megamenuCName} flex`}>
                                    {menuOne?.headerMegamenu?.map(
                                        (megamenuOne) => (
                                            <li
                                                className="basis-[22%] px-[15px]"
                                                key={megamenuOne.id}
                                            >
                                                <span className="font-medium block mb-[20px]">
                                                    {megamenuOne.groupName}
                                                </span>
                                                <ul>
                                                    {megamenuOne?.groupItems?.map(
                                                        (groupItem) => (
                                                            <li
                                                                className="mb-[10px] last:mb-0"
                                                                key={
                                                                    groupItem.id
                                                                }
                                                            >
                                                                <Link
                                                                    href={`${groupItem.megamenuPath}`}
                                                                >
                                                                    <a className="font-normal transition-all hover:text-primary">
                                                                        {
                                                                            groupItem.megamenuTitle
                                                                        }
                                                                    </a>
                                                                </Link>
                                                            </li>
                                                        )
                                                    )}
                                                </ul>
                                            </li>
                                        )
                                    )}
                                </ul>
                            )}
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
}

HeaderMenu.propTypes = {
    headerItems: PropTypes.instanceOf(Object).isRequired,
    differentPositionCName: PropTypes.string.isRequired,
};

export default HeaderMenu;
