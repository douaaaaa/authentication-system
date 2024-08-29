export const VERIFICATION_TOKEN_EMAIL = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
      rel="stylesheet"
    />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Verify Your Email</title>
  </head>
  <body
    style="
      font-family: Poppins, system-ui;
      line-height: 1.6;
      max-width: 600px;
      margin: 0 auto;
      padding: 20px;
      background-color: #e1f7f5;
    "
  >
    <h1
      style="
        text-align: center;
        text-transform: capitalize;
        font-size: 18px;
        color: #0e46a3;
        font-weight: 800;
      "
    >
      Company Name
    </h1>
    <div
      style="
        background-color: white;
        padding: 40px;
        border-radius: 10px;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
      "
    >
      <p style="font-size: 50px; margin: 0 auto; width: fit-content">🚀</p>
      <p
        style="
          text-align: center;
          font-size: 14px;
          font-weight: 700;
          color: #1e0342;
        "
      >
        Verify your email address
      </p>
      <div
        style="
          width: 80%;
          height: 1px;
          background-color: #1e03424f;
          margin: 0 auto;
        "
      ></div>
      <p
        style="
          font-size: 12px;
          text-align: center;
          color: #1e0342;
          line-height: 14px;
        "
      >
        In order to start using out app, you do need to confirm your email
        address.
      </p>
      <div style="display: flex; align-items: center; gap: 3px">
        <div
          style="
            background-color: #0e47a320;
            border-radius: 10px;
            padding: 5px 40px;
            letter-spacing: 8px;
            margin: 0 auto;
            color: #0e46a3;
            font-weight: 700;
            font-size: 25px;
          "
        >
          {verificationCode}
        </div>
      </div>
      <div
        style="
          width: 30%;
          height: 1px;
          background-color: #1e03424f;
          margin: 15px auto 14px;
        "
      ></div>
      <p
        style="
          font-size: 12px;
          text-align: center;
          color: #1e03424f;
          font-style: italic;
          line-height: 14px;
        "
      >
        If you don't sign up for this accound you can ignore this email and the
        account will be deleted
      </p>
    </div>
    <div
      style="
        text-align: center;
        margin-top: 20px;
        color: #1e03424f;
        font-size: 0.8em;
      "
    >
      <p>This is an automated message, please do not reply to this email.</p>
    </div>
  </body>
</html>


`;
