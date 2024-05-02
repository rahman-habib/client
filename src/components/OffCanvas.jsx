import { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Container, Row, Col, Button } from "react-bootstrap";

function OffCanvas({ name, ...props }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow} className="me-2">
        {name}
      </Button>
      <Offcanvas show={show} onHide={handleClose} {...props}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Land Verification & Provenance</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
            
          <section className="offcanvas-content flex flex-col lg:flex-row justify-between">
            <Row>
              <Col>
            <div className="offcanvas-left lg:w-6/12 xl:w-7/12 bg-gradient-to-r from-white via-white to-gray-100 p-10 lg:p-16 xl:p-24">
              <div className="flex flex-col items-start space-y-8 tracking-tight lg:max-w-3xl">
                <div className="relative">
                  <h2 className="text-5xl font-bold text-gray-900 xl:text-6xl">
                    Verify Land Ownership with Ease
                  </h2>
                </div>
                <p className="text-2xl text-gray-700">
                  Our secure platform empowers landowners and buyers to verify ownership seamlessly. Leverage an immutable ledger for data protection.
                </p>
                <a
                  href="/"
                  className="inline-block px-8 py-5 text-xl font-medium text-center text-white transition duration-200 bg-indigo-600 rounded-lg hover:bg-blue-700 ease"
                  data-primary="blue-600"
                  data-rounded="rounded-lg"
                >
                  Learn More
                </a>
              </div>
            </div>
            </Col>
            <Col>
            <div className="offcanvas-right lg:w-6/12 xl:w-5/12 bg-white flex flex-col justify-center items-start p-10 lg:p-16 xl:p-24">
              <h4 className="w-full text-3xl font-bold">Sign In</h4>
              <p className="text-sm text-gray-500">
                Don't have an account?
                <a href="/signup" className="text-blue-600 underline">
                  Sign Up
                </a>
              </p>
              <div className="relative w-full mt-10 space-y-8">
                <div className="relative">
                  <Button
                    className="inline-block w-full px-5 py-4 text-lg font-medium text-center text-white transition duration-200 bg-indigo-600 rounded-lg hover:bg-blue-700 ease flex justify-center items-center"
                    data-primary="blue-600"
                    data-rounded="rounded-lg"
                  >
                    <span className="mr-2">Sign in with Metamask</span>
                    <img
                      className="w-8 h-8"
                      src="https://upload.wikimedia.org/wikipedia/commons/3/36/MetaMask_Fox.svg"
                      alt="Metamask logo"
                    />
                  </Button>
                </div>
              </div>
            </div>
            </Col>
            </Row>
          </section>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default OffCanvas;