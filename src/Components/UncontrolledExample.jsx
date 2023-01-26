import Carousel from 'react-bootstrap/Carousel';
import slide1 from '../images/slide1.jpeg';
import slide2 from '../images/slide2.jpeg';
import slide3 from '../images/slide3.jpeg';

function UncontrolledExample() {
  return (
    <Carousel>
      <Carousel.Item>
        <img className="d-block w-100" src={slide3} alt="First slide" />
        <Carousel.Caption
          style={{ background: 'rgba(0,0,0,0.6)' }}
          className="px-4"
        >
          <h3>Study & Settle in Japan</h3>
          <p>
            We are a trusted education consultant who processes documents with
            100% accuracy and helps students to build a bright career in their
            dream country Japan.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={slide1} alt="Second slide" />

        <Carousel.Caption
          style={{ background: 'rgba(0,0,0,0.6)' }}
          className="px-4"
        >
          <h3>Visit & Tourist Visa processing</h3>
          <p>
            in more than 15 Countries We provide tourist visa support in more
            than 15 countries. In this regard, we provide all kinds of support
            to our clients, starting from visa application, preparing documents,
            and getting visas.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={slide2} alt="Third slide" />

        <Carousel.Caption
          style={{ background: 'rgba(0,0,0,0.6)' }}
          className="px-4"
        >
          <h3>Worldwide Air Ticketing</h3>
          <p>
            We have air ticketing services. We provide Ticketing and Hotel
            booking services at the lowest rates to our clients worldwide.
            Client satisfaction is our main goal.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;
