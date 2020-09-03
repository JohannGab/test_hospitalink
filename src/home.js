import React from "react"
import { connect } from "react-redux"
import StyledHomeList from './home.style'
import "./components/Article/Article.css"


const Home = ({articles}) => {

    return (
        <StyledHomeList>
            <StyledHomeList.Title>LISTE DE TÂCHES</StyledHomeList.Title>
            <StyledHomeList.changeList>
                        <StyledHomeList.Link to="/details">
                            <span style={{color: "blue"}}>Ajouter / Modifier</span> ou <span style={{color: "red"}}>Supprimer</span></StyledHomeList.Link>
                    </StyledHomeList.changeList>
                    <StyledHomeList.container>
                {articles.map(article => (
                    <StyledHomeList.TitleList>{article.title}</StyledHomeList.TitleList>
                    ))}
                    </StyledHomeList.container>
        </StyledHomeList>
)}


const mapStateToProps = state => {
    return {
        articles: state.articles,
    }
}

export default connect(mapStateToProps)(Home);