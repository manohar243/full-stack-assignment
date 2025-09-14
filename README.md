# full-stack-assignment

# 🐄 Dairy Billing System

A full-stack web application for managing milk entries, calculating payments, and tracking total sales in a dairy business. Built with React and .NET Core, this system provides secure authentication, clean UI, and robust backend logic.

---

## 📦 Tech Stack

| Layer      | Technology                     |
|------------|--------------------------------|
| Frontend   | React, JavaScript, Plain CSS   |
| Backend    | ASP.NET Core Web API           |
| Database   | SQL Server                     |
| Auth       | JWT-based authentication       |
| Styling    | Plain CSS (no Tailwind)        |

---

## 🚀 Features

- ✅ Login & Register with JWT authentication  
- ✅ Role-based access (optional extension)  
- ✅ Milk entry CRUD (Create, Read, Delete)  
- ✅ Total sale summary with average fat and total amount  
- ✅ Clean, responsive UI with card-based layout  
- ✅ Backend validation for business rules  

---

## 📁 Project Structure
DairyBillingSystem/ 
├── backend/ # .NET Core API 
├── frontend/ # React app 
  └── README.md # This file
  
## Billing System project. It includes:

Project overview

Tech stack

Setup instructions for both frontend and backend

Required environment changes

Commands to run

Notes for deployment or customization



---

## 🧑‍💻 How to Run Locally

### 🔹 1. Clone the Repository

```bash
git clone https://github.com/your-username/dairy-billing-system.git
cd dairy-billing-system

🔹 2. Setup the Backend (.NET Core API)
✅ Prerequisites
.NET SDK 6.0+

SQL Server running locally or remotely

✅ Configuration
Go to backend/appsettings.json

Update the connection string to match your SQL Server setup:

"ConnectionStrings": {
  "DefaultConnection": "Server=localhost;Database=DairyDB;Trusted_Connection=True;"
}


🔹 3. Setup the Frontend (React)
✅ Prerequisites
Node.js (v16+ recommended)

npm or yarn

✅ Install Dependencies
cd frontend
npm install

✅ Configure API Base URL
In frontend/src/api/http.js, make sure the base URL matches your backend:

js
export const http = axios.create({
  baseURL: "http://localhost:5001/api"
});
✅ Run the Frontend
bash
npm run dev
Frontend will run at: http://localhost:5173

🔐 Authentication Flow
Users must register and login to access protected routes.

After login, a JWT token is stored and used for authenticated requests.

Navbar and protected pages are only visible after login.

📌 Notes
Make sure backend and frontend are running simultaneously.

CORS is enabled in backend to allow requests from http://localhost:5173.

You can customize the UI easily using global.css in frontend/src/styles.

📤 Deployment Tips
Use IIS, Nginx, or Azure App Service for backend hosting.

Use Vite’s build output (npm run build) for deploying frontend to Netlify, Vercel, or static hosting.

Store secrets like DB credentials and JWT keys in environment variables.

🙌 Credits
Developed by Turlapati Backend architecture, frontend styling, and business logic validation done with precision and care.

📬 Contact
For questions, improvements, or collaboration, feel free to reach out via GitHub Issues or Discussions.

Code

---

Let me know if you want to include screenshots, API documentation, or a deployment guide for production hosting — I can help you polish this even further.
