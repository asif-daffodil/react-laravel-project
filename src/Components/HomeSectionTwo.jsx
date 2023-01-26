import React from 'react';
import img1 from '../images/aboutUs1.jpeg';
import img2 from '../images/aboutUs2.jpeg';

const HomeSectionTwo = () => {
  return (
    <div className="container bg-primary text-white rounded">
      <div className="row my-5 py-4 shadow rounded border">
        <div className="col-md-12 display-5 text-center py-3">About Us</div>
        <div className="col-md-4">
          <img src={img1} className="img-fluid img-thumbnail" alt="" />
        </div>
        <div className="col-md-4 fst-italic fs-5 text-center">
          <small className="text-center">
            We are Raku Group Not just tourist visa and student visa in japan We
            provide help to find jobs in Japan and to complete other relevant
            procedures. We are the most trusted visa processing consultant, car
            importer and affiliate marketing group of company. We are currently
            only dealing/working with Student and Job visas in Japan. Moreover,
            We provide tourist visa support to our clients in more than 15
            countries. We import recondition cars and sell them in Bangladesh.
          </small>
        </div>
        <div className="col-md-4">
          <img src={img2} alt="" className="img-fluid img-thumbnail" />
        </div>
      </div>
    </div>
  );
};

export default HomeSectionTwo;
