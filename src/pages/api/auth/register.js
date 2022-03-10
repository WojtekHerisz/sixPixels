export default function handler(req, res) {
  if (req.method === "POST") {
    if (req.body.mail && req.body.password) {
      res.status(200).json({ name: "A" });

      console.log("yay");
    } else {
      res.status(200).json({ name: "B" });
    }
  } else {
    res.status(200).json({ name: "C" });
  }
}
