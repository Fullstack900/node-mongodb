const sgMail = require('@sendgrid/mail');

const sendGridApi = process.env.USER_API;
require('dotenv').config();
sgMail.setApiKey(sendGridApi);

const emailRegistration = (name, email) => {

  try{
    sgMail.send({
        to: email, // Change to your recipient
        from: process.env.SENDER_EMAIL, // Change to your verified sender
        subject: 'Welcome in Vendering app',
        text: `Welcome ${name} for creating your acount on our Website`,
        html: '<stron>Thanks for signup on cuboic </strong>',
    }).catch(error => {
      console.log('error in sendgrid', error);
    });

  } catch(error) {
    console.log(error);
  }


};
const forgotPassword = (email, data, userName) => {
   
 
    const token = `${process.env.front_end_URL}/resetPassword?token=${data}`;
    const name = userName;
    try {
      sgMail.send({
          to: email,
          from: process.env.SENDER_EMAIL,
          subject: 'Forgot Password Email',
          html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
          <html xmlns="http://www.w3.org/1999/xhtml">
          
          <head>
            <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
            <meta name="viewport" content="width=device-width">
            <title>Title</title>
          
          
            <style></style>
          </head>
          
          <body style="-moz-box-sizing: border-box; -ms-text-size-adjust: 100%; -webkit-box-sizing: border-box; -webkit-text-size-adjust: 100%; Margin: 0; box-sizing: border-box; color: #0a0a0a; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; min-width: 100%; padding: 0; text-align: left; width: 100% !important;">
            <style>
              @media only screen {
                html {
                  min-height: 100%;
                  background: #f3f3f3;
                }
              }
              
              @media only screen and (max-width: 596px) {
                .small-float-center {
                  margin: 0 auto !important;
                  float: none !important;
                  text-align: center !important;
                }
                .small-text-center {
                  text-align: center !important;
                }
                .small-text-left {
                  text-align: left !important;
                }
                .small-text-right {
                  text-align: right !important;
                }
              }
              
              @media only screen and (max-width: 596px) {
                .hide-for-large {
                  display: block !important;
                  width: auto !important;
                  overflow: visible !important;
                  max-height: none !important;
                  font-size: inherit !important;
                  line-height: inherit !important;
                }
              }
              
              @media only screen and (max-width: 596px) {
                table.body table.container .hide-for-large,
                table.body table.container .row.hide-for-large {
                  display: table !important;
                  width: 100% !important;
                }
              }
              
              @media only screen and (max-width: 596px) {
                table.body table.container .callout-inner.hide-for-large {
                  display: table-cell !important;
                  width: 100% !important;
                }
              }
              
              @media only screen and (max-width: 596px) {
                table.body table.container .show-for-large {
                  display: none !important;
                  width: 0;
                  mso-hide: all;
                  overflow: hidden;
                }
              }
              
              @media only screen and (max-width: 596px) {
                table.body img {
                  width: auto;
                  height: auto;
                }
                table.body center {
                  min-width: 0 !important;
                }
                table.body .container {
                  width: 95% !important;
                }
                table.body .columns,
                table.body .column {
                  height: auto !important;
                  -moz-box-sizing: border-box;
                  -webkit-box-sizing: border-box;
                  box-sizing: border-box;
                  padding-left: 16px !important;
                  padding-right: 16px !important;
                }
                table.body .columns .column,
                table.body .columns .columns,
                table.body .column .column,
                table.body .column .columns {
                  padding-left: 0 !important;
                  padding-right: 0 !important;
                }
                table.body .collapse .columns,
                table.body .collapse .column {
                  padding-left: 0 !important;
                  padding-right: 0 !important;
                }
                td.small-1,
                th.small-1 {
                  display: inline-block !important;
                  width: 8.33333% !important;
                }
                td.small-2,
                th.small-2 {
                  display: inline-block !important;
                  width: 16.66667% !important;
                }
                td.small-3,
                th.small-3 {
                  display: inline-block !important;
                  width: 25% !important;
                }
                td.small-4,
                th.small-4 {
                  display: inline-block !important;
                  width: 33.33333% !important;
                }
                td.small-5,
                th.small-5 {
                  display: inline-block !important;
                  width: 41.66667% !important;
                }
                td.small-6,
                th.small-6 {
                  display: inline-block !important;
                  width: 50% !important;
                }
                td.small-7,
                th.small-7 {
                  display: inline-block !important;
                  width: 58.33333% !important;
                }
                td.small-8,
                th.small-8 {
                  display: inline-block !important;
                  width: 66.66667% !important;
                }
                td.small-9,
                th.small-9 {
                  display: inline-block !important;
                  width: 75% !important;
                }
                td.small-10,
                th.small-10 {
                  display: inline-block !important;
                  width: 83.33333% !important;
                }
                td.small-11,
                th.small-11 {
                  display: inline-block !important;
                  width: 91.66667% !important;
                }
                td.small-12,
                th.small-12 {
                  display: inline-block !important;
                  width: 100% !important;
                }
                .columns td.small-12,
                .column td.small-12,
                .columns th.small-12,
                .column th.small-12 {
                  display: block !important;
                  width: 100% !important;
                }
                table.body td.small-offset-1,
                table.body th.small-offset-1 {
                  margin-left: 8.33333% !important;
                  Margin-left: 8.33333% !important;
                }
                table.body td.small-offset-2,
                table.body th.small-offset-2 {
                  margin-left: 16.66667% !important;
                  Margin-left: 16.66667% !important;
                }
                table.body td.small-offset-3,
                table.body th.small-offset-3 {
                  margin-left: 25% !important;
                  Margin-left: 25% !important;
                }
                table.body td.small-offset-4,
                table.body th.small-offset-4 {
                  margin-left: 33.33333% !important;
                  Margin-left: 33.33333% !important;
                }
                table.body td.small-offset-5,
                table.body th.small-offset-5 {
                  margin-left: 41.66667% !important;
                  Margin-left: 41.66667% !important;
                }
                table.body td.small-offset-6,
                table.body th.small-offset-6 {
                  margin-left: 50% !important;
                  Margin-left: 50% !important;
                }
                table.body td.small-offset-7,
                table.body th.small-offset-7 {
                  margin-left: 58.33333% !important;
                  Margin-left: 58.33333% !important;
                }
                table.body td.small-offset-8,
                table.body th.small-offset-8 {
                  margin-left: 66.66667% !important;
                  Margin-left: 66.66667% !important;
                }
                table.body td.small-offset-9,
                table.body th.small-offset-9 {
                  margin-left: 75% !important;
                  Margin-left: 75% !important;
                }
                table.body td.small-offset-10,
                table.body th.small-offset-10 {
                  margin-left: 83.33333% !important;
                  Margin-left: 83.33333% !important;
                }
                table.body td.small-offset-11,
                table.body th.small-offset-11 {
                  margin-left: 91.66667% !important;
                  Margin-left: 91.66667% !important;
                }
                table.body table.columns td.expander,
                table.body table.columns th.expander {
                  display: none !important;
                }
                table.body .right-text-pad,
                table.body .text-pad-right {
                  padding-left: 10px !important;
                }
                table.body .left-text-pad,
                table.body .text-pad-left {
                  padding-right: 10px !important;
                }
                table.menu {
                  width: 100% !important;
                }
                table.menu td,
                table.menu th {
                  width: auto !important;
                  display: inline-block !important;
                }
                table.menu.vertical td,
                table.menu.vertical th,
                table.menu.small-vertical td,
                table.menu.small-vertical th {
                  display: block !important;
                }
                table.menu[align="center"] {
                  width: auto !important;
                }
                table.button.small-expand,
                table.button.small-expanded {
                  width: 100% !important;
                }
                table.button.small-expand table,
                table.button.small-expanded table {
                  width: 100%;
                }
                table.button.small-expand table a,
                table.button.small-expanded table a {
                  text-align: center !important;
                  width: 100% !important;
                  padding-left: 0 !important;
                  padding-right: 0 !important;
                }
                table.button.small-expand center,
                table.button.small-expanded center {
                  min-width: 0;
                }
              }
              
              @media only screen {
                html {
                  min-height: 100%;
                  background: #f3f3f3;
                }
              }
              
              @media only screen and (max-width: 596px) {
                .small-float-center {
                  margin: 0 auto !important;
                  float: none !important;
                  text-align: center !important;
                }
                .small-text-center {
                  text-align: center !important;
                }
                .small-text-left {
                  text-align: left !important;
                }
                .small-text-right {
                  text-align: right !important;
                }
              }
              
              @media only screen and (max-width: 596px) {
                .hide-for-large {
                  display: block !important;
                  width: auto !important;
                  overflow: visible !important;
                  max-height: none !important;
                  font-size: inherit !important;
                  line-height: inherit !important;
                }
              }
              
              @media only screen and (max-width: 596px) {
                table.body table.container .hide-for-large,
                table.body table.container .row.hide-for-large {
                  display: table !important;
                  width: 100% !important;
                }
              }
              
              @media only screen and (max-width: 596px) {
                table.body table.container .callout-inner.hide-for-large {
                  display: table-cell !important;
                  width: 100% !important;
                }
              }
              
              @media only screen and (max-width: 596px) {
                table.body table.container .show-for-large {
                  display: none !important;
                  width: 0;
                  mso-hide: all;
                  overflow: hidden;
                }
              }
              
              @media only screen and (max-width: 596px) {
                table.body img {
                  width: auto;
                  height: auto;
                }
                table.body center {
                  min-width: 0 !important;
                }
                table.body .container {
                  width: 95% !important;
                }
                table.body .columns,
                table.body .column {
                  height: auto !important;
                  -moz-box-sizing: border-box;
                  -webkit-box-sizing: border-box;
                  box-sizing: border-box;
                  padding-left: 16px !important;
                  padding-right: 16px !important;
                }
                table.body .columns .column,
                table.body .columns .columns,
                table.body .column .column,
                table.body .column .columns {
                  padding-left: 0 !important;
                  padding-right: 0 !important;
                }
                table.body .collapse .columns,
                table.body .collapse .column {
                  padding-left: 0 !important;
                  padding-right: 0 !important;
                }
                td.small-1,
                th.small-1 {
                  display: inline-block !important;
                  width: 8.33333% !important;
                }
                td.small-2,
                th.small-2 {
                  display: inline-block !important;
                  width: 16.66667% !important;
                }
                td.small-3,
                th.small-3 {
                  display: inline-block !important;
                  width: 25% !important;
                }
                td.small-4,
                th.small-4 {
                  display: inline-block !important;
                  width: 33.33333% !important;
                }
                td.small-5,
                th.small-5 {
                  display: inline-block !important;
                  width: 41.66667% !important;
                }
                td.small-6,
                th.small-6 {
                  display: inline-block !important;
                  width: 50% !important;
                }
                td.small-7,
                th.small-7 {
                  display: inline-block !important;
                  width: 58.33333% !important;
                }
                td.small-8,
                th.small-8 {
                  display: inline-block !important;
                  width: 66.66667% !important;
                }
                td.small-9,
                th.small-9 {
                  display: inline-block !important;
                  width: 75% !important;
                }
                td.small-10,
                th.small-10 {
                  display: inline-block !important;
                  width: 83.33333% !important;
                }
                td.small-11,
                th.small-11 {
                  display: inline-block !important;
                  width: 91.66667% !important;
                }
                td.small-12,
                th.small-12 {
                  display: inline-block !important;
                  width: 100% !important;
                }
                .columns td.small-12,
                .column td.small-12,
                .columns th.small-12,
                .column th.small-12 {
                  display: block !important;
                  width: 100% !important;
                }
                table.body td.small-offset-1,
                table.body th.small-offset-1 {
                  margin-left: 8.33333% !important;
                  Margin-left: 8.33333% !important;
                }
                table.body td.small-offset-2,
                table.body th.small-offset-2 {
                  margin-left: 16.66667% !important;
                  Margin-left: 16.66667% !important;
                }
                table.body td.small-offset-3,
                table.body th.small-offset-3 {
                  margin-left: 25% !important;
                  Margin-left: 25% !important;
                }
                table.body td.small-offset-4,
                table.body th.small-offset-4 {
                  margin-left: 33.33333% !important;
                  Margin-left: 33.33333% !important;
                }
                table.body td.small-offset-5,
                table.body th.small-offset-5 {
                  margin-left: 41.66667% !important;
                  Margin-left: 41.66667% !important;
                }
                table.body td.small-offset-6,
                table.body th.small-offset-6 {
                  margin-left: 50% !important;
                  Margin-left: 50% !important;
                }
                table.body td.small-offset-7,
                table.body th.small-offset-7 {
                  margin-left: 58.33333% !important;
                  Margin-left: 58.33333% !important;
                }
                table.body td.small-offset-8,
                table.body th.small-offset-8 {
                  margin-left: 66.66667% !important;
                  Margin-left: 66.66667% !important;
                }
                table.body td.small-offset-9,
                table.body th.small-offset-9 {
                  margin-left: 75% !important;
                  Margin-left: 75% !important;
                }
                table.body td.small-offset-10,
                table.body th.small-offset-10 {
                  margin-left: 83.33333% !important;
                  Margin-left: 83.33333% !important;
                }
                table.body td.small-offset-11,
                table.body th.small-offset-11 {
                  margin-left: 91.66667% !important;
                  Margin-left: 91.66667% !important;
                }
                table.body table.columns td.expander,
                table.body table.columns th.expander {
                  display: none !important;
                }
                table.body .right-text-pad,
                table.body .text-pad-right {
                  padding-left: 10px !important;
                }
                table.body .left-text-pad,
                table.body .text-pad-left {
                  padding-right: 10px !important;
                }
                table.menu {
                  width: 100% !important;
                }
                table.menu td,
                table.menu th {
                  width: auto !important;
                  display: inline-block !important;
                }
                table.menu.vertical td,
                table.menu.vertical th,
                table.menu.small-vertical td,
                table.menu.small-vertical th {
                  display: block !important;
                }
                table.menu[align="center"] {
                  width: auto !important;
                }
                table.button.small-expand,
                table.button.small-expanded {
                  width: 100% !important;
                }
                table.button.small-expand table,
                table.button.small-expanded table {
                  width: 100%;
                }
                table.button.small-expand table a,
                table.button.small-expanded table a {
                  text-align: center !important;
                  width: 100% !important;
                  padding-left: 0 !important;
                  padding-right: 0 !important;
                }
                table.button.small-expand center,
                table.button.small-expanded center {
                  min-width: 0;
                }
              }
            </style>
            <!-- <style> -->
            <table class="body" data-made-with-foundation="" style="Margin: 0; background: #f3f3f3; border-collapse: collapse; border-spacing: 0; color: #0a0a0a; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; height: 100%; line-height: 1.3; margin: 0; padding: 0; text-align: left; vertical-align: top; width: 100%;">
              <tbody>
                <tr style="padding: 0; text-align: left; vertical-align: top;">
                  <td class="float-center" align="center" valign="top" style="-moz-hyphens: auto; -webkit-hyphens: auto; Margin: 0 auto; border-collapse: collapse !important; color: #0a0a0a; float: none; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; hyphens: auto; line-height: 1.3; margin: 0 auto; padding: 0; text-align: center; vertical-align: top; word-wrap: break-word;">
                    <center data-parsed="" style="min-width: 580px; width: 100%;">
                      <!-- move the above styles into your custom stylesheet -->
                      <table bgcolor="#f3f3f3" align="center" class="wrapper header float-center" style="Margin: 0 auto; background: #f19b28; border-collapse: collapse; border-spacing: 0; float: none; margin: 0 auto; padding: 0; text-align: center; vertical-align: top; width: 100%;">
                        <tbody>
                          <tr style="padding: 0; text-align: left; vertical-align: top;">
                            <td class="wrapper-inner" style="-moz-hyphens: auto; -webkit-hyphens: auto; Margin: 0; border-collapse: collapse !important; color: #0a0a0a; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; hyphens: auto; line-height: 1.3; margin: 0; padding: 20px; text-align: left; vertical-align: top; word-wrap: break-word;">
                              <table align="center" class="container" style="Margin: 0 auto; background: #f19b28; border-collapse: collapse; border-spacing: 0; margin: 0 auto; padding: 0; text-align: inherit; vertical-align: top; width: 580px;">
                                <tbody>
                                  <tr style="padding: 0; text-align: left; vertical-align: top;">
                                    <td style="-moz-hyphens: auto; -webkit-hyphens: auto; Margin: 0; border-collapse: collapse !important; color: #0a0a0a; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; hyphens: auto; line-height: 1.3; margin: 0; padding: 0; text-align: left; vertical-align: top; word-wrap: break-word;">
                                      <table class="row collapse" style="border-collapse: collapse; border-spacing: 0; display: table; padding: 0; position: relative; text-align: left; vertical-align: top; width: 100%;">
                                        <tbody>
                                          <tr style="padding: 0; text-align: left; vertical-align: top;">
                                            <th class="small-2 large-2 columns first" valign="middle" style="Margin: 0 auto; color: #0a0a0a; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0 auto; padding: 0; padding-bottom: 0; padding-left: 0; padding-right: 0; text-align: left; width: 104.66667px;">
                                              <table style="border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top; width: 100%;">
                                                <tbody>
                                                  <tr style="padding: 0; text-align: left; vertical-align: top;">
                                                    <th class="" style="Margin: 0; color: #0a0a0a; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 0; text-align: left;">
                                                      <p class="text-right" style="Margin: 0; Margin-bottom: 10px; color: #fff; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; margin-bottom: 0; padding: 0; text-align: right;"><img src="https://back.friggkantine.no/admin/images/right-1.png" style="-ms-interpolation-mode: bicubic; clear: both; display: block; max-width: 100%; outline: none; text-decoration: none; width: auto;"></p>
                                                    </th>
                                                  </tr>
                                                </tbody>
                                              </table>
                                            </th>
                                            <th class="small-8 large-8 columns" valign="middle" style="Margin: 0 auto; color: #0a0a0a; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0 auto; padding: 0; padding-bottom: 0; padding-left: 0; padding-right: 0; text-align: left; width: 386.66667px;">
                                              <table style="border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top; width: 100%;">
                                                <tbody>
                                                  <tr style="padding: 0; text-align: left; vertical-align: top;">
                                                    <th style="Margin: 0; color: #0a0a0a; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 0; text-align: left;"> <img src="https://back.friggkantine.no/admin/images/sidelogo1.png" style="-ms-interpolation-mode: bicubic; clear: both; display: block; max-width: 100%; outline: none; text-decoration: none; width: 320px; height: 90px;"> </th>
                                                  </tr>
                                                </tbody>
                                              </table>
                                            </th>
                                            <th class="small-2 large-2 columns last" valign="middle" style="Margin: 0 auto; color: #0a0a0a; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0 auto; padding: 0; padding-bottom: 0; padding-left: 0; padding-right: 0; text-align: left; width: 104.66667px;">
                                              <table style="border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top; width: 100%;">
                                                <tbody>
                                                  <tr style="padding: 0; text-align: left; vertical-align: top;">
                                                    <th style="Margin: 0; color: #0a0a0a; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 0; text-align: left;">
                                                      <p class="text-right" style="Margin: 0; Margin-bottom: 10px; color: #fff; float: right; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; margin-bottom: 0; padding: 0; text-align: right;"><img src="https://back.friggkantine.no/admin/images/right-2.png" style="-ms-interpolation-mode: bicubic; clear: both; display: block; max-width: 100%; outline: none; text-decoration: none; width: auto;"></p>
                                                    </th>
                                                  </tr>
                                                </tbody>
                                              </table>
                                            </th>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      <table align="center" class="container float-center" style="Margin: 0 auto; background: #fefefe; border-collapse: collapse; border-spacing: 0; float: none; margin: 0 auto; padding: 0; text-align: center; vertical-align: top; width: 580px;">
                        <tbody>
                          <tr style="padding: 0; text-align: left; vertical-align: top;">
                            <td style="-moz-hyphens: auto; -webkit-hyphens: auto; Margin: 0; border-collapse: collapse !important; color: #0a0a0a; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; hyphens: auto; line-height: 1.3; margin: 0; padding: 0; text-align: left; vertical-align: top; word-wrap: break-word;">
                              <table class="spacer" style="border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top; width: 100%;">
                                <tbody>
                                  <tr style="padding: 0; text-align: left; vertical-align: top;">
                                    <td height="16px" style="-moz-hyphens: auto; -webkit-hyphens: auto; Margin: 0; border-collapse: collapse !important; color: #0a0a0a; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; hyphens: auto; line-height: 16px; margin: 0; mso-line-height-rule: exactly; padding: 0; text-align: left; vertical-align: top; word-wrap: break-word;"></td>
                                  </tr>
                                </tbody>
                              </table>
                              <table class="row" style="border-collapse: collapse; border-spacing: 0; display: table; padding: 0; position: relative; text-align: left; vertical-align: top; width: 100%;">
                                <tbody>
                                  <tr style="padding: 0; text-align: left; vertical-align: top;">
                                    <th class="small-12 large-12 columns first last" style="Margin: 0 auto; color: #0a0a0a; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0 auto; padding: 0; padding-bottom: 16px; padding-left: 16px; padding-right: 16px; text-align: left; width: 564px;">
                                      <table style="border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top; width: 100%;">
                                        <tbody>
                                          <tr style="padding: 0; text-align: left; vertical-align: top;">
                                            <th style="Margin: 0; color: #0a0a0a; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 0; text-align: left;"><img src="https://back.friggkantine.no/admin/images/bRight-2.png" style="-ms-interpolation-mode: bicubic; clear: both; display: block; max-width: 100%; outline: none; text-decoration: none; width: auto;"></th>
                                          </tr>
                                          <tr style="padding: 0; text-align: left; vertical-align: top;">
                                            <th style="Margin: 0; color: #0a0a0a; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 0; text-align: left;">
                                              <h1 style="Margin: 0; Margin-bottom: 10px; color: #f19b28; font-family: Helvetica, Arial, sans-serif; font-size: 34px; font-weight: bold; line-height: 1.3; margin: 0; margin-bottom: 10px; padding: 0; text-align: left; word-wrap: normal;">Dear ${name}</h1>
                                              <p class="lead" style="Margin: 0; Margin-bottom: 10px; color: #4a4a4a; font-family: Helvetica, Arial, sans-serif; font-size: 20px; font-weight: 600; line-height: 1.6; margin: 0; margin-bottom: 10px; padding: 0; text-align: left;">Great doing! Please <span><a href="${token}" style="color:#f19b28; text-decoration:none;">click here</a></span> to change your password.</p>
                                              <table class="callout" style="Margin-bottom: 16px; border-collapse: collapse; border-spacing: 0; margin-bottom: 16px; padding: 0; text-align: left; vertical-align: top; width: 100%;">
                                                <tbody>
                                                  <tr style="padding: 0; text-align: left; vertical-align: top;">
                                                    <th class="callout-inner invoice" style="Margin: 0; color: #0a0a0a; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 10px; text-align: left; width: 100%;">
                                                      <p style="Margin: 0; Margin-bottom: 10px; color: #0a0a0a; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; margin-bottom: 10px; padding: 0; text-align: left;">
                                                      </p>
                                                      <table style="border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top; width: 100%;">
                                                        <tbody>
                                                          <tr>
                                                            <th style="Margin: 0; color: #4a4a4a; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: 600; line-height: 1.3; margin: 0; padding: 10px; text-align: center;">
                                  <img src="https://back.friggkantine.no/admin/images/lock.png"/>
                                  </th>
                                                          </tr>
                                 </tbody>
                                                      </table>
                                                      <p></p>
                                                    </th>
                                                    <th class="expander" style="Margin: 0; color: #0a0a0a; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 0 !important; text-align: left; visibility: hidden; width: 0;">
                              </th>
                                                  </tr>
                                                </tbody>
                                              </table>
                                            </th>
                                            <th class="expander" style="Margin: 0; color: #0a0a0a; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 0 !important; text-align: left; visibility: hidden; width: 0;"></th>
                                          </tr>
                        <tr>
                          <th style="Margin: 0; color: #0a0a0a; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 0; text-align: left;">
                          <p class="lead" style="Margin: 0; Margin-bottom: 10px; color: #4a4a4a; font-family: Helvetica, Arial, sans-serif; font-size: 20px; font-weight: 600; line-height: 1.6; margin: 0; margin-bottom: 10px; padding: 0; text-align: left;">On clicking you will be navigated to the link where you set your password.</p>
                          </th>
                        </tr>
                        <tr>
                          <th style="Margin: 0; color: #0a0a0a; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 0; text-align: left;">
                          <p class="lead" style="Margin: 0; Margin-bottom: 10px; color: #4a4a4a; font-family: Helvetica, Arial, sans-serif; font-size: 20px; font-weight: 600; line-height: 1.6; margin: 0; margin-bottom: 10px; padding: 0; text-align: left;">Please refer to our terms and policy section to get answers to most frequently asked questions.</p>
                          </th>
                        </tr>
                                        </tbody>
                                      </table>
                                    </th>
                                  </tr>
                                </tbody>
                              </table>
                              <table class="row" style="border-collapse: collapse; border-spacing: 0; display: table; padding: 0; position: relative; text-align: left; vertical-align: top; width: 100%;">
                                <tbody>
                                  <tr style="padding: 0; text-align: left; vertical-align: top;">
                                    <th class="small-12 large-12 columns first last" style="Margin: 0 auto; color: #0a0a0a; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0 auto; padding: 0; padding-bottom: 16px; padding-left: 16px; padding-right: 16px; text-align: left; width: 564px;">
                                      <table style="border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top; width: 100%;">
                                        <tbody>
                                          <tr style="padding: 0; text-align: left; vertical-align: top;">
                                            <th style="Margin: 0; color: #0a0a0a; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 0; text-align: left;">
                                              <table class="" style="border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top; width: 100%;">
                                                <tbody>
                                                  <tr style="padding: 0; text-align: left; vertical-align: top;">
                                                    <th class="small-6 large-6 columns first" style="Margin: 0 auto; color: #0a0a0a; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0 auto; padding: 0; padding-bottom: 16px; padding-left: 0 !important; padding-right: 0 !important; text-align: left; width: 50%;"><img src="https://back.friggkantine.no/admin/images/bRight-1.png" style="-ms-interpolation-mode: bicubic; clear: both; display: block; max-width: 100%; outline: none; text-decoration: none; width: auto;"></th>
                                                    <th class="small-6 large-6 columns last" style="Margin: 0 auto; color: #0a0a0a; float: right; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0 auto; padding: 0; padding-bottom: 16px; padding-left: 0 !important; padding-right: 0 !important; text-align: left; width: 50%;"><img src="https://back.friggkantine.no/admin/images/bRight-2.png" style="-ms-interpolation-mode: bicubic; clear: both; display: block; max-width: 100%; outline: none; text-decoration: none; width: auto;"></th>
                                                  </tr>
                                                  <tr style="padding: 0; text-align: left; vertical-align: top;">
                                                    <th colspan="2" class="small-12 large-12 columns first last primary" style="Margin: 0 auto; color: #0a0a0a; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0 auto; padding: 0; padding-bottom: 16px; padding-left: 0 !important; padding-right: 0 !important; text-align: left; width: 100%;">
                                                      <h3 style="Margin: 0; Margin-bottom: 10px; color: #f19b28; font-family: Helvetica, Arial, sans-serif; font-size: medium; font-weight: bold; line-height: 1.3; margin: 0; margin-bottom: 10px; padding: 0; text-align: center; word-wrap: normal;"><a href="https://www.friggkantine.no" style="color:#f19b28; text-decoration:none;">www.friggkantine.no</a></h3>
                                                    </th>
                                                    <th class="expander" style="Margin: 0; color: #0a0a0a; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 0 !important; text-align: left; visibility: hidden; width: 0;"></th>
                                                  </tr>
                                                </tbody>
                                              </table>
                                            </th>
                                            <th class="expander" style="Margin: 0; color: #0a0a0a; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 0 !important; text-align: left; visibility: hidden; width: 0;"></th>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </th>
                                  </tr>
                                  <tr style="background: #f19b28; padding: 0; text-align: left; vertical-align: top;">
                                    <th class="small-12 large-12 columns first last" style="Margin: 0 auto; color: #0a0a0a; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0 auto; padding: 0; padding-bottom: 16px; padding-left: 16px; padding-right: 16px; text-align: left; width: 564px;">
          
                                    </th>
                                  </tr>
                                </tbody>
                              </table>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </center>
                  </td>
                </tr>
              </tbody>
            </table>
          </body>
          </html>`,
          // html: `<strong>Please click on this link to forgot your cuboid password ${tok}</strong>`,
      }).catch(error => {
        console.log('error in sendgrid', error);
      });
      
    } catch (error) {
      console.log(error);
    }
};
const resetPassword = (email, data) => {
    // console.log(email, data);
    const tok = `https://back.friggkantine.no/reset-password?token=${data}`;
    try{
      sgMail.send({
          to: email,
          from: process.env.SENDER_EMAIL,
          subject: 'Forgot Email',
          text: `Please click on that link to forgot passwor ${tok}`,
          html: `< strong > Please click on that link to forgot password ${tok} </strong > `,
      }).catch(error => {
        console.log('error in sendgrid', error);
      });

    } catch(error) {
      console.log(error);
    }


};
module.exports = {
    emailRegistration,
    forgotPassword
};