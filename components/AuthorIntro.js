
import { Row, Col, Media, Image } from 'react-bootstrap';

const AuthorIntro = () =>
  <Row>
    <Col md="8">
      {/* AUTHOR INTRO STARTS */}
      <Media className="mb-4 admin-intro">
        <Image
          roundedCircle
          width={64}
          height={64}
          className="mr-3"
          src="https://photos.google.com/search/_cAF1QipOCz752ER-PKAyf0suk60g1nMWpbcXTxUQ_/photo/AF1QipO-Fs69LWECd6aiE5UqG-7BH2qLUY0A6LNv8ftT"
          alt="Generic placeholder"
        />
        <Media.Body>
          <h5 className="font-weight-bold mb-0">Hello Friends,</h5>
          <p className="welcome-text">
          My name is Mehrdad Yazdani. I am a proactive and diligent Full Stack Developer. Expertise in object-oriented programming 
          technologies such as Python, JavaScript, and REACT. Strong ability to learn new technologies quickly and bring a critical eye to new projects.
          </p>
        </Media.Body>
      </Media>
      {/* AUTHOR INTRO ENDS */}
    </Col>
  </Row>

export default AuthorIntro;
