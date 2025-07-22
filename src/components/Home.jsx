// Home è un componente che racchiuderà la parte centrale della landing page
// in particolare un carosello di BS e una sezione recensioni

import { Container, Row, Col, Carousel } from 'react-bootstrap'
import pastasciutte from '../data/menu.json'

const Home = () => {
  return (
    <Container>
      <Row className="justify-content-center mt-5">
        <Col xs={12} className="text-center">
          <h1>Benvenuto nel nostro ristorante!</h1>
          <h3>Siamo famosi per le pastasciutte!</h3>
        </Col>
      </Row>
      <Row className="justify-content-center mt-5">
        <Col xs={12} md={8} lg={6}>
          <Carousel>
            {pastasciutte.map((pasta) => {
              return (
                // la i (secondo parametro
                // della funzione dentro map)
                // va utilizzata come "key" SOLO come ULTIMA SPIAGGIA
                <Carousel.Item key={pasta.id}>
                  <img
                    className="img-fluid"
                    src={pasta.image}
                    alt={'immagine di' + pasta.name}
                  />
                  <Carousel.Caption>
                    <h3>{pasta.name}</h3>
                    <p>{pasta.description}</p>
                  </Carousel.Caption>
                </Carousel.Item>
              )
            })}
          </Carousel>
        </Col>
      </Row>
    </Container>
  )
}

export default Home
