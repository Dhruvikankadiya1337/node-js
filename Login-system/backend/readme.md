# 🔐 Login System Project

A **secure login system** built with **Node.js, Express, MongoDB, JWT & Nodemailer**.  
Users can **signup, verify email via OTP, login, access protected routes, and logout**.

---

## 🌟 Features

- 📝 **User Registration** with email & password  
- 🔒 **Password hashing** using bcrypt  
- 📧 **OTP-based Email Verification**  
- 🔑 **Login** with JWT token generation  
- 🛡️ **Protected Routes** (JWT authentication required)  
- 🚪 **Logout Functionality**  
- ⚠️ **Error handling and validation**  

---

## 🛠️ Tech Stack

- **Backend:** Node.js, Express.js  
- **Database:** MongoDB Atlas (Mongoose)  
- **Authentication:** JWT, bcrypt  
- **Email Service:** Nodemailer (Gmail SMTP)  
- **Environment Management:** dotenv  
- **API Testing:** Postman  

---

## 🔄 Authentication Flow

### 1️⃣ Signup
- Register with email & password  
- Password is hashed  
- OTP sent to email  

### 2️⃣ OTP Verification
- Submit OTP  
- Verified against database  
- User marked as verified  

### 3️⃣ Login
- Login with email & password  
- Password checked using bcrypt  
- JWT token generated  

### 4️⃣ Access Protected Routes
- JWT sent in request headers  
- Middleware verifies token  
- Only valid tokens allow access  

### 5️⃣ Logout
- Client deletes JWT token  
- Session ends  

---

d

