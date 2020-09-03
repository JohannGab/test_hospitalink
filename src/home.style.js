import styled from 'styled-components'
import { Link } from 'react-router-dom';

const StyledHomeList = styled.div`
    text-align: center;
`
StyledHomeList.Title = styled.div`
    display: flex;
    font-size: 3rem;
    background-color: blue;
    height: 10rem;
    align-items: center;
    justify-content: center;
`

StyledHomeList.container = styled.div`
    width: 30rem;
    margin: auto;
`

StyledHomeList.TitleList = styled.p`
    font-size: 2rem;
    font-weight: bold;
    border-bottom: 1px solid #333;
    padding-bottom: 1rem;
`

StyledHomeList.changeList = styled.div`
    color: #333;
    padding-bottom: 1rem;
    padding-top: 2rem;
`

StyledHomeList.Link = styled(Link)`
    text-decoration: none;
    color: black;
    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`

export default StyledHomeList;