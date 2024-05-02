import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import OffCanvas from './OffCanvas'
function HeroSection() {
  return (
    <section className="px-2 py-32 bg-white md:px-0">
      <Container items-center max-w-6xl px-8 mx-auto px-5>
        <Row>
          <Col md={12} lg={6}>
            <div className="w-full pb-6 space-y-6 sm:max-w-md lg:max-w-lg md:space-y-4 lg:space-y-8 xl:space-y-9 sm:pr-5 lg:pr-0 md:pb-0">
              <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-4xl lg:text-5xl xl:text-6xl">
                <span className="block xl:inline">Blockchain-based Land</span>
                <span className="block text-indigo-600 xl:inline"> Verification System</span>
              </h1>
              <p className="mx-auto text-base text-gray-500 sm:max-w-md lg:text-xl md:max-w-3xl">
                Securely verify, register and transfer land ownership with ease - Powered by Ethereum Smart Contract
              </p>
              <div className="relative flex flex-col sm:flex-row sm:space-x-4">
                <Button variant="indigo" size="lg" href="/signin">
                  {/* Sign In <i className="ms-2 fas fa-arrow-right"></i> */}
                  <>
                    <OffCanvas key={1} placement={"end"} name={"SignIn"} />
                  </>
                </Button>
              </div>
            </div>
          </Col>
          <Col md={12} lg={6}>
            <div className="w-full h-auto overflow-hidden rounded-md shadow-xl sm:rounded-xl">
              <img src="./assets/hero.jpg" alt="Hero Image" className="img-fluid" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default HeroSection;
