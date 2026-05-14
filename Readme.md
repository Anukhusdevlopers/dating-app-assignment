📌 Submission Overview

This project is a production-level backend system for a Dating Application built using Node.js, Express.js, MongoDB, JWT authentication, and MVC architecture.

It fulfills all required modules including matching system, chat system, verification system, blocking, reporting, privacy controls, premium features, media sharing, and admin moderation system.

The project is designed with a scalable, secure, and real-world production architecture.

🚀 Tech Stack
Node.js
Express.js
MongoDB (Mongoose)
JWT Authentication
REST APIs
Multer (File Uploads)
MVC Architecture
Secure Middleware-based design


📁 Project Structure
/controllers
/models
/routes
/middlewares
/config
/utils
/uploads

index.js   (Entry Point)
/.env

👉 Note: Application runs using:

node index.js
🔐 Authentication System

JWT-based authentication is used for all protected APIs.

Header Format
Authorization: Bearer <JWT_TOKEN>
👤 1. User Match System
APIs Implemented
Feature	Endpoint
Like User	POST /api/match/like/:id
Dislike User	POST /api/match/dislike/:id
Super Like	POST /api/match/super-like/:id
Match Logic
If both users like each other → Match is created automatically
Prevents:
Self-like
Duplicate likes
Blocked-user interactions
💘 2. Match Listing APIs
Feature	Endpoint
Get All Matches	GET /api/match/
Recent Matches	GET /api/match/recent
Match Details	GET /api/match/:id
Unread Count	GET /api/match/unread/count
💬 3. Chat System (Match-Based Only)
APIs
Feature	Endpoint
Send Message	POST /api/chat/send
Get Chat	GET /api/chat/:matchId
Rules
Only matched users can chat
No chat allowed without a valid match
Media sharing supported via upload system
🚫 4. Block System
APIs
POST /api/block/:id → Block User
DELETE /api/block/:id → Unblock User
POST /api/block/restrict/:id → Restrict User
Behavior

Blocked users:

Cannot match
Cannot chat
Cannot view profile
Excluded from feed
🚨 5. Report & Abuse System
Features
Report user with reason & description
Screenshot support (optional)
Report counter tracking
Admin review flag system
🧠 6. Face Verification System
APIs
Feature	Endpoint
Submit Verification	POST /api/verify/face
Pending Requests	GET /api/verify/pending
Approve User	PUT /api/verify/approve/:id
Reject User	PUT /api/verify/reject/:id
Flow
User uploads selfie + profile image
→ Verification request created
→ Status: Pending
→ Admin approves/rejects
→ User becomes Verified/Rejected
Features
Duplicate verification prevention
Image validation
Verified badge system
Admin moderation logs
🕵️ 7. Fake Profile Detection

Implemented backend checks:

Device ID tracking
Duplicate account detection
Rapid swipe/like detection
Spam activity detection
Suspicious account flagging
🔒 8. Privacy & Safety System
Features
Hide profile toggle
Last seen visibility control
Profile privacy settings
Online/offline visibility support
💎 9. Advanced Features
Profile Boost system
Premium users support
Super likes
AI compatibility score placeholder
Location-based filtering ready
Age range filtering support
Interest matching logic
Profile completeness scoring
📁 10. Media Sharing System
Supported Media
Images
Videos
Voice notes
PDFs (premium only)
Features
File validation (type/size)
Secure upload handling
Multer-based storage system
🛡 11. Security Implementation
JWT Authentication middleware
Input validation
Duplicate prevention logic
Secure file upload handling
Role-based access control (Admin/User)
Centralized error handling
Blocked user protection system
👮 12. Admin Moderation System

Admin can:

Approve / Reject verification
Suspend / blacklist users
Review reports
Monitor suspicious activities
Manage moderation logs
📊 13. Database Collections
Users
Likes
Matches
Chats
Blocks
Reports
Verifications
Media Uploads
Premium Users
Moderation Logs
⚙️ Installation
git clone https://github.com/Anukhusdevlopers/dating-app-assignment.git
cd dating-app-backend
npm install
🚀 Run Project
node index.js

or (if nodemon used)

nodemon index.js
🔐 Environment Variables

Create .env file:

PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
📮 API Testing

All APIs are tested using Postman Collection:

Authentication APIs
Match APIs
Chat APIs
Block APIs
Verification APIs
Admin APIs
Privacy APIs
Media APIs

📌 Screenshots and testing proofs are attached in the submission.

📌 Key Highlights

✔ Production-level backend architecture
✔ Clean MVC structure
✔ Secure authentication system
✔ Real-world Tinder-style matching logic
✔ Admin moderation system
✔ Face verification module
✔ Scalable & extensible design
✔ No hardcoded logic
✔ Proper validations everywhere

🚀 GitHub Repository

👉 Project Link:
[Your GitHub Repo Link Here]

📷 Screenshots

✔ API testing screenshots included
✔ Postman verification results attached
✔ MongoDB data verification screenshots included

📌 Final Note

This backend system is built as a complete production-ready core module for a dating application, focusing on:

Security
Scalability
Fake profile prevention
Clean architecture
Real-world production logic
Admin moderation handling
👨‍💻 Submission Status

✔ All required modules completed
✔ APIs implemented and tested
✔ MVC architecture followed
✔ Authentication + Authorization implemented
✔ Ready for production-level review