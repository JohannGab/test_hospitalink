import styled from 'styled-components'
import { Link } from 'react-router-dom';

const StyledNav = styled.nav`
    padding-top: 1rem;
`

StyledNav.Link = styled(Link)`
    text-decoration: none;
    font-size: 1.5rem;
    padding: 2rem;
    color: black;
    &:hover {
        color: blue;
    }
    &:focus, &:visited, &:link, &:active {
        text-decoration: none;
    }
`

export default StyledNav;