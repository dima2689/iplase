import Link from 'next/link';
import PropTypes from 'prop-types';

function LogoComps({ headerItems, headerLogoCName, logoPath }) {
    return (
        <div className={`${headerLogoCName}`}>
            <Link href={logoPath}>
                <a className="block">
                    <img
                        src={headerItems[0]?.headerLogo[0]?.darkLogo}
                        alt={headerItems[0]?.headerLogo[0]?.darkLogoAlt}
                        width={120}
                        height={30}
                    />
                </a>
            </Link>
        </div>
    );
}

LogoComps.propTypes = {
    headerItems: PropTypes.instanceOf(Object).isRequired,
    headerLogoCName: PropTypes.string.isRequired,
    logoPath: PropTypes.string.isRequired,
};

export default LogoComps;
