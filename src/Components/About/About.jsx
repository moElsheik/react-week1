import React from 'react'

export default function About() {
  return (
    <div className='bg-success'>
        <div class="  pt-5 mt-5 ">
      <h2 class=" pt-5 text-center" >ABOUT</h2>
      <div class=" container my-5 ">
      <div className="  d-flex justify-content-center  align-items-center m-4">
        <div className="HLine bg-black"></div>
        <i  className="fa-solid fa-star text-black"></i>
        <div className="HLine bg-black"></div>
      </div>
        <div class=" row p-5 w-75 m-auto  ">
            <div class=" col-6 ">
              <div>
                <p>
                    Freelancer is a free bootstrap theme created by Route. The download
                    includes the complete source files including HTML, CSS, and
                    JavaScript as well as optional SASS stylesheets for easy
                    customization.
                  </p>
              </div>
            </div>
            <div class="  col-6 ">
              <div>
                <p >
                    You can create your own custom avatar for the masthead, change the
                    icon in the dividers, and add your email address to the contact form
                    to make it fully functional!
                  </p>
              </div>
            </div>
          </div>
      </div>
      
    </div>
    </div>
  )
}
