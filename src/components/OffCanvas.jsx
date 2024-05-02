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
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <div id="app" data-v-app="">
      <section className="w-full bg-white">
        <Container fluid className="mx-auto max-w-7xl">
          <Row className="flex flex-col lg:flex-row m-h-screen">
            <Col className="relative w-full bg-cover lg:w-6/12 xl:w-7/12 bg-gradient-to-r from-white via-white to-gray-100">
              <div className="relative flex flex-col items-center justify-center w-full h-full px-10 my-20 lg:px-16 lg:my-0">
                <div className="flex flex-col items-start space-y-8 tracking-tight lg:max-w-3xl">
                  <div className="relative">
                    <p className="mb-2 font-medium text-gray-700 uppercase">
                      verify land
                    </p>
                    <h2 className="text-5xl font-bold text-gray-900 xl:text-6xl">
                      Land verification and provenance
                    </h2>
                  </div>
                  <p className="text-2xl text-gray-700">
                    A powerful platform where landowners and buyers can securely verify land ownership with ease, knowing that their data is stored on an immutable ledger.
                  </p>
                  <a href="/" className="inline-block px-8 py-5 text-xl font-medium text-center text-white transition duration-200 bg-indigo-600 rounded-lg hover:bg-blue-700 ease" data-primary="blue-600" data-rounded="rounded-lg">
                    Learn more
                  </a>
                </div>
              </div>
            </Col>
            <Col className="w-full bg-white lg:w-6/12 xl:w-5/12 flex flex-col justify-center">
              <div className="flex flex-col items-start justify-start w-full p-10 lg:p-16 xl:p-24">
                <h4 className="w-full text-3xl font-bold">Signin</h4>
                <p className="text-sm text-gray-500">
                  or, if you don't have an account
                  <a href="/signup" className="text-blue-600 underline" data-primary="blue-600">
                    sign up
                  </a>
                </p>
                <div className="relative w-full mt-10 space-y-8">
                  <div className="relative">
                    <Button className="inline-block w-full px-5 py-4 text-lg font-medium text-center text-white transition duration-200 bg-indigo-600 rounded-lg hover:bg-blue-700 ease flex justify-center items-center" data-primary="blue-600" data-rounded="rounded-lg">
                      <span className="mr-2">Sign in with metamask</span>
                      <img className="w-8 h-8" src="https://upload.wikimedia.org/wikipedia/commons/3/36/MetaMask_Fox.svg" alt="metamask-logo" />
                    </Button>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <script type="module" src="/src/main.ts"></script>
    </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
export default OffCanvas;

// function Example() {
//   return (
//     <>
//       {['start', 'end', 'top', 'bottom'].map((placement, idx) => (
//         <OffCanvas key={idx} placement={placement} name={placement} />
//       ))}
//     </>
//   );
// }

// render(<Example />);