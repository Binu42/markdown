import React from 'react';

function About() {
  return (
    <div className='container' style={{ "marginTop": "80px" }}>
      <div className="row my-4">
        <div className="col-md-4">
          <div className="d-flex justify-content-center align-items-center" style={{ "height": "400px" }}>
            <img src="https://avatars3.githubusercontent.com/u/45959932?s=400&u=c45629c87cad71dcdc8d2d86808c9c52ec1fc68b&v=4" alt="" className='rounded-circle img-fluid' style={{ 'width': '300px' }} />
          </div>

        </div>
        <div className="col-md-8 mt-4">
          <h4 className="text-center text-success">ABOUT ME</h4>
          <p className='text-dark about-details text-justify'>Hey, this is About me, so I have to say something about myself. Sometimes it is hard to introduce yourself because you know yourself so well that you do not know where to start with. Let me give a try to see what kind of image you have about me through my self-description. I hope that my impression about myself and your impression about me are not so different. Here it goes. I am Binu Kumar 3<sup>rd</sup> Year Computer Science undergraduate of JSS Science and Technology University, Mysore, karnatka. I am interested in Web Development, Mobile Development for now. My native place is Chapra, Bihar. </p>
        </div>
      </div>
    </div>
  )
}

export default About