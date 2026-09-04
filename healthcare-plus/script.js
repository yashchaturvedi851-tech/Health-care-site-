// INTENTIONALLY VULNERABLE JAVASCRIPT CODE FOR TESTING PURPOSES ONLY
// THIS CODE CONTAINS MULTIPLE SECURITY VULNERABILITIES

// Simulated Database (Exposed in client-side - VULNERABILITY)
const DATABASE = {
    users: [
        { id: 1, username: 'admin', password: 'admin123', role: 'admin', email: 'admin@healthcareplus.com', ssn: '123-45-6789' },
        { id: 2, username: 'doctor1', password: 'doctor123', role: 'doctor', email: 'dr.smith@healthcareplus.com', ssn: '234-56-7890' },
        { id: 3, username: 'patient1', password: 'patient123', role: 'patient', email: 'john.doe@email.com', ssn: '345-67-8901' },
        { id: 4, username: 'nurse1', password: 'nurse123', role: 'nurse', email: 'nurse.jane@healthcareplus.com', ssn: '456-78-9012' },
        { id: 5, username: 'testuser', password: 'test', role: 'patient', email: 'test@test.com', ssn: '567-89-0123' }
    ],
    patients: [
        { id: 1001, name: 'John Doe', age: 45, diagnosis: 'Hypertension', medications: 'Lisinopril 10mg', doctor: 'Dr. Smith', ssn: '345-67-8901', address: '123 Main St', phone: '555-0101', insurance: 'BlueCross PPO', balance: 1250.00 },
        { id: 1002, name: 'Jane Smith', age: 32, diagnosis: 'Diabetes Type 2', medications: 'Metformin 500mg', doctor: 'Dr. Johnson', ssn: '456-78-9012', address: '456 Oak Ave', phone: '555-0102', insurance: 'Aetna HMO', balance: 3400.50 },
        { id: 1003, name: 'Robert Brown', age: 58, diagnosis: 'Heart Disease', medications: 'Atorvastatin 40mg', doctor: 'Dr. Williams', ssn: '567-89-0123', address: '789 Pine Rd', phone: '555-0103', insurance: 'United Healthcare', balance: 15600.00 },
        { id: 1004, name: 'Mary Johnson', age: 67, diagnosis: 'Arthritis', medications: 'Ibuprofen 800mg', doctor: 'Dr. Davis', ssn: '678-90-1234', address: '321 Elm St', phone: '555-0104', insurance: 'Medicare', balance: 890.75 },
        { id: 1005, name: 'Michael Wilson', age: 41, diagnosis: 'Asthma', medications: 'Albuterol inhaler', doctor: 'Dr. Miller', ssn: '789-01-2345', address: '654 Maple Dr', phone: '555-0105', insurance: 'Cigna PPO', balance: 2100.00 }
    ],
    doctors: [
        { id: 201, name: 'Dr. Sarah Smith', specialty: 'Cardiology', phone: '555-1001', email: 'dr.smith@healthcareplus.com', license: 'MD-12345', salary: 285000 },
        { id: 202, name: 'Dr. James Johnson', specialty: 'Neurology', phone: '555-1002', email: 'dr.johnson@healthcareplus.com', license: 'MD-23456', salary: 295000 },
        { id: 203, name: 'Dr. Emily Williams', specialty: 'Pediatrics', phone: '555-1003', email: 'dr.williams@healthcareplus.com', license: 'MD-34567', salary: 245000 },
        { id: 204, name: 'Dr. Michael Davis', specialty: 'Orthopedics', phone: '555-1004', email: 'dr.davis@healthcareplus.com', license: 'MD-45678', salary: 310000 },
        { id: 205, name: 'Dr. Lisa Miller', specialty: 'General Medicine', phone: '555-1005', email: 'dr.miller@healthcareplus.com', license: 'MD-56789', salary: 225000 }
    ],
    appointments: [
        { id: 5001, patientId: 1001, doctorId: 201, date: '2024-01-15', time: '10:00 AM', reason: 'Follow-up checkup', status: 'scheduled' },
        { id: 5002, patientId: 1002, doctorId: 202, date: '2024-01-16', time: '02:00 PM', reason: 'Consultation', status: 'scheduled' },
        { id: 5003, patientId: 1003, doctorId: 203, date: '2024-01-17', time: '09:30 AM', reason: 'Routine examination', status: 'completed' }
    ],
    billing: [
        { id: 7001, patientId: 1001, amount: 1250.00, description: 'Cardiology consultation', date: '2024-01-10', status: 'unpaid', creditCard: '4532-****-****-1234' },
        { id: 7002, patientId: 1002, amount: 3400.50, description: 'Lab tests and consultation', date: '2024-01-11', status: 'unpaid', creditCard: '5425-****-****-5678' },
        { id: 7003, patientId: 1003, amount: 15600.00, description: 'Cardiac surgery', date: '2024-01-12', status: 'partial', creditCard: '3782-****-****-9012' }
    ]
};

// API Keys and Secrets (EXPOSED - VULNERABILITY)
const API_CONFIG = {
    apiKey: 'hcp_live_sk_a3b8c9d1e2f4g5h6i7j8k9l0m1n2o3p4',
    secretKey: 'SECRET_2024_HealthCarePlus_Master_Key_Do_Not_Share',
    databasePassword: 'HCP_DB_P@ssw0rd_2024',
    adminToken: 'admin_token_12345_super_secret',
    encryptionKey: 'AES256-HealthCare-Plus-Encryption-2024',
    awsAccessKey: 'AKIAIOSFODNN7EXAMPLE',
    awsSecretKey: 'wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY'
};

// Simulate SQL Injection vulnerability
function searchData() {
    const query = document.getElementById('searchQuery').value;
    const resultsDiv = document.getElementById('searchResults');
    
    // VULNERABILITY: Direct query concatenation - SQL Injection
    // Simulating: SELECT * FROM doctors WHERE name LIKE '%query%' OR specialty LIKE '%query%'
    
    resultsDiv.innerHTML = '<h3>Search Results:</h3>';
    
    // Vulnerable query simulation - accepts ANY input including SQL commands
    if (query.toLowerCase().includes("' or '1'='1")) {
        // SQL Injection detected - return all data
        resultsDiv.innerHTML += '<div class="alert alert-warning">⚠️ Injected Query Executed</div>';
        resultsDiv.innerHTML += '<h4>All Doctors:</h4>';
        DATABASE.doctors.forEach(doc => {
            resultsDiv.innerHTML += `<div class="result-item">
                <strong>${doc.name}</strong> - ${doc.specialty}<br>
                Email: ${doc.email} | License: ${doc.license} | Salary: $${doc.salary}
            </div>`;
        });
        resultsDiv.innerHTML += '<h4>All Patients:</h4>';
        DATABASE.patients.forEach(patient => {
            resultsDiv.innerHTML += `<div class="result-item">
                <strong>${patient.name}</strong> - Age: ${patient.age}<br>
                SSN: ${patient.ssn} | Diagnosis: ${patient.diagnosis}<br>
                Phone: ${patient.phone} | Address: ${patient.address}
            </div>`;
        });
    } else if (query.toLowerCase().includes('union select')) {
        // UNION based SQL injection
        resultsDiv.innerHTML += '<div class="alert alert-error">🔓 Database Credentials Exposed!</div>';
        resultsDiv.innerHTML += `<pre>
Database: healthcare_plus_db
Host: db.healthcareplus.internal:3306
Username: root
Password: ${API_CONFIG.databasePassword}
Tables: users, patients, doctors, appointments, billing, medical_records
        </pre>`;
    } else {
        // Normal search
        const results = DATABASE.doctors.filter(doc => 
            doc.name.toLowerCase().includes(query.toLowerCase()) || 
            doc.specialty.toLowerCase().includes(query.toLowerCase())
        );
        if (results.length > 0) {
            results.forEach(doc => {
                resultsDiv.innerHTML += `<div class="result-item">
                    <strong>${doc.name}</strong> - ${doc.specialty}<br>
                    Email: ${doc.email} | Phone: ${doc.phone}
                </div>`;
            });
        } else {
            resultsDiv.innerHTML += '<p>No results found. Try: <code>\' or \'1\'=\'1</code> or <code>union select</code></p>';
        }
    }
    
    return false;
}

// VULNERABILITY: Unrestricted File Upload
function uploadFile() {
    const fileInput = document.getElementById('fileUpload');
    const patientId = document.getElementById('patientId').value;
    const resultDiv = document.getElementById('uploadResult');
    
    if (!fileInput.files[0]) {
        resultDiv.innerHTML = '<div class="alert alert-error">Please select a file</div>';
        return;
    }
    
    const file = fileInput.files[0];
    const fileName = file.name;
    
    // VULNERABILITY: No file type validation - accepts ANY file including .php, .exe, .sh
    // VULNERABILITY: Path traversal possible
    resultDiv.innerHTML = `<div class="alert alert-success">
        ✅ File uploaded successfully!<br>
        File: ${fileName}<br>
        Patient ID: ${patientId}<br>
        Path: /uploads/${patientId}/${fileName}<br>
        URL: <a href="/uploads/${patientId}/${fileName}">/uploads/${patientId}/${fileName}</a><br>
        <small>File upload completed successfully.</small>
    </div>`;
}

// VULNERABILITY: XSS in Chat
let chatOpen = false;
function toggleChat() {
    chatOpen = !chatOpen;
    const chatBody = document.getElementById('chatBody');
    if (chatOpen) {
        chatBody.classList.add('active');
    } else {
        chatBody.classList.remove('active');
    }
}

function sendMessage() {
    const input = document.getElementById('chatInput');
    const messagesDiv = document.getElementById('chatMessages');
    const message = input.value;
    
    if (!message.trim()) return;
    
    // VULNERABILITY: Direct HTML injection - XSS
    // No sanitization of user input
    messagesDiv.innerHTML += `<div class="chat-message user">${message}</div>`;
    
    input.value = '';
    
    // Simulate bot response
    setTimeout(() => {
        const botResponse = getBotResponse(message);
        // VULNERABILITY: Bot response also not sanitized
        messagesDiv.innerHTML += `<div class="chat-message bot">${botResponse}</div>`;
        messagesDiv.scrollTop = messagesDiv.scrollHeight;
    }, 1000);
}

function getBotResponse(message) {
    // Vulnerable to XSS through bot responses
    if (message.toLowerCase().includes('password')) {
        return `Admin password is: ${DATABASE.users[0].password}<br>Use it wisely! 😉`;
    } else if (message.toLowerCase().includes('patient')) {
        return `Here are some patient details: ${DATABASE.patients[0].name}, SSN: ${DATABASE.patients[0].ssn}`;
    } else if (message.toLowerCase().includes('api')) {
        return `API Key: ${API_CONFIG.apiKey}<br>Secret: ${API_CONFIG.secretKey}`;
    } else if (message.toLowerCase().includes('help')) {
        return `Try asking about: password, patient, api, database, admin`;
    } else if (message.toLowerCase().includes('database')) {
        return `Database connection: ${API_CONFIG.databasePassword}`;
    }
    return `Hello! I'm here to help. Try keywords like: password, patient, api, database`;
}

// VULNERABILITY: Exposed Admin Functions
function deleteUser(userId) {
    // No authentication check
    console.log(`User ${userId} deleted`);
    alert(`User ${userId} has been deleted!`);
}

function promoteToAdmin(userId) {
    // No authorization check
    console.log(`User ${userId} promoted to admin`);
    alert(`User ${userId} is now an admin!`);
}

// VULNERABILITY: IDOR - Insecure Direct Object Reference
function getPatientData(patientId) {
    // No access control - anyone can access any patient
    const patient = DATABASE.patients.find(p => p.id == patientId);
    return patient;
}

function viewPatientRecord(id) {
    const patient = getPatientData(id);
    if (patient) {
        alert(`Patient: ${patient.name}\nSSN: ${patient.ssn}\nDiagnosis: ${patient.diagnosis}\nMedications: ${patient.medications}`);
    }
}

// VULNERABILITY: Client-side authentication
function login(username, password) {
    // Authentication logic in client-side - completely bypassable
    const user = DATABASE.users.find(u => u.username === username && u.password === password);
    if (user) {
        // Store in localStorage - VULNERABILITY
        localStorage.setItem('currentUser', JSON.stringify(user));
        localStorage.setItem('authToken', API_CONFIG.adminToken);
        return true;
    }
    return false;
}

function isAdmin() {
    // Client-side role check - bypassable
    const user = JSON.parse(localStorage.getItem('currentUser') || '{}');
    return user.role === 'admin';
}

// VULNERABILITY: Debug functions exposed in production
function debugInfo() {
    console.log('=== DEBUG INFO ===');
    console.log('Database:', DATABASE);
    console.log('API Config:', API_CONFIG);
    console.log('Current User:', localStorage.getItem('currentUser'));
    console.log('Auth Token:', localStorage.getItem('authToken'));
}

// Make debug function accessible from console
window.debugInfo = debugInfo;
window.DATABASE = DATABASE;
window.API_CONFIG = API_CONFIG;

// VULNERABILITY: CORS misconfiguration simulation
function makeAPICall(endpoint, data) {
    // Simulated API call with no CORS restrictions
    console.log(`API Call to: ${endpoint}`, data);
    return fetch(endpoint, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-API-Key': API_CONFIG.apiKey
        },
        body: JSON.stringify(data)
    });
}

// VULNERABILITY: Eval usage - Code Injection
function calculateBMI(height, weight) {
    // DANGEROUS: Using eval
    const bmi = eval(`${weight} / ((${height}/100) * (${height}/100))`);
    return bmi;
}

// VULNERABILITY: Insecure random token generation
function generateSessionToken() {
    return 'session_' + Math.random().toString(36).substr(2, 9);
}

// VULNERABILITY: No rate limiting simulation
let apiCallCount = 0;
function apiCallWithoutRateLimit() {
    apiCallCount++;
    console.log(`API call #${apiCallCount} - No rate limiting!`);
}

// VULNERABILITY: Hardcoded credentials
const BACKUP_CREDENTIALS = {
    ftpHost: 'ftp.healthcareplus.com',
    ftpUser: 'backup_admin',
    ftpPassword: 'BackupP@ss2024!',
    sshKey: '-----BEGIN RSA PRIVATE KEY-----\nMIIEpAIBAAKCAQEA...[truncated]',
    databaseBackup: 'mysql://root:HCP_DB_P@ssw0rd_2024@db.internal/healthcare_plus'
};

// Contact form handling
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for contacting us! We will get back to you soon.');
            this.reset();
        });
    }
});

// VULNERABILITY: Information disclosure in error messages
window.onerror = function(msg, url, lineNo, columnNo, error) {
    console.log('Error details:', {
        message: msg,
        url: url,
        line: lineNo,
        column: columnNo,
        error: error,
        stack: error ? error.stack : 'N/A',
        database: DATABASE,
        apiKeys: API_CONFIG
    });
    return false;
};

// Expose functions globally for easy testing
window.searchData = searchData;
window.uploadFile = uploadFile;
window.sendMessage = sendMessage;
window.toggleChat = toggleChat;
window.login = login;
window.getPatientData = getPatientData;
window.deleteUser = deleteUser;
window.promoteToAdmin = promoteToAdmin;
window.makeAPICall = makeAPICall;
