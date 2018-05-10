import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";

import Header from "../components/Header";
import "./index.css";

const TemplateWrapper = ({ children, data }) => (
  <div>
    <Helmet
      title="Centering Now"
      meta={[
        { name: "Centering Now Blog and Events", content: "Centering Now Blog and Events" },
        { name: "keywords", content: "Centering Prayer, Meditation, Life Coaching" }
      ]}
    />
    <Header data={data} />
    <div
      style={{
        margin: "0 auto",
        maxWidth: 960,
        padding: "0px 1.0875rem 1.45rem",
        paddingTop: 0
      }}
    >
      {children()}
    </div>
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;

export const query = graphql`
  query LayoutQuery {
    site {
      siteMetadata {
        title
        desc
      }
    }
    background: imageSharp(id: { regex: "/dropInWater2000x1500_opac40.jpg/" }) {
      sizes(maxWidth: 1240) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`;
