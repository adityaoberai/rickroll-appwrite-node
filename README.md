# ⚡ Rick Roll Function

A function that uses Twilio to call a person and rick roll them.

## 🧰 Usage

### GET /

- HTML form for interacting with the function.

### POST, PUT, PATCH, DELETE /

- Makes a call using Twilio to the inputted phone number

**Parameters**

| Name              | Description                          | Location | Type               | Sample Value                  |
| ----------------- | ------------------------------------ | -------- | ------------------ | ----------------------------- |
| Content-Type      | The content type of the request body | Header   | `application/json` | N/A                           |
| phoneNumber       | Phone number of person to prank      | Body     | String             | `+919876543210` |

**Request**

```json
{
  "phoneNumber": "+919876543210"
}
```

**Response**

Sample `200` Response:

```json
{
  "ok": true,
  "message": "Prank successful!"
}
```

## ⚙️ Configuration

| Setting           | Value         |
|-------------------|---------------|
| Runtime           | Node (18.0)   |
| Entrypoint        | `src/main.js` |
| Build Commands    | `npm install` |
| Permissions       | `any`         |
| Timeout (Seconds) | 15            |

## 🔒 Environment Variables

### TWILIO_ACCOUNT_SID

The Account Sid provided by Twilio to identify your Twilio account when using their API.

| Question      | Answer                                                                                                                              |
| ------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| Required      | Yes                                                                                                                                 |
| Sample Value  | `ACc6a5...09d`                                                                                                                      |
| Documentation | [Twilio Support](https://support.twilio.com/hc/en-us/articles/14726256820123-What-is-a-Twilio-Account-SID-and-where-can-I-find-it-) |

### TWILIO_AUTH_TOKEN

The Authorization Token provided by Twilio to authenticate your Twilio account when using their API.

| Question      | Answer                                                                                                      |
| ------------- | ----------------------------------------------------------------------------------------------------------- |
| Required      | Yes                                                                                                         |
| Sample Value  | `d65g4...8d37`                                                                                              |
| Documentation | [Twilio Support](https://support.twilio.com/hc/en-us/articles/223136027-Auth-Tokens-and-How-to-Change-Them) |

### TWILIO_PHONE_NUMBER

The Phone Number obtained through Twilio to make phone calls via Twilio Programmable Voice.

| Question      | Answer                                                                                                                                |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| Required      | Yes                                                                                                                                   |
| Sample Value  | `+12345678901`                                                                                                                        |
| Documentation | [Twilio Support](https://support.twilio.com/hc/en-us/articles/223135247-How-to-Search-for-and-Buy-a-Twilio-Phone-Number-from-Console) |