const inputParsers = {
    date(input) {
      const split = input.split('/');
      const day = split[1]
      const month = split[0];
      const year = split[2];
      return `${year}-${month}-${day}`;
    },
    uppercase(input) {
      return input.toUpperCase();
    },
    number(input) {
      return parseFloat(input);
    },
  };
  
  class ShakingError extends React.Component {
      constructor() { super(); this.state = { key: 0 }; }
  
      componentWillReceiveProps() {
      // update key to remount the component to rerun the animation
        this.setState({ key: ++this.state.key });
    }
    
    render() {
        return <div key={this.state.key} className="bounce">{this.props.text}</div>;
    }
  }
  
  class MyForm extends React.Component {
    constructor() {
      super();
      this.state = {};
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleSubmit(event) {
      event.preventDefault();
      if (!event.target.checkValidity()) {
          this.setState({
          invalid: true,
          displayErrors: true,
        });
        return;
      }
      const form = event.target;
      const data = new FormData(form);
  
      for (let name of data.keys()) {
        const input = form.elements[name];
        const parserName = input.dataset.parse;
        console.log('parser name is', parserName);
        if (parserName) {
          const parsedValue = inputParsers[parserName](data.get(name))
          data.set(name, parsedValue);
        }
      }
      
      this.setState({
          res: stringifyFormData(data),
        invalid: false,
        displayErrors: false,
      });
  
      // fetch('/api/form-submit-url', {
      //   method: 'POST',
      //   body: data,
      // });
    }
  
    render() {
        const { res, invalid, displayErrors } = this.state;
      return (
          <div>
          <form
            onSubmit={this.handleSubmit}
            noValidate
            className={displayErrors ? 'displayErrors' : ''}
           >
            <label htmlFor="username">Username:</label>
            <input
              id="username"
              name="username"
              type="text"
              data-parse="uppercase"
            />
            <label htmlFor="email">Email:</label>
            <input id="email" name="email" type="email" required />
            <label htmlFor="birthdate">Birthdate:</label>
            <input
              id="birthdate"
              name="birthdate"
              type="text"
              data-parse="date"
              placeholder="MM/DD//YYYY"
              pattern="\d{2}\/\d{2}/\d{4}"
              required
            />
  
            <button>Send data!</button>
          </form>                  
          <div className="res-block">
            {invalid && (
              <ShakingError text="Form is not valid" />
            )}
            {!invalid && res && (
                <div>
                <h3>Transformed data to be sent:</h3>
                <pre>FormData {res}</pre>
                </div>
            )}
          </div>
          </div>
      );
    }
  }
  ReactDOM.render(
      <MyForm />,
    document.getElementById('app')
  );
  function stringifyFormData(fd) {
    const data = {};
      for (let key of fd.keys()) {
        data[key] = fd.get(key);
    }
    return JSON.stringify(data, null, 2);
  }

  import React, { Component } from 'react';
  import axios from 'axios';

// app.use(bodyParser.json())
// app.use(bodyParser.urlencoded({ extended: false }))

// app.post('/app/form', (req,res) => {
//   nodemailer.createTestAccount((err, account) => {
//     const htmlEmail =
//       `<h3>Contact Details</h3>
//       <ul>
//         <li>Name: ${req.body.name}</li>
//         <li>Email: ${req.body.email}</li>
//         <li>Phone Number: ${req.body.phone}</li>
//         <li>Location: ${req.body.location}</li>
//         <li>Target Date: ${req.body.targetdate}</li>
//         <li>Industry: ${req.body.industry}</li>
//         <li>Budget: ${req.body.budet}</li>
//         <li>Hear: ${req.body.hear}</li>
//         <li>About Project: ${req.body.aboutproject}</li>
//       </ul>
//       <h3>Message</h3>
//       <p>${req.body.message}</p>`
//       let transporter = nodemailer.createTransport({
//       host: 'smtp.ethereal.email',      
//       port: 587,
//       secure: false, // true for 465, false for other ports
//       auth: {
//           user: 'pzijaw2kwbqrf4jf@ethereal.email', // generated ethereal user
//           pass: 'RvvBVQFzUgbqqAyMEX' // generated ethereal password
//       }
//     });
//     let mailOptions = {
//       from: '"Fred Foo 👻" <foo@example.com>', // sender address
//       to: 'kresnata17@gmail.com', // list of receivers
//       subject: 'Hello ✔', // Subject line
//       text: req.body.message, // plain text body
//       html: htmlEmail // html body
//   };
//   transporter.sendMail(mailOptions, (error, info) => {
//     if (error) {
//         return console.log(error);
//     }
//     console.log('Message sent: %s', info.messageId);
//     // Preview only available when sending through an Ethereal account
//     console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

//     // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
//     // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
//     });
//   } )
//   // console.log(req.body)
// })

// const PORT = process.env.PORT || 3001

// app.listen(PORT, () => {
//   console.log('Server listening on port ${PORT}')
// })

class Inquire extends Component {

//   constructor(props) {
//     super(props);
//     this.state = {
//       name: '',
//       email: '',
//       phone: '',
//       location: '',
//       targetdate: '',
//       industry: '',
//       budget: '',
//       hear: '',
//       message: ''
//     };
//     this._handleSubmit = this._handleSubmit.bind(this);
//     this._handleChange = this._handleChange.bind(this);
//     this._handleChangeMsg = this._handleChangeMsg.bind(this);
//    }

//  // Change state of input field so text is updated while typing
//  _handleChange(e) {
//   this.setState({
//     name: e.target.value,
//     email: e.target.value,
//     phone: e.target.value,
//     location: e.target.value,
//     targetdate: e.target.value,
//     industry: e.target.value,
//     budget: e.target.value,
//     hear: e.target.value,
//   });
// }
// // Change state of input field so text is updated while typing
// _handleChangeMsg(e) {
//   this.setState({
//     message: e.target.value
//   });
// }
// _handleSubmit(e) {
//   e.preventDefault();
//   this.setState({
//     name: '',
//     email: '',
//     phone: '',
//     location: '',
//     targetdate: '',
//     industry: '',
//     budget: '',
//     hear: '',
//     message: ''
//   });

//   $.ajax({
//     url: process.env.NODE_ENV !== "production" ? '/getMail' : "http://www.fransbernhard.se/magden/php/mailer.php",
//     type: 'POST',
//     data: {
//       'form_name': this.state.contactName,
//       'form_email': this.state.email,
//       'form_phone': this.state.phone,    
//       'form_clientLocation': this.state.clientLocation,
//       'form_targetdate': this.state.targetdate,
//       'form_industry': this.state.industry,
//       'form_budget': this.state.budget,
//       'form_hear': this.state.hear,
//       'form_message': this.state.message
//     },
//     cache: false,
//     success: function(data) {
//       // Success..
//       this.setState({
//         name: 'success',
//         message: '<h1>Kontakt skickad!</h1><p>Återkommer så fort som möjligt.</p>'
//       });
//       // $('#formContact').slideUp();
//       // $('#formContact').after(this.state.contactMessage);
//       console.log('success', data);
//     }.bind(this),
//     // Fail..
//     error: function(xhr, status, err) {
//       console.log(xhr, status);
//       console.log(err);
//       this.setState({
//         contactEmail: 'danger',
//         contactMessage: '<h1>Sorry det blev fel</h1><p>Försök gärna igen, eller mejla mig direkt på magdamargaretha@gmail.com</p>'
//       });
//       console.log(this.state.contactName + this.state.email + this.state.phone + this.state.clientLocation + this.state.targetdate + this.state.industry + this.state.budget + this.state.hear + this.state.message + 'fail');
//     }.bind(this)
//   });
// }  
// script

constructor() {
  super();
  this.state = {
    name: '',
    email: '',
    phone: '',
    location: '',
    targetdate: '',
    industry: '',
    budget: '',
    hear: '',
    message: ''
  };
}

onChange = (e) => {
  /*
    Because we named the inputs to match their
    corresponding values in state, it's
    super easy to update the state
  */
  this.setState({ [e.target.name]: e.target.value });
}

onSubmit = (e) => {
  e.preventDefault();
  // get our form data out of state
  const { fname, lname, email } = this.state;

  axios.post('/', { fname, lname, email })
    .then((result) => {
      //access the results here....
    });
}

   render() {
    return (
		<div className="col col-12 py4">
            <div className=" col-12 text-home-atas left-align">
                <h1 className="f18 hitam pop bold">Oh, hey there!</h1>
                <p className="f14 pop hitam">
                Interested in working together? Great! If you would like to book a project, know more about our services and rates or would like to schedule a call, send us a note below. We would love to hear from you! 
                </p>
            </div>
            <div className="col-12 text-home-atas">
              {/* <form method="POST" onSubmit={this._handleSubmit} action="mailer.php"> */}
              <form className="form" onSubmit={this._handleSubmit} id="formContact">
              <div className="col col-12 mb2">
                <label className="f14 pop hitam block left-align">Full Name:</label>                
                  <input type="text" className="col-12 text-input" 
                  placeholder='Your Name' 
                  name='form_name'
                  onChange={this.handleOnChange} 
                  value={this.state.contactName}
                  required />
              </div>
              <div className="col col-12 mb2">
                <label className="f14 pop hitam block left-align">Email Address:</label>
                  <input type="email" className="col-12 text-input" 
                   placeholder='Your Email' 
                   name='form_email'
                   onChange={this.handleOnChange} 
                   value={this.state.email}
                  required />
              </div>
              <div className="col col-12 mb2">
                <label className="f14 pop hitam block left-align">Phone Number:</label>
                  <input type="number" className="col-12 text-input"
                   placeholder='Your Phone Number' 
                   name='form_phone'
                   onChange={this.handleOnChange} 
                   value={this.state.phone}
                  required />
              </div>
              <div className="col col-12 mb2">
                <label className="f14 pop hitam block left-align">Where you located:</label>
                  <input type="text" className="col-12 text-input"
                   placeholder='Your Location' 
                   name='form_location'
                   onChange={this.handleOnChange} 
                   value={this.state.clientLocation}
                  required />
              </div>
              <div className="col col-12 mb2">
                <label className="f14 pop hitam block left-align">What is your time frame for your project(s)? Indicate the date you would idealy like to have your project(s) completed by: *:</label>
                  <input type="date" className="col-12 text-input"
                  placeholder='Your Target Date' 
                  name='form_targetdate'
                  onChange={this.handleOnChange} 
                  value={this.state.targetdate}
                  required />
              </div>
              <div className="col col-12 mb2">
                <label className="f14 pop hitam block left-align">What is your bussiness industry:</label>
                  <input type="text" className="col-12 text-input"
                  placeholder='Your Bussiness Industry' 
                  name='form_industry'
                  onChange={this.handleOnChange} 
                  value={this.state.industry}
                  required />
              </div>
              <div className="col col-12 mb2">
                <label className="f14 pop hitam block left-align">Budget Estimed:</label>
                  <input type="text" className="col-12 text-input"
                  placeholder='Your Budget' 
                  name='form_budget'
                  onChange={this.handleOnChange} 
                  value={this.state.budget}
                  required />
              </div>
              <div className="col col-12 mb2">
                <label className="f14 pop hitam block left-align">Where you did hear about us:</label>
                  <input type="text" className="col-12 text-input"
                  placeholder='You know us from' 
                  name='form_hear'
                  onChange={this.handleOnChange} 
                  value={this.state.hear}
                  required />
              </div>
              <div className="col col-12 mb2">
                <label className="f14 pop hitam block left-align">Tell us about your project:</label>
                <textarea className="col-12 text-input"
                placeholder='Your Messagae' 
                name='form_message'
                onChange={this.handleOnChange} 
                value={this.state.message}
                required />
              </div>
              <input className="btn-merah p2" type="submit" value="Submit" />
              </form>
            </div>
        </div>
    );
  }
}  
export default Inquire;