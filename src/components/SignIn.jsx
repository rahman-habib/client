import React from 'react';
import { Container, Row, Col, Form, InputGroup, FormControl, Button } from 'react-bootstrap'; // Import necessary components
import OffCanvas from './OffCanvas';

const SignIn = () => {
  return (
    <section className="px-2 py-32 bg-white md:px-0">
      <Container items-center max-w-6xl px-8 mx-auto px-5>
        <Row>
            {/* <div className='w-50'>

            </div> */}
          <Col sm={4} className="d-flex flex-column justify-content-center align-items-center">
            <div className="text-center px-10 my-20 lg:px-16 lg:my-0">
              <div className="text-start tracking-tight lg:max-w-3xl">
                <p className="mb-2 font-medium text-gray-700 text-uppercase">Verify Land</p>
                <h2 className="text-5xl font-bold text-gray-900 xl:text-6xl">Land verification and provenance</h2>
                <p className="text-2xl text-gray-700">
                  A powerful platform where landowners and buyers can securely verify land ownership with ease, knowing that their data is stored on an immutable ledger.
                </p>
                <a href="/" className="btn btn-primary">Learn more</a>
              </div>
            </div>
          </Col>
          <Col md={12} lg={6}>
            <div className="w-full bg-white lg:w-6/12 xl:w-5/12 flex flex-col justify-center">
              <div className="flex flex-col items-start justify-start w-full p-10 lg:p-16 xl:p-24">
                <h4 className="text-3xl font-bold">Signin</h4>
                <p className="text-sm text-gray-500">
                  or, if you don't have an account <a href="/signup" className="text-blue-600 underline">sign up</a>
                </p>
                <div className="relative w-full mt-10 space-y-8">
                  <div className="relative">
                    <Button variant="primary" className="w-full px-5 py-4 text-lg font-medium text-center text-white flex justify-center items-center">
                      <span className="mr-2">Sign in with metamask</span>
                      <img className="w-8 h-8" src="https://upload.wikimedia.org/wikipedia/commons/3/36/MetaMask_Fox.svg" alt="metamask-logo" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default SignIn;
