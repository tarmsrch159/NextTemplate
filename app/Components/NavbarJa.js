import Link from "next/link";
import React from "react";
function NavbarJa() {

    const linkNavbar = [
        { "name": 'About', 'url': '/Pages/about' },
        { "name": 'Courses', 'url': '/Pages/course' },
        {
            "name": 'pages', 'dropdown': [
                { "name": 'Our Team', "url": "/Pages/pages-2/team" },
                { "name": 'Testimonial', "url": "/Pages/pages-2/testimonial" },
                { "name": '404 Page', "url": "/Pages/pages-2/404" },
            ]
        },
    ]

    return (
        <nav className="navbar navbar-expand-lg bg-white navbar-light shadow sticky-top p-0">
            <a
                href="index.html"
                className="navbar-brand d-flex align-items-center px-4 px-lg-5"
            >
                <h2 className="m-0 text-primary">
                    <i className="fa fa-book me-3" />
                    eLEARNING
                </h2>
            </a>
            <button
                type="button"
                className="navbar-toggler me-4"
                data-bs-toggle="collapse"
                data-bs-target="#navbarCollapse"
            >
                <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
                <div className="navbar-nav ms-auto p-4 p-lg-0">

                    <Link href='/' className="nav-item nav-link active">
                        Home
                    </Link>

                    {linkNavbar.map((link, index) => (
                        <React.Fragment key={index}>


                            {/* dropdownNavbar */}
                            {link.dropdown ? (
                                <div className="nav-item dropdown">


                                    <a
                                        href="#"
                                        className="nav-link dropdown-toggle"
                                        data-bs-toggle="dropdown"
                                    >
                                        {link.name}
                                    </a>


                                    <div className="dropdown-menu fade-down m-0">
                                        {link.dropdown.map((dropdownLink, dropdownIndex) => (
                                            <Link key={dropdownIndex} href={dropdownLink.url} className="dropdown-item">
                                                {dropdownLink.name}
                                            </Link>
                                        ))}
                                    </div>

                                    
                                </div>


                            ): (

                                // By default Link of navbar                                
                                <Link key={index} href={link.url} className="nav-item nav-link">
                                    {link.name}
                                </Link>


                            )}
                        </React.Fragment>
                    ))}

                    {/* <div className="nav-item dropdown">
                        <a
                            href="#"
                            className="nav-link dropdown-toggle"
                            data-bs-toggle="dropdown"
                        >
                            Pages
                        </a>
                        <div className="dropdown-menu fade-down m-0">
                            <a href="team.html" className="dropdown-item">
                                Our Team
                            </a>
                            <a href="testimonial.html" className="dropdown-item">
                                Testimonial
                            </a>
                            <a href="404.html" className="dropdown-item">
                                404 Page
                            </a>
                        </div>
                    </div> */}
                    <a href="contact.html" className="nav-item nav-link">
                        Contact
                    </a>
                </div>
                <a href="" className="btn btn-primary py-4 px-lg-5 d-none d-lg-block">
                    Join Now
                    <i className="fa fa-arrow-right ms-3" />
                </a>
            </div>
        </nav>

    );
}

export default NavbarJa;