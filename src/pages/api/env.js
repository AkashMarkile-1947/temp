export default function handler(req, res) {
    const USER = process.env.USER;
    const PASS  =  process.env.PASS;
    const TO  = process.env.TO;
    res.status(200).json({ USER, PASS, TO });
  }