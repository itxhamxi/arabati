import React from 'react'
import './form.css';
import axios from 'axios'
import {bookings} from '../../assets/serverUrls';

const initialState = {
  firstName:"",
  lastName :'',
  emailAddress :'',
  phoneNo :'',
  takenTime :'',
  returnTime :'',
   car :'',
 specialInstructions :'',
}
class form extends React.Component {
  
  constructor(props) {
    super(props)
  
    this.state = {
        ...initialState,



         firstName:"",
         lastName :'',
         emailAddress :'',
         phoneNo :'',
         takenTime :'',
         returnTime :'',
        car :'',
        specialInstructions :'',
    }
  }
  
  
  handleChange=(e)=>{
    this.setState({[e.target.name]:e.target.value})
  }
  handleSubmit = event => {
    let formData = new FormData();
    formData.append('firstName',this.state.firstName);
    formData.append('lastName',this.state.lastName);
    formData.append('emailAddress',this.state.emailAddress);
    formData.append('phoneNo',this.state.phoneNo);
    formData.append('takenTime',this.state.takenTime);
    formData.append('returnTime',this.state.returnTime);
    formData.append('car',this.state.car);
    formData.append('specialInstructions',this.state.specialInstructions);
    event.preventDefault();
    console.log(this.state)
    
    axios.post(bookings, formData, {
    }).then(res => {



        this.setState({
            ...initialState,
         
            message:"Product added successfully"
        })
    }).catch(err=>{
        // this.setState({
        //     message:err.response ? err.response.data.error : err
        // })
        console.log("error received "+err);
    })
}
    render() {
      const {firstName,lastName,emailAddress,phoneNo,takenTime,returnTime,specialInstructions,car}=this.state
    return (
        <div className="formwrapper">
       <div className="containers">
          <h1 class="brand">Thankyou for booking with us</h1>
          <div className="wrapper animated bounceInLeft">
          <div class="company-info">
        <h3>Arabati</h3>
        {/* <ul>
          <li><i class="fa fa-road"></i> 44 Something st</li>
          <li><i class="fa fa-phone"></i> (555) 555-5555</li>
          <li><i class="fa fa-envelope"></i> test@acme.test</li>
        </ul> */}
       </div>
       <div className="contact">
       <h3>Email Us</h3>
       <form onSubmit={this.handleSubmit}>
       <p>
            <label>First Name</label>
            <input type="text" name="firstName" value={firstName} onChange={this.handleChange}/>
          </p>
          <p>
            <label>Last Name</label>
            <input type="text" name="lastName" value={lastName} onChange={this.handleChange}/>
          </p>
          <p>
            <label>Email Address</label>
            <input type="email" name="emailAddress"  value={emailAddress} onChange={this.handleChange}/>
          </p>
          <p>
            <label>Phone Number</label>
            <input type="text" name="phoneNo"  value={phoneNo} onChange={this.handleChange}/>
          </p>
          <p>
            <label>Taken Time</label>
            <input type="date" name="takenTime"  value={takenTime} onChange={this.handleChange}/>
          </p>
          <p>
            <label>Return Time</label>
            <input type="date" name="returnTime"  value={returnTime} onChange={this.handleChange}/>
          </p>
          <p>
            <label>Car</label>
            <select name="cars" id="cars"  onChange={this.handleChange}>
  <option value={car}>Volvo</option>
  <option value="saab">Saab</option>
  <option value="mercedes">Mercedes</option>
  <option value="audi">Audi</option>
</select>
          </p>
          <p class="full">
            <label>Special Instructions</label>
            <textarea name="specialInstructions" rows="5"  value={specialInstructions} onChange={this.handleChange}></textarea>
          </p>
          <p class="full">
            <button type="submit">Submit</button>
          </p>
        
       </form>
       </div>
          </div>
       </div>
       </div>
    )}
}

export default form
