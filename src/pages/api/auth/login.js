import nc from "next-connect";
let mail, password;

const handler = nc({
  onError: (err, req, res, next) => {
    console.error(err.stack);
    res.status(500).end("Something broke!");
  },
  onNoMatch: (req, res) => {
    res.status(404).end("Page is not found");
  },
}).post((req, res) => {
  const data = JSON.parse(req.body);
  if (data.mail && data.password) {
    mail = data.mail;
    password = data.password;
    if (mail === "beelover@mail.com" && password === "12345") {
      res.status(200).json({ error: false, mail, userId: "1" });
    } else {
      res
        .status(401)
        .json({ error: false, errorDetails: "Wrong mail or password" });
    }
    console.log("yay");
  } else {
    res
      .status(200)
      .json({ error: true, errorDetails: "mail or password not send" });
  }
});

export default handler;
