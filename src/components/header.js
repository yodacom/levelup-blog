import React from 'react'
import Link from 'gatsby-link'
import styled from "styled-components";

import logo from '../images/WebinarLogo.png';

const HeaderWrapper = styled.div`
  background: #ebaf68;
  margin-bottom: 1.45rem;
  h1 {
    img {
      height: 150px;
    }
  }

`;

const HeaderContainer = styled.div`
  margin: 0 auto;
  max-Width: 960px;
  padding: 1.45rem 1.0875rem;
`;

const Header = ({ data }) => (
  <HeaderWrapper>
    <HeaderContainer>
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          <img src={logo} alt="Centering Way Logo" />

        </Link>
        <p>{data.site.siteMetadata.title}</p>
        <p>{data.site.siteMetadata.desc}</p>
      </h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="about">About</Link>
          </li>
        </ul>
      </nav>
    </HeaderContainer>

  </HeaderWrapper >
)

export default Header
