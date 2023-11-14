const express = require('express');
const ejs = require('ejs');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const app = express();


console.log(this);
//app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.set('port', process.env.SERVER_PORT || 3000); // Choose an available port

const port = app.get('port');

// Configure middleware for parsing form data
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


// Function to sanitize user input
function sanitizeInput(input) {
  input = input.trim();
  input = input.replace(/</g, '&lt;').replace(/>/g, '&gt;'); // Prevent code injection
  return input;
}

// Configure Nodemailer
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST, // e.g., 'Gmail'
  port: 465,
  secure: true,
  debug: true,
  logger: true,
  secureConnection: false,
  auth: {
    user: process.env.SMTP_USERNAME, // Your email address using environment variable
    pass: process.env.SMTP_PASSWORD, // Your email password using environment variable
  },
  tls: { rejectUnAuthorized: true }
});

// *** GET Routes - display pages ***
// Root Route
app.get('/', (req, res) => {
  res.render('pages/index',{
      title: 'Inicio'
  });
});

app.get('/gallery', (req, res) => {
  res.render('pages/gallery', {
    title: 'Galería'
  });
});


app.post('/send-email', (req, res) => {
  const { name, email, tema, message } = req.body;

  // Sanitize user input
  const sanitizedName = sanitizeInput(name);
  const sanitizedEmail = sanitizeInput(email);
  const sanitizedTema = sanitizeInput(tema);
  const sanitizedMessage = sanitizeInput(message);

  // Basic form validation
  if (!sanitizedName || !sanitizedEmail || !sanitizedTema || !sanitizedMessage) {
      return res.status(400).send('Please fill in all required fields.');
  }

  // Compose and send the email
  const mailOptions = {
      from: process.env.SMTP_USERNAME, // Your email address using environment variable
      to: process.env.SMTP_USERNAME, // Recipient's email address
      subject: 'Mensaje desde All Artem',
      html: `
      <h1>All Artem</h1>
      <p>Nombre: ${sanitizedName}</p>
      <p>Email: ${sanitizedEmail}</p>
      <p>Interesado(a) en: ${sanitizedTema}</p>
      <p>Mensaje:</p>
      <p>${sanitizedMessage}</p>
    `,
  };

  transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
          console.error(error);
          res.render('pages/index', {
            title: 'Inicio',
            success: false
          });
          // return res.status(500).send('Sorry, there was an error sending your message.');
      } else {
          console.log('Email sent: ' + info.response);
          res.render('pages/index', {
            title: 'Inicio',
            success: true
          });
          //return res.send('Thank you for your message. We will get back to you soon.');
      }
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});