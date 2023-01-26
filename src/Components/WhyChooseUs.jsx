import React from 'react';
import img3 from '../images/sec3.jpg';
import {
  MDBCard,
  MDBCardTitle,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
} from 'mdb-react-ui-kit';

export default function WhyChooseUs() {
  return (
    <div className="container">
      <div className="row my-5 py-4">
        <MDBCard>
          <MDBRow className="g-0">
            <MDBCol md="8">
              <MDBCardBody>
                <MDBCardTitle className="display-5 mb-3">
                  Why Choose Us?
                </MDBCardTitle>
                <MDBCardText>
                  Raku Foundation Limited was established with an aspiration to
                  assist Bangladeshi students who want to go to Japan for their
                  higher education and build their future careers. Raku
                  Foundation Limited is the best Japanese Language Institute in
                  Bangladesh. We are processing student visas and Job visas only
                  for Japan very sincerely. We are providing quality Japanese
                  language training for students who wish to study and build
                  their future careers in Japan. We are also providing JLPT,
                  NAT, and J-Test preparation classes for our students before
                  the Japanese Language Proficiency Test exam in Bangladesh. We
                  are also providing all kinds of support for tourist visas in
                  more than 15 countries.
                  <br />
                  <br />
                  Raku offers a full range of services to individual students.
                  We have considerable experience in dealing with the
                  complexities of the immigration process. We help to identify
                  all possible immigration options for our students. Our
                  approach to dealing with cases of our clients is very
                  professional and services are committed to be as smooth as
                  possible with the assistance of professionals. We give
                  importance to professionalism. High-quality services are
                  rendered to our valued clients. We guide you with a
                  hassle-free process. Moreover, association with
                  pre-requisities of the addmisson process and other formalities
                  is the most important concern at our point with an extensive
                  association with the reputed educational institutions in
                  Japan.
                </MDBCardText>
                <MDBCardText>
                  <small className="text-muted">Last updated 3 mins ago</small>
                </MDBCardText>
              </MDBCardBody>
            </MDBCol>
            <MDBCol md="4">
              <MDBCardImage src={img3} alt="..." fluid />
            </MDBCol>
          </MDBRow>
        </MDBCard>
      </div>
    </div>
  );
}
