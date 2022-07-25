import './App.css';
import React, { useState } from 'react';    // link path of Razorpay in index.html file 
//<script src="https://checkout.razorpay.com/v1/checkout.js"></script>

function App() {
  const [amount, setamount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (amount === "") {
      alert("Please enter amount");
    } else {
      var options = {
        key: "rzp_test_2UEKeYIGXb308C",  //copy from razorpay website
        key_secret: "JA38It0Gr7O2GQemUyFCAeUC",  //copy from razorpay website
        amount: amount * 100,
        currency: "INR",
        name: "STARTUP_PROJECTS",
        description: "fot testing purpose",
        handler: function (response) {
          alert(response.razorpay_payment_id);
        },
        prefill: {
          name: "Jyoti",
          email: "mishrajyoti356@gmail.com", //write original no. , id, name
          contact: "8839110723"
        },
        notes: {
          address:"Razorpay Corporate Office"
        },
        theme: {
          color: "#3399cc"
        }
      };
      var pay = new window.Razorpay(options);
      pay.open();
    }
  }
  return (
    <div className="App">
      <h2> Razorpay Payment Integration Using React</h2>
      <br></br>
      <input type="text" placeholder='Enter Amount' value={amount} onChange={(e) => setamount(e.target.value)} />
      <br></br> <br></br>
      <button onClick={handleSubmit}> submit </button>
    </div>
  );
}

export default App;
