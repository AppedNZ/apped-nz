// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import emailjs from "@emailjs/nodejs";
export default async function handler(req, res) {
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

  emailjs
    .send(`${process.env.SERVICE_ID}`, `${process.env.TEMPLATE_ID}`, templateParams, {
      publicKey: `${process.env.USER_ID}`,
      privateKey: `${process.env.USER_PRIVATE_ID}`,
    })
    .then(
      (response) => {
        res.json({ done: true, response });
        console.log("SUCCESS!", response.status, response.text);
      },
      (err) => {
        console.log("FAILED...", err);
      }
    );

  // console.log(result);
  // res.json({ done: true, result });
}
