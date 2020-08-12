import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from 'gatsby-image'
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Container, Row, Col } from 'reactstrap';

const PlayersPage = () => {

  const data = useStaticQuery(graphql`
  query PlayersPageQuery {
    comingsoon: file(absolutePath: { regex: "/comingsoonpopfly.jpg/" }) {
      childImageSharp {
        fluid(maxWidth: 800, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    logojm: file(absolutePath: { regex: "/logojm.png/" }) {
      childImageSharp {
        fluid(maxWidth: 300, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }  
    apple: file(absolutePath: { regex: "/store_apple.png/" }) {
      childImageSharp {
        fluid(maxWidth: 300, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }  
    google: file(absolutePath: { regex: "/store_google.png/" }) {
      childImageSharp {
        fluid(maxWidth: 300, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }   
  }
  `)

  return(

    <Layout header="short" headerTitle="Our Boxers">
      <SEO title="Our Boxers" />

      <Container>
        <Row className="pt-5 pb-5">
          <Col md={{size:"10", offset:"1"}} lg={{size:"8", offset:"2"}}>
            <Row>
              <Col xs={{size:"6", offset:"3"}} md={{size:"4", offset:"1"}} className="text-center">
                <p><Img fluid={data.logojm.childImageSharp.fluid} style={{width:'100%', display:'inline-block'}} /></p>
              </Col>
              <Col md="6" className="text-center">
                <h2 className="text-uppercase">Jaime Munguía</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <p>
                  <a href="https://apps.apple.com/us/app/titan23/id1454549170"><Img fluid={data.apple.childImageSharp.fluid} style={{minWidth:'150px', display:'inline-block'}} /></a>
                  <a href="https://play.google.com/store/apps/details?id=com.titan23"><Img fluid={data.google.childImageSharp.fluid} style={{minWidth:'150px',display:'inline-block'}} /></a>
                </p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
      
    </Layout>


  )

}

export default PlayersPage
