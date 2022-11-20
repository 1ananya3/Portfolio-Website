// clear = function () {
//     let mysection = document.getElementById("mysection");
//     mysection.reset();
//   };
  
//   validate = function (name, email,number,message) {
//     if (name.length != "" && email.length !="" && number.length == 10 && message != "") {
//       return true;
//     } else {
//       return false;
//     }
//   };
  
//   show = function (event) {
//     let myelem = document.getElementById("caution");
   
//     if (event == "fail")
//     {
//       myelem.innerHTML = `<div class="bg-orange-100 border-l-4 border-orange-500 text-orange-700 p-4" role="alert">
//                              <p class="font-bold">Sorry. Unable to process the request.</p>
//                               <p>You might have filled in wrong information.</p>
//                               </div>`;
//     }
//     else if(event=="success")
//     {
//       myelem.innerHTML = `<div class="bg-green-100 border-l-4 border-green-500 text-green-700 p-4" role="alert">
//                              <p class="font-bold">Email sent.</p>
//                               <p>Your issue has been reported successfully.</p>
//                               </div>`;
//       }
      
//     else
//     {
//       myelem.innerHTML = `<div class="bg-red-100 border-l-4 border-red-500 text-red-700 p-4" role="alert">
//                              <p class="font-bold">Email not sent.</p>
//                               <p>Some error occured.</p>
//                               </div>`;
//     }
    
//     setTimeout(function () {
//       myelem.innerHTML = "";
//     }, 5000);
//   };
  
//   let process = document.getElementById("mybtn");
//   process.addEventListener("click", mailSending);
  
//   function mailSending(e) {
//     let name = document.getElementById("name").value;
//     let message = document.getElementById("message").value;
//     let sender = document.getElementById("requester").value;
//     let message = document.getElementById("message").value;
//     let email = document.getElementById("email");
  
//     if (validate(name, message)) {
//       sendEmail();
//       clear();
//     } else {
//       show("fail");
//     }
//     e.preventDefault();
//   }
  
//   function sendEmail() {
//     Email.send({
//       Host: "smtp.gmail.com",
//       Username: "ananyamohanta33@gmail.com",
//       Password: "Ananya#2000",
//       To: "ananyamohanta33@gmail.com",
//       From: "k.bansal17012000@gmail.com",
//       Subject: `fefe`,
//       Body: `fefe`,
//     }).then((message) => {
//       if (message == "OK") show("success");
//       else show("not");
//     });
//   }




function sendEmail() {
    var params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").Value,
        number: document.getElementById("number").Value,
        message: document.getElementById("message").Value
    };
    const serviceID = "service_db7a6gt";
    const templateID = "template_31y3ysv";
    
    emailjs
        .send(serviceID,templateID,params)
        .then(
            (res) => {
                document.getElementById("name").value ="";
                document.getElementById("email").value ="";
                document.getElementById("number").value ="";
                document.getElementById("message ").value ="";
                console.log(res);
                alert("Your message sent successfully.");
            }
        )
        .catch((err) => console.log("Please fill carefully."));
      
}
