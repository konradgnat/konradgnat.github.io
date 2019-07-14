import React from "react";
import Helmet from "react-helmet";
import config from "../../data/SiteConfig";
import "./index.css";
import 'materialize-css/dist/css/materialize.min.css';

export default class MainLayout extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <div>
        <Helmet>
          <meta name="description" content={config.siteDescription} />
          <link
            href="https://fonts.googleapis.com/icon?family=Material+Icons"
            rel="stylesheet"
          />
          <link
            rel="stylesheet"
            href="https://unpkg.com/tachyons@4.10.0/css/tachyons.min.css"
          />
        </Helmet>
        <nav className="indigo lighten-5">
          <div className="nav-wrapper container">
            <ul className="left">
              <li><a className="black-text" href="/">Home</a></li>
              <li><a className="black-text" href="/about">About</a></li>
              <li><a className="black-text" href="/portfolio">Portfolio</a></li>
              <li><a className="black-text" href="/blog">Blog</a></li>
            </ul>
          </div>
        </nav>

        {children}
      </div>
    );
  }
}