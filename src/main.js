import twilio from 'twilio';
import { getStaticFile, throwIfMissing } from './utils.js';

export default async ({ req, res, log, error }) => {  
  if (req.method === 'GET') {
    return res.send(getStaticFile('index.html'), 200, {
      'Content-Type': 'text/html; charset=utf-8',
    });
  }

  try {
    throwIfMissing(process.env, ['TWILIO_ACCOUNT_SID', 'TWILIO_AUTH_TOKEN', 'TWILIO_PHONE_NUMBER']);
    throwIfMissing(req.body, ['phoneNumber']);
  } catch (err) {
    error(err);
    
    return res.json({ 
      ok: false,
      error: err.message 
    }, 400);
  }

  try{
    var client = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

    var call = await client.calls.create ({
      twiml: '<Response><Play>http://demo.twilio.com/docs/classic.mp3</Play></Response>',
      to: req.body.phoneNumber,
      from: process.env.TWILIO_PHONE_NUMBER
    });
    
    log(call);

    return res.json({
      ok: true,
      message: "Prank successful!"
    }, 200);
  } catch(err) {
    error(err);

    return res.json({
      ok: false,
      error: err.message
    }, 500);
  }
};
