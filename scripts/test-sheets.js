const fs = require('fs');
const path = require('path');

// Read .env.local
let scriptUrl = '';
try {
  const envContent = fs.readFileSync(path.join(__dirname, '..', '.env.local'), 'utf8');
  const match = envContent.match(/GOOGLE_SHEETS_SCRIPT_URL=(.+)/);
  if (match) scriptUrl = match[1].trim();
} catch (e) {}

if (!scriptUrl) {
  console.error('No GOOGLE_SHEETS_SCRIPT_URL found in .env.local');
  process.exit(1);
}

console.log('Testing endpoint:', scriptUrl);

async function testSubmissions() {
  const careerPayload = {
    formType: 'career',
    applicationRef: 'ARS-APP-' + Math.floor(10000 + Math.random() * 90000),
    fullName: 'Aarav Verma',
    email: 'aarav.verma@example.com',
    phone: '+91 98765 12345',
    currentCity: 'Lucknow, Uttar Pradesh',
    position: 'Senior Sales Consultant – Passenger Vehicles',
    preferredLocation: 'Lucknow, Uttar Pradesh',
    experience: '4 - 7 Years',
    qualification: 'Master’s Degree / MBA',
    currentCompany: 'Apex Mobility Group',
    currentCtc: '7.2 LPA',
    expectedCtc: '9.5 LPA',
    noticePeriod: '30 Days',
    linkedIn: 'https://linkedin.com/in/aarav-verma-auto',
    resumeFileName: 'Aarav_Verma_Resume.pdf',
    coverNote: 'Proven track record in luxury & commercial vehicle sales. Passionate about customer relationship management and team leadership.',
    submittedAt: new Date().toISOString()
  };

  const contactPayload = {
    formType: 'contact',
    fullName: 'Pooja Singhania',
    company: 'Singhania Logistics Ltd',
    email: 'pooja.s@singhanialogistics.in',
    phone: '+91 98111 22334',
    designation: 'VP - Operations',
    inquiryType: 'Commercial Mobility / Fleet Purchase',
    message: 'We are expanding our regional cargo fleet in North India and would like to explore bulk fleet pricing for commercial vehicles and AMC packages.',
    attachmentName: 'Fleet_Requirement_Spec.pdf',
    submittedAt: new Date().toISOString()
  };

  console.log('\n--- 1. Sending Career Test Submission ---');
  try {
    const res1 = await fetch(scriptUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(careerPayload),
      redirect: 'follow'
    });
    const text1 = await res1.text();
    console.log('Status:', res1.status);
    console.log('Response:', text1.slice(0, 300));
  } catch (err) {
    console.error('Error sending career test:', err.message);
  }

  console.log('\n--- 2. Sending Contact Inquiry Test Submission ---');
  try {
    const res2 = await fetch(scriptUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(contactPayload),
      redirect: 'follow'
    });
    const text2 = await res2.text();
    console.log('Status:', res2.status);
    console.log('Response:', text2.slice(0, 300));
  } catch (err) {
    console.error('Error sending contact test:', err.message);
  }
}

testSubmissions();
