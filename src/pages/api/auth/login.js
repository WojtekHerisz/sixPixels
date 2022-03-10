export default function handler(req, res) {
  let mail, password;
  if (req.method === "POST") {
    if (req.body.mail && req.body.password) {
      mail = req.body.mail;
      password = req.body.password;
      res
        .status(200)
        .json({ error: false, mail, password, userId: "qwert1234" });

      console.log("yay");
    } else {
      res
        .status(200)
        .json({ error: true, errorDetails: "mail or password not send" });
    }
  } else {
    res.status(200).json({ error: true, errorDetails: "Wrong http method" });
  }
}
