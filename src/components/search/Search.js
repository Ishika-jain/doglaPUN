import React from "react";
import "./Search.css";

import bookmydoc from "../../assets/bookmydoc.png";

function Search() {
  return (
    <div name="book" className="search">
      <div className="container">
        <div className="left">
          <h2>BOOK AN APPOINTMENT NOW</h2>
          <p>
            Book my doc presents you an easy way of dealing with any of your
            health problems by booking an appointment with the doctors best in
            such feilds, its more accessible.There are several ways to reach out
            to a doctor without the need to visit a hospital or clinic, all
            thanks to technology. With the online facility available, doctor
            consultations have become easier, which can help you get the right
            health care. Just simply select the date and time checking
            availabilities and book and it'll be done. It's that simple.
          </p>
          <div className="search-col-2">
            <div className="box">
              <div>
                <img src={bookmydoc} alt="/" style={{ marginRight: "1rem" }} />
              </div>
              <div>
                <h3>Easy book your appointments</h3>
                <p>just by a few clicks</p>
              </div>
            </div>
            <div className="box">
              <div>
                <h3>Deals with all types of health issues</h3>
                <p>ALL-INCLUSIVE COMPANY FOR YOUR CARE</p>
                <button>View all Doctors</button>
              </div>
            </div>
          </div>
        </div>
        <div className="right">
          <div className="promo">
            <h4 className="save">GET AN ADDITIONAL 10% OFF</h4>
            <p className="timer">On your first consulation</p>
            <p className="offers">VIEW ALL CURRENT OFFERS</p>
          </div>
          <form>
            <div className="input-wrap">
              <label id="symp1">Symptoms 1</label>
              <select>
                <option value="1">Shivering</option>
                <option value="2">Itching</option>
                <option value="3">Brain Tumour</option>
                <option value="4">Ligament Tear</option>
                <option value="5">Fever</option>
                
              </select>
              <label id="symp2">Symptoms 2</label>
              <select>
              <option value="1">Chest Pain</option>
                <option value="2">Skin Rash</option>
                <option value="3">Spinal Pain</option>
                <option value="4">Osteoarthritis</option>
                <option value="5">Cough</option>
                
              </select>
              <label id="symp3">Symptoms 3</label>
              <select>
              <option value="1">Breathlessness</option>
                <option value="2">Acne</option>
                <option value="3">Alzehimers</option>
                <option value="4">Knee Pain</option>
                <option value="5">Head ache</option>
                
              </select>
              <label id="symp4">Symptoms 4</label>
              <select>
              <option value="1">Dizziness</option>
                <option value="2">Skin Burn</option>
                <option value="3">Brain Stroke</option>
                <option value="4">Joint Pain</option>
                <option value="5">Stomach ache</option>
                
              </select>
              <br></br>
              <label >Disease</label>

              <input type="text" id="diseaseName"></input>
              <label >DoctorName</label>
               {/* <select id="doctorData">
                <option value="1" ></option>
                <option value="2" id="docdata2"></option> 
                 
                <option value="3">Dr Ishika Reddy</option>
                <option value="4">Dr Dheeraj Gangadhar</option>
                <option value="5">Dr Raj Singh </option>
                <option value="6">Dr Rohan Mehra</option>
                <option value="7">Dr Swagath Mishra</option> 
              </select>  */}
              
              <ul id="#doctorData">
              </ul>
            </div>
            <div className="date">
              <div className="input-wrap">
                <label>Date</label>
                <input type="date" />
              </div>
              <div className="input-wrap">
                <label>Time</label>
                <input type="time" />
              </div>
            </div>
            <button id="myAnchor">Book Now</button>
          </form>
        </div>
      </div>
    </div>
  );
}

// document.getElementById("myAnchor").addEventListener("click", function(event){
//   event.preventDefault()
//   alert("YOUR SLOT IS BOOKED! ")
// });
export default Search;
