//import emailjs from "@emailjs/nodejs";
export default async function handler(req, res) {
  const emailjs = require("@emailjs/nodejs");
  const { name, email, budget, message } = req?.body || {};
  var data = {
    service_id: process.env.SERVICE_ID,
    template_id: process.env.TEMPLATE_ID,
    user_id: process.env.USER_ID,
  };
  const templateParams = {
    name,
    email,
    budget,
    message,
  };
  let res;
  emailjs
    .send(`${process.env.SERVICE_ID}`, `${process.env.TEMPLATE_ID}`, templateParams, {
      publicKey: `${process.env.USER_ID}`,
      privateKey: `${process.env.USER_PRIVATE_ID}`,
    })
    .then(
      (response) => {
        console.log("SUCCESS!", response.status, response.text);
        res = response;
        return res.json({ done: true, response });
      },
      (err) => {
        console.log("FAILED...", err);
        res = err;
        return res.json({ done: true, err });
      }
    );

  console.log(res);
  res.json({ done: "after", res });
}
