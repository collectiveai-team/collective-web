import Link from 'next/link';

const Nav = (props) => (
    <nav
        className="navbar navbar-expand-lg p-0 justify-content-center"
        style={{
            height: props.isScrolled ? '4em' : '8em',
            backgroundColor: props.isScrolled
                ? '#000'
                : 'transparent',
        }}
    >
        <div className="col-12 col-md-10 d-flex justify-content-center justify-content-md-between flex-column flex-md-row">
            <Link href="/">
                <a className="title navbar-brand">
                    <img src="/static/ant.png" className="menu-icon d-inline-block d-md-none" />
                    {/* <img src="/static/logo-home.png"/> */}
                    {'{ '}
                    <span className="title-mid mb-2">
                        collective.ai
                    </span>
                    {' }'}
                </a>
            </Link>
            <div className="d-md-block" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <Link href="#services">
                            <a
                                className="nav-link zoom-on-hover"
                                href="#"
                            >
                                services
                            </a>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link href="#about">
                            <a
                                className="nav-link zoom-on-hover"
                                href="#"
                            >
                                about us
                            </a>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link href="#contact">
                            <a
                                className="nav-link zoom-on-hover"
                                href="#"
                            >
                                contact
                            </a>
                        </Link>
                    </li>
                    <li className="nav-item manifest-link">
                        <Link href="https://drive.google.com/file/d/1oqEbWSHtM1UfIGoUDAlJ6U4CqiSFwjLh/view?usp=sharing">
                            <a
                                className="nav-link"
                                href="https://drive.google.com/file/d/1oqEbWSHtM1UfIGoUDAlJ6U4CqiSFwjLh/view?usp=sharing"
                                download
                                target="_blank" // Add this line
                                rel="noopener noreferrer" // Add this line for security reasons
                            >
                                culture
                            </a>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
);

export default Nav;