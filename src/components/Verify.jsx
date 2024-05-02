import React from 'react'
import { Container, Row, Col, Form, InputGroup, FormControl, Button } from 'react-bootstrap'; // Import necessary components

const Verify = () => {
    return (
        <section className="px-2 py-32 bg-white md:px-0">
        <Container>
          <Row className="justify-content-md-center">
            <Col md={8} lg={6}>
              <h2 className="text-center text-4xl font-extrabold leading-10 tracking-tight text-indigo-600">
                <span className="block">Verifiy the owner of a</span>
                <span className="relative inline-block mt-3 text-indigo-600">land asset</span>
              </h2>
              <Form className="mt-12">
                <InputGroup className="rounded-full border">
                  <FormControl
                    type="text"
                    name="landId"
                    placeholder="Land ID"
                    aria-label="Land ID"
                    aria-describedby="landIdInput"
                    className="w-full h-12 px-6 py-2 font-medium text-indigo-800 focus:outline-none rounded-l-full bg-indigo-50 border border-gray-300"
                  />
                  <Button variant="primary" className="rounded-r-full">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" clipRule="evenodd" d="M15.5 14C14.12 14 13 12.88 13 11.5S14.12 9 15.5 9 18 10.12 18 11.5 16.88 14 15.5 14ZM19.31 18.9C19.75 18.21 20 17.38 20 16.5C20 14 18 12 15.5 12S11 14 11 16.5 13 21 15.5 21C16.37 21 17.19 20.75 17.88 20.32L21 23.39L22.39 22L19.31 18.9M5 20V12H2L12 3L22 12H20.18C19.33 11.11 18.23 10.47 17 10.18L12 5.69L7 10.19V18H9.18C9.35 18.72 9.64 19.39 10.03 20H5Z" fill="currentColor" />
                    </svg>
                    <span className="ml-1">Search</span>
                  </Button>
                </InputGroup>
              </Form>
              <p className="text-center text-sm text-gray-500 mt-2">
                Provide land unique ID for owner verification.
              </p>
            </Col>
          </Row>
        </Container>
      </section>
    )
}

export default Verify