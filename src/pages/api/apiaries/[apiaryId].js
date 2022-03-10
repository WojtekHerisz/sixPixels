import nc from "next-connect";
import apiaries from "../../../lib/jsonDb/apiaries";

const handler = nc({
  onError: (err, req, res, next) => {
    console.error(err.stack);
    res.status(500).end("Something broke!");
  },
  onNoMatch: (req, res) => {
    res.status(404).end("Page is not found");
  },
}).get((req, res) => {
  const foundApiary = apiaries.find(
    (element) => element.id == req.query.apiaryId
  );
  // console.log(users);

  res.status(200).json({ error: false, foundApiary });
});

export default handler;
