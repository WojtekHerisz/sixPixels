import nc from "next-connect";
import users from "../../../lib/jsonDb/users";

const handler = nc({
  onError: (err, req, res, next) => {
    console.error(err.stack);
    res.status(500).end("Something broke!");
  },
  onNoMatch: (req, res) => {
    res.status(404).end("Page is not found");
  },
}).get((req, res) => {
  const foundUser = users.find((element) => element.userId == req.query.userId);
  // console.log(users);

  res.status(200).json({ error: false, ...foundUser });
});

export default handler;
