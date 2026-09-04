# HealthCare Plus - Intentionally Vulnerable Web Application

⚠️ **WARNING**: This application is INTENTIONALLY VULNERABLE and designed ONLY for security testing practice. DO NOT deploy this to a production environment or use any of the patterns shown here in real applications.

## Overview

HealthCare Plus is a realistic-looking healthcare services website with **100+ intentional security vulnerabilities** for penetration testing practice. The application simulates an enterprise-grade healthcare platform but contains numerous security flaws across all OWASP Top 10 categories.

## Features

- ✅ Professional, industry-grade UI design
- ✅ Fully functional frontend with realistic workflows
- ✅ Simulated backend logic with vulnerable implementations
- ✅ 100+ documented security vulnerabilities
- ✅ Easy to host on free platforms (Vercel, Render, Netlify)
- ✅ No real database required - all data in JavaScript

## Vulnerabilities Included

### 1. **SQL Injection** (Multiple Instances)
- Search functionality: `' OR '1'='1`
- Doctor search with UNION attacks
- Direct SQL console in admin panel

### 2. **Cross-Site Scripting (XSS)**
- Reflected XSS in dashboard welcome message
- Stored XSS in chat widget
- DOM-based XSS in URL parameters

### 3. **Broken Authentication**
- Credentials in HTML comments
- Client-side authentication logic
- Passwords in GET parameters
- Session tokens in URLs
- Weak session generation

### 4. **Sensitive Data Exposure**
- API keys hardcoded in JavaScript
- Database credentials in client code
- Full system configuration exposed
- SSN and medical records without encryption
- AWS credentials in source code

### 5. **Broken Access Control**
- IDOR (Insecure Direct Object Reference) - access any patient record
- Missing function level access control
- Admin panel accessible without authentication
- No authorization checks on API endpoints

### 6. **Security Misconfiguration**
- Debug mode enabled in production
- Detailed error messages with stack traces
- Default credentials documented
- CORS misconfiguration (allows all origins)
- Exposed admin interfaces

### 7. **Cross-Site Request Forgery (CSRF)**
- No CSRF tokens on forms
- State-changing operations via GET requests

### 8. **Insecure Deserialization**
- Unsafe JSON parsing with automatic execution
- Session deserialization without validation

### 9. **Using Components with Known Vulnerabilities**
- Outdated libraries referenced
- Vulnerable dependencies mentioned

### 10. **Insufficient Logging & Monitoring**
- No audit logs
- Security events not recorded
- Failed login attempts not tracked

### Additional Vulnerabilities:

**11. Command Injection**
- Ping utility with no input sanitization
- Execute commands: `localhost; cat /etc/passwd`

**12. File Upload Issues**
- Unrestricted file upload (accepts .php, .exe, .sh)
- No file type validation
- No size limits
- Path traversal possible

**13. SSRF (Server-Side Request Forgery)**
- Webhook trigger can access internal resources
- Import from URL feature
- Access AWS metadata: `http://169.254.169.254/`

**14. XXE (XML External Entity)**
- XML parser in admin panel
- Can read local files via entities

**15. Information Disclosure**
- Source code comments with credentials
- Debug functions exposed globally
- Directory listings enabled
- Backup files accessible

**16. Mass Assignment**
- Create user with arbitrary fields
- Can set role=admin during registration

**17. Unvalidated Redirects**
- Open redirect vulnerability
- Can redirect to phishing sites

**18. Session Management Issues**
- Predictable session tokens
- No session expiration
- Session fixation possible

**19. Insufficient Rate Limiting**
- Unlimited API calls
- Brute force attacks possible

**20. Improper Error Handling**
- Verbose error messages
- Stack traces exposed
- Database queries in errors

## Pages Included

1. **index.html** - Homepage with search, file upload, chat widget
2. **login.html** - Login page with exposed credentials
3. **dashboard.html** - Admin dashboard with IDOR, command injection, XXE
4. **admin.html** - Admin panel with SSRF, deserialization, SQL console
5. **api-docs.html** - Complete API documentation with testing interface
6. **patients.html** - Patient records with data export

## Default Credentials

```
Admin:     admin / admin123
Doctor:    doctor1 / doctor123
Patient:   patient1 / patient123
Nurse:     nurse1 / nurse123
Test User: testuser / test
```

## API Keys (Exposed for Testing)

```
API Key: hcp_live_sk_a3b8c9d1e2f4g5h6i7j8k9l0m1n2o3p4
Secret Key: SECRET_2024_HealthCarePlus_Master_Key_Do_Not_Share
Admin Token: admin_token_12345_super_secret
Database Password: HCP_DB_P@ssw0rd_2024
```

## Quick Start

### Local Testing

1. Clone or download all files
2. Open `index.html` in a web browser
3. No server required - all JavaScript runs client-side

### Deploy to Vercel

1. Install Vercel CLI: `npm install -g vercel`
2. Navigate to project folder: `cd healthcare-plus`
3. Run: `vercel --prod`
4. Access your deployed site

### Deploy to Netlify

1. Drag and drop the folder to Netlify Dashboard
2. Or use Netlify CLI:
   ```bash
   npm install -g netlify-cli
   netlify deploy --prod --dir=.
   ```

### Deploy to Render

1. Create new Static Site on Render
2. Connect to your GitHub repository
3. Set publish directory to root
4. Deploy

### Deploy to GitHub Pages

1. Create a new repository
2. Upload all files
3. Go to Settings > Pages
4. Select main branch
5. Access at `username.github.io/repo-name`

## Testing Methodology

### SQL Injection Testing
```javascript
// In search box, try:
' OR '1'='1
' UNION SELECT username,password FROM users--
'; DROP TABLE patients--
```

### XSS Testing
```javascript
// In chat or URL parameters:
<script>alert('XSS')</script>
<img src=x onerror=alert('XSS')>
```

### IDOR Testing
```
// Access different patient records:
/dashboard.html?user=admin&token=<any-token>
// Change patient ID: 1001, 1002, 1003, 1004, 1005
```

### Command Injection
```bash
# In ping field:
localhost; ls
localhost && cat /etc/passwd
localhost | whoami
```

### SSRF Testing
```
http://localhost:3306
http://169.254.169.254/latest/meta-data/
file:///etc/passwd
```

## Tools to Use

- **Burp Suite** - Intercept and modify requests
- **OWASP ZAP** - Automated vulnerability scanning
- **SQLMap** - Automated SQL injection
- **Nikto** - Web server scanner
- **Nmap** - Port scanning
- **DirBuster** - Directory enumeration
- **XSSer** - XSS testing
- **Commix** - Command injection testing

## Browser Console Commands

Open browser console (F12) and try:

```javascript
// View database
DATABASE

// View API keys
API_CONFIG

// Get debug info
debugInfo()

// Access patient data
getPatientData(1001)

// Delete user (no auth needed)
deleteUser(1)

// Promote to admin
promoteToAdmin(3)
```

## Learning Resources

This application covers vulnerabilities from:
- OWASP Top 10 (2021)
- SANS Top 25
- CWE/SANS Top 25 Most Dangerous Software Errors

## File Structure

```
healthcare-plus/
├── index.html          # Main homepage
├── login.html          # Login page
├── dashboard.html      # Admin dashboard
├── admin.html          # Admin panel
├── api-docs.html       # API documentation
├── patients.html       # Patient records
├── styles.css          # Professional styling
├── script.js           # Vulnerable JavaScript
└── README.md           # This file
```

## Legal Disclaimer

This application is provided for EDUCATIONAL PURPOSES ONLY. The vulnerabilities are intentional and should only be used in controlled environments for learning penetration testing techniques.

**DO NOT:**
- Deploy to production
- Use on systems you don't own
- Use patterns from this code in real applications
- Attack systems without permission

**The creators are not responsible for any misuse of this application.**

## Security Testing Checklist

- [ ] SQL Injection in search
- [ ] XSS in chat widget
- [ ] XSS in URL parameters
- [ ] IDOR to access patient 1001-1005
- [ ] Access admin panel without login
- [ ] Upload PHP/executable files
- [ ] Command injection in ping
- [ ] SSRF to internal resources
- [ ] XXE to read local files
- [ ] Export patient data without auth
- [ ] View credentials in HTML source
- [ ] Access API keys in JavaScript
- [ ] Bypass client-side authentication
- [ ] Test mass assignment in user creation
- [ ] Trigger open redirect
- [ ] Deserialize malicious session data
- [ ] Execute SQL in database console
- [ ] Delete users without authorization
- [ ] Escalate privileges to admin

## Support

This is a practice application. For questions about vulnerabilities or testing techniques, refer to:
- OWASP.org
- PortSwigger Web Security Academy
- PentesterLab
- HackTheBox

Happy Hacking! 🎯

---

**Version:** 1.0  
**Last Updated:** 2024  
**Vulnerability Count:** 100+
