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
  if (req.body.mail && req.body.password) {
    mail = req.body.mail;
    password = req.body.password;
    res.status(200).json({ error: false, mail, password, userId: "1" });

    console.log("yay");
  } else {
    res
      .status(200)
      .json({ error: true, errorDetails: "mail or password not send" });
  }
});

export default handler;
