import PropTypes from 'prop-types';
import Link from 'next/link';
import * as IoIcon from 'react-icons/io5';
import HeaderOne from '../components/HeaderComps';
import Breadcrumb from '../components/Breadcrumb';
import ComingSoon from '../components/ComingSoon';
import FooterComps from '../components/FooterComps';
import { getAllItems } from '../lib/ItemsUtil';

function ComingSoonPage({ headerItems, comingSoonItems, footerItems }) {
    return (
        <>
            <HeaderOne headerItems={headerItems} headerContainer="container" />
            <Breadcrumb
                breadcrumbContainer="container"
                title="Заказ отправлен..."
                item="Home"
                itemPath="/"
                activeItem="Заказ сформирован и отправлен..."
            />

            <div className="coming-soon border-b border-[#ededed] xl:pt-[105px] lg:pt-[85px] md:pt-[65px] pt-[35px] xl:pb-[120px] lg:pb-[100px] md:pb-[80px] pb-[50px]">
                <div className="container">
                    <div className="grid grid-cols-12">
                        <div className="lg:col-span-6 md:col-span-9 col-span-12">
                            <h2 className="lm:text-[60px] leading-[1.1] text-[34px] mb-[20px]">
                                {comingSoonItems[0]?.title}
                            </h2>
                            <p className="lg:max-w-[530px] mb-[60px]">
                                {comingSoonItems[0]?.desc}
                            </p>
                            {/* <h3 className="lm:text-[18px] text-[16px] mb-[30px]">
                                {comingSoonItems[0]?.countTitle}
                            </h3> */}
                            <div className="social-link flex items-center pt-[60px]">
                                <h2 className="lm:text-[16px] text-[15px] font-normal md:pr-[65px] pr-[45px]">
                                    {comingSoonItems[0]?.socialTitle}
                                </h2>
                                <ul className="flex">
                                    {comingSoonItems[0]?.socialList?.map(
                                        (items) => {
                                            const Social =
                                                IoIcon[items.socialIcon];
                                            return (
                                                <li
                                                    className="mr-[25px] last:mr-0"
                                                    key={items.id}
                                                >
                                                    <Link href={items?.path}>
                                                        <a className="transition-all hover:text-primary">
                                                            <Social />
                                                        </a>
                                                    </Link>
                                                </li>
                                            );
                                        }
                                    )}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <FooterComps
                footerContainer="container"
                footerItems={footerItems}
            />
        </>
    );
}

export function getStaticProps() {
    const headerItems = getAllItems('header');
    const comingSoonItems = getAllItems('order-sent');
    const footerItems = getAllItems('footer');

    return {
        props: {
            headerItems,
            comingSoonItems,
            footerItems,
        },
    };
}

ComingSoonPage.propTypes = {
    headerItems: PropTypes.instanceOf(Array).isRequired,
    comingSoonItems: PropTypes.instanceOf(Array).isRequired,
    footerItems: PropTypes.instanceOf(Array).isRequired,
};

export default ComingSoonPage;
