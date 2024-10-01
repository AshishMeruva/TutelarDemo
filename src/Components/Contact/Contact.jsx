// eslint-disable-next-line no-unused-vars
import React from 'react'
import './Contact.css'
import msgicon from '../../assets/msgicon.webp'
import mailicon from '../../assets/mailicon.png'
import callicon from '../../assets/callicon.png'
import locationicon from '../../assets/locationicon.png'
import clockicon from '../../assets/clockicon.png'

const Contact = () => {

  // const [result, setResult] = React.useState("");

  // const onSubmit = async (event) => {
  //   event.preventDefault();
  //   setResult("Sending....");
  //   const formData = new FormData(event.target);

  //   formData.append("access_key", "YOUR_ACCESS_KEY_HERE");

  //   const response = await fetch("https://api.web3forms.com/submit", {
  //     method: "POST",
  //     body: formData
  //   });

  //   const data = await response.json();

  //   if (data.success) {
  //     setResult("Form Submitted Successfully");
  //     event.target.reset();
  //   } else {
  //     console.log("Error", data);
  //     setResult(data.message);
  //   }
  // };

  return (
    <div className='contact'>
      <div className="contact-col">
        <h3>Send us a Message <img src={msgicon} alt="" /></h3>
        <p>Lorem ipsum dolor sit amet. Sit dolorum provident eum minus consequatur id possimus eveniet et sunt pariatur et voluptatem quia sed soluta numquam. Sed eaque necessitatibus et minus officiis qui explicabo fugit sed magnam voluptas.</p>
        <ul>
          <li><img src={mailicon} alt="" /> support@tutelartechlabs.com</li>
          <li><img src={callicon} alt="" /> +91 789 249 6283</li>
          <li><img src={locationicon} alt="" /> 26-27, 2nd Cross Rd, P&T Layout, Coconut Grove Layout, Ashirvad Colony, Horamavu, Bengaluru, Karnataka 560043</li>
          <li><img src={clockicon} alt="" /> 24 Hours / 7 Days Open Office time : 10 AM - 5:30 PM</li>
        </ul>
      </div>
      <div className="contact-col">
        {/* <form onSubmit={onSubmit}> */}
          <form>
          <label>Name</label>
          <input type="text" name='name' placeholder='Enter your Name' required />
          <label>Phone</label>
          <input type="tel" name="phone" placeholder='Enter your Mobile no.' required />
          <label>Email</label>
          <input type="text" name='email' placeholder='Enter your Email ID' required/>
          <label>Write your Message here</label>
          <textarea name="message" rows='6' placeholder='Enter your Message' required></textarea>
          <button type='submit' className='dark-btn'>Send Message</button>
        </form>
        {/* <span>{result}</span> */}
      </div>
    </div>
  )
}

export default Contact