import { Col, Container, Image, Row } from "react-bootstrap";
import Logo from "./assets/Logo";

const Footer = () => {
  return (
    <footer className="bg-white w-full relative overflow-hidden h-[400px] mt-48">
      <Container>
        <Row>
          <Col>
            <div className="flex justify-center  items-center gap-4 relative top-[325px] sm:top-[300px] py-2 z-10">
              <Logo color="white" className="w-48 sm:w-auto" />{" "}
              <p className="mt-2">&copy; {new Date().getFullYear()}</p>
            </div>
          </Col>
        </Row>
      </Container>
      <Image
        src="/footer.png"
        alt="footer-art"
        className="w-full absolute -bottom-0 md:-bottom-[100px]  lg:-bottom-[200px] xl:-bottom-[300px] z-0"
      />
    </footer>
  );
};

export default Footer;
