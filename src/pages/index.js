import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from 'gatsby-image'
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Container, Row, Col } from 'reactstrap';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const indexHeader = `Bringing fans and<br />boxers together`;



const IndexPage = () => {

  const data = useStaticQuery(graphql`
  query HomepageQuery {
    comingsoon: file(absolutePath: { regex: "/counterpunch-coming-soon4.png/" }) {
      childImageSharp {
        fluid(maxWidth: 800, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    eltitan: file(absolutePath: { regex: "/logotitanOPT.png/" }) {
      childImageSharp {
        fluid(maxWidth: 300, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    mockup1: file(absolutePath: { regex: "/mockup-app-principal.png/" }) {
      childImageSharp {
        fluid(maxWidth: 800, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }  
    mockup2: file(absolutePath: { regex: "/mockup-approach.png/" }) {
      childImageSharp {
        fluid(maxWidth: 800, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    } 
    mockup3: file(absolutePath: { regex: "/mockup-lifestyle.png/" }) {
      childImageSharp {
        fluid(maxWidth: 800, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }  
    mockup4: file(absolutePath: { regex: "/mockup-principal-2.png/" }) {
      childImageSharp {
        fluid(maxWidth: 800, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    } 
    mockup5: file(absolutePath: { regex: "/mockup-round.png/" }) {
      childImageSharp {
        fluid(maxWidth: 800, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    } 
    mockup6: file(absolutePath: { regex: "/mockup-splash-principal.png/" }) {
      childImageSharp {
        fluid(maxWidth: 800, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    } 
    mockup7: file(absolutePath: { regex: "/mockup-splash-round.png/" }) {
      childImageSharp {
        fluid(maxWidth: 800, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    } 
    mockup8: file(absolutePath: { regex: "/mockup-splash-secundario.png/" }) {
      childImageSharp {
        fluid(maxWidth: 800, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    } 
    mockup9: file(absolutePath: { regex: "/mockup-support.png/" }) {
      childImageSharp {
        fluid(maxWidth: 800, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }  
  }
  `)

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    centerPadding: "0",
    centerMode: true,
    autoplay:true,
    className: "center",
    responsive: [
      {
        breakpoint: 1560,
        settings: {
          slidesToShow:5
        }
      },
      {
        breakpoint: 1100,
        settings: {
          slidesToShow:3
        }
      }
  ]
  };

  const appImages = [
    data.mockup1.childImageSharp.fluid,
    data.mockup2.childImageSharp.fluid,
    data.mockup3.childImageSharp.fluid,
    data.mockup4.childImageSharp.fluid,
    data.mockup5.childImageSharp.fluid,
    data.mockup6.childImageSharp.fluid,
    data.mockup7.childImageSharp.fluid,
    data.mockup8.childImageSharp.fluid,
    data.mockup9.childImageSharp.fluid
  ];

  return(

    <Layout header="tall" headerTitle={indexHeader}>
      <SEO title="Home" />

      <Container>
        <Row className="pt-5">
          <Col lg={{size:"5", order:"1"}} xs={{size: "12", order:"2"}}>
            <h2>COUNTERPUNCH XP</h2>
            <p className="lead"><em>Is a Digital Brand Development Platform for Baseball Players. Its roster of athletes includes Active Players as well as Legends of the Game. PFXP's mission is to bring fans closer to their favorite player.</em></p>
            <p>In an era where Content is The Castle and the Audience is the King, we have created an Athlete Engagement Platform where Fans can find all the authentic content, relevant information and day to day perspective of the favorite Players in the game.</p>
            <p><Link to="/team" className="btn btn-primary">Our Team</Link></p>
          </Col>
          <Col lg={{offset:"1", size:"6", order:"2"}} xs={{size:"12", offset:"0", order:"1"}}>
            <Img fluid={data.comingsoon.childImageSharp.fluid} />
          </Col>
        </Row>
      </Container>

      <div className="hp-app text-center pb-5 pt-5">

            <h2 className="text-uppercase">App Design</h2>
            <p><em>CounterPunchXP has all the exclusive content of your favorite athletes.</em></p>

            <div className="slick-container text-center">

              <Slider {...settings}>
                
                  {appImages.map((value, index) => {
                    return(
                      <div>
                        <Img fluid={value} style={{minWidth:"256px",maxWidth:"256px", display:"inline-block"}} />
                      </div>
                    )

                  })}

              </Slider>

            </div>
      </div>

      <p className="text-center"><small><em>Images are for illustrative purposes only.</em></small></p>

      <Container>
        <Row className="pt-5 pb-5">
          <Col xs="12" className="text-center">
            <h2 className="text-uppercase">Download Your Favorite Player's App</h2>
            <p><Link to="/players"><Img fluid={data.eltitan.childImageSharp.fluid} style={{minWidth: '200px', maxWidth:'200px', display:'inline-block'}} /></Link></p>
          </Col>
        </Row>
      </Container>
      
    </Layout>


  )

}

export default IndexPage
