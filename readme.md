# 🎬 Video Platform Backend

A backend-focused video platform project built with **Node.js, Express.js, MongoDB, and Mongoose**.

> 🚧 **Project Status:** Backend development is approximately **60% complete**. Core backend architecture and major data models are implemented, while additional APIs, validations, security improvements, testing, and frontend integration are currently in progress.

---

## 📌 About the Project

This project is being developed as a full-stack video platform with functionality around:

- User authentication and account management
- Video upload and management
- Video viewing and watch history
- Comments and likes
- Playlists
- Subscriptions between users/channels
- Tweets/posts
- REST API based backend architecture

The backend is being developed with a modular structure so that new features can be added without affecting existing functionality.

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| **Node.js** | JavaScript runtime |
| **Express.js** | REST API and server framework |
| **MongoDB** | Database |
| **Mongoose** | MongoDB ODM and schema modeling |
| **JWT** | Authentication and authorization |
| **bcrypt** | Password hashing |
| **dotenv** | Environment configuration |
| **Nodemon** | Development-time server restart |

---

## 🗄️ Database Design

The current database design contains the major entities required for the platform.

### ER Diagram

<p align="center">
  <img src="./assets/database-erd.png" alt="Video Platform Database ER Diagram" width="900">
</p>

### Main Collections

- **Users** — user accounts, profiles, authentication data, and watch history
- **Videos** — video metadata, ownership, views, publishing status, and media references
- **Comments** — comments associated with videos and users
- **Likes** — likes associated with videos/comments and users
- **Playlists** — user-created video collections
- **Subscriptions** — subscriber/channel relationships
- **Tweets** — user-created short-form posts

The ERD will continue to evolve as the backend requirements are refined.

---

## 📊 Current Development Status

| Area | Status |
|---|---|
| Project structure | ✅ Completed |
| Database connection | ✅ Completed |
| Core Mongoose models | ✅ Mostly completed |
| User module | ✅ Implemented |
| Video module | 🟡 In progress |
| Comments & likes | 🟡 In progress |
| Playlists | 🟡 In progress |
| Subscriptions | 🟡 In progress |
| Tweets | 🟡 In progress |
| Authentication & authorization | 🟡 In progress |
| API validation & error handling | 🟡 In progress |
| Testing | 🔴 Upcoming |
| Frontend integration | 🔴 Upcoming |
| Deployment | 🔴 Upcoming |

**Overall backend progress: ~60%**

---

## 📁 Project Structure

```text
project/
├── src/
│   ├── controllers/
│   ├── db/
│   ├── middlewares/
│   ├── models/
│   ├── routes/
│   ├── utils/
│   ├── app.js
│   └── index.js
│
├── public/
├── .env
├── .gitignore
├── package.json
└── README.md
```

> The exact folder structure may continue to change as development progresses.

---

## 🔐 Environment Variables

Create a `.env` file in the project root and configure the required environment variables.

```env
PORT=8000
MONGODB_URL=your_mongodb_connection_string
DB_NAME=your_database_name
ACCESS_TOKEN_SECRET=your_access_token_secret
REFRESH_TOKEN_SECRET=your_refresh_token_secret
```

Never commit real secrets or `.env` files to GitHub.

---

## ▶️ Running the Project

### 1. Clone the repository

```bash
git clone <repository-url>
cd <project-folder>
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Create the `.env` file and add the required values.

### 4. Start development server

```bash
npm run dev
```

The backend will run on the configured port, for example:

```text
http://localhost:8000
```

---

## 🔌 API Development

The backend follows a REST API architecture.

The planned API modules include:

```text
/api/users
/api/videos
/api/comments
/api/likes
/api/playlists
/api/subscriptions
/api/tweets
```

Routes and controllers are being developed incrementally as the project progresses.

---

## 🧪 Testing

API testing will be performed using tools such as **Postman** while the remaining backend modules are completed.

Testing will cover:

- Authentication
- Authorization
- CRUD operations
- Request validation
- Error handling
- Database operations
- Protected routes
- File/media handling

---

## 🚀 Roadmap

### Phase 1 — Backend Foundation
- [x] Project initialization
- [x] Express server setup
- [x] MongoDB/Mongoose integration
- [x] Initial database architecture
- [x] Core models

### Phase 2 — Core Backend APIs
- [x] User management foundation
- [ ] Complete authentication flow
- [ ] Video APIs
- [ ] Comment APIs
- [ ] Like APIs
- [ ] Playlist APIs
- [ ] Subscription APIs
- [ ] Tweet APIs

### Phase 3 — Backend Improvements
- [ ] Complete validation
- [ ] Centralized error handling
- [ ] Authentication/security hardening
- [ ] API testing
- [ ] Performance optimization
- [ ] API documentation

### Phase 4 — Full-Stack Integration
- [ ] Frontend development
- [ ] Backend/frontend integration
- [ ] Media upload integration
- [ ] Complete user workflows
- [ ] End-to-end testing

### Phase 5 — Deployment
- [ ] Production configuration
- [ ] Database deployment
- [ ] Backend deployment
- [ ] Frontend deployment
- [ ] Monitoring and final optimization

---

## 📈 Development Philosophy

The project is being developed incrementally rather than building every feature at once.

The current priority is to establish a **stable, scalable backend foundation** first. Once the remaining backend modules are completed and tested, frontend integration and deployment will follow.

---

## 📍 Current Status

**Backend: 60% Complete 🟡**

Development is actively in progress. The database architecture and core backend foundation are in place, while the remaining APIs, security, testing, and integration work are being developed.

---

## 👨‍💻 Development

This repository is currently under active development.

Features, API structures, database relationships, and project architecture may change as development continues.

