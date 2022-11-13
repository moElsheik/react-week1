import React, { useState } from "react";
import "./Portfolio.css";
import cabin from '../../img/cabin.png'
import cake from '../../img/cake.png'
import circus from '../../img/circus.png'
import game from '../../img/game.png'
import safe from '../../img/safe.png'
import submarine from '../../img/submarine.png'


export default function Portfolio() {

   const [styleDiv , setstyleDiv ] = useState("d-none");
   const [imgDiv  , setimgDiv  ] = useState('');
   const[hdiv  , sethDiv] = useState('');

   function change (getStyle , getImage ,gethDiv ) {
    setstyleDiv(getStyle);
    setimgDiv(getImage)
    sethDiv(gethDiv)
   }
   
  return ( <>
    <div className="Portfolio text-center mt-5 ">
      <h2>Portfolio </h2>
      <div className="  d-flex justify-content-center  align-items-center m-4">
        <div className="HLine bg-black"></div>
        <i  className="fa-solid fa-star text-black"></i>
        <div className="HLine bg-black"></div>
      </div>

      <div className="container text-center">
        <div className="row g-5 pb-5">
          <div className="col-4 ">
            <div className=" innerDiv position-relative" >
               <img className=" w-100 rounded-3" src={cabin} alt="photo" />
               <div onClick={() => {return change ('position-absolute' , cabin , 'LOG CABIN' )} } className="   capt position-absolute top-0 start-0 bottom-0 end-0  ">+</div>
            </div>
          </div>
          <div className="col-4 ">
            <div className="  innerDiv position-relative" >
               <img className=" w-100 rounded-3 " src={cake} alt="photo" />
               <div onClick={() => {return change ('position-absolute' , cake , 'TASTY CAKE' )} } className=" capt position-absolute top-0 start-0 bottom-0 end-0  ">+</div>
            </div>
          </div>
          <div className="col-4 ">
            <div className="  innerDiv position-relative" >
               <img className=" w-100 rounded-3" src={circus} alt="photo" />
               <div onClick={() => {return change ('position-absolute' , circus , 'CIRCUS TENT' )} } className=" capt position-absolute top-0 start-0 bottom-0 end-0  ">+</div>
            </div>
          </div>
          <div className="col-4  ">
            <div className="  innerDiv position-relative" >
               <img className=" w-100 rounded-3" src={game} alt="photo" />
               <div onClick={() => {return change ('position-absolute' , game , 'CONTROLLER' )} }  className=" capt position-absolute top-0 start-0 bottom-0 end-0  ">+</div>
            </div>
          </div>
          <div className="col-4 ">
            <div className="  innerDiv position-relative" >
               <img className=" w-100 rounded-3" src={safe} alt="photo" />
               <div onClick={() => {return change ('position-absolute' , safe , 'LOCKED SAFE' )} } className=" capt position-absolute top-0 start-0 bottom-0 end-0  ">+</div>
            </div>
          </div>
          <div className="col-4 ">
            <div className="  innerDiv position-relative" >
               <img className=" w-100 rounded-3" src={submarine} alt="photo" />
               <div onClick={() => {return change ('position-absolute' , submarine , 'SUBMARINE' )} } className=" capt position-absolute top-0 start-0 bottom-0 end-0  ">+</div>
            </div>
          </div>
          
        </div>
      </div>

      <div onClick={() => {return change ('d-none' , '' , '' )} } className ={styleDiv  +"  top-0 start-0 w-100  bg-black bg-opacity-50 imagShow  "}>
      <div className=" container  bg-white d-flex justify-content-center mt-5 mb-5 rounded-3 position-relative ">
      <i onClick={() => {return change ('d-none' , '' , '' )} } className="fa-solid fa-xmark position-absolute top-0 end-0 m-3 fs-1 fw-bolder text-success"></i>
      <div className="  w-75 px-5">
        <h2 className=" mt-5 fw-bolder " >{hdiv}</h2>
        <div className="  d-flex justify-content-center  align-items-center m-4">
        <div className="HLine bg-black"></div>
        <i className="fa-solid fa-star text-black"></i>
        <div className="HLine bg-black"></div>
      </div>
      
      <img className="my-5  rounded-3 w-100" src={imgDiv} alt="" />
      <p className=" mb-5 ">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque laborum
        quae atque voluptatibus necessitatibus debitis vero incidunt distinctio
        recusandae dolorem, tempora libero enim nemo alias nihil, facilis ea
        odio. Consequatur?
      </p>
     
      <button onClick={() => {return change ('d-none' , '' , '' )} } className=" btn btn-success mb-5 py-2 px-3"><i  className="fa-solid fa-xmark me-1"></i> Close Window</button>
      </div>
      </div>
    </div>
    </div>

    
    
   
    </>
  );
}
