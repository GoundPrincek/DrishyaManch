# 🎬 DrishyaManch

> **Your Stage. Your Story.**

**DrishyaManch (दृश्य मंच)** is a video-sharing and content platform currently under active development.

The project is designed around a simple idea: **a digital stage where creators can share visual content and viewers can watch, interact, and build their own content experience.**

The backend is being developed using **Node.js, Express.js, MongoDB, and Mongoose**, with a modular REST API architecture.

> 🚧 **Current Status: Backend ~60% Complete**
>
> Core backend architecture, database connectivity, and major data models are in place. Remaining APIs, validation, security improvements, testing, and frontend integration are currently under development.

---

## ✨ Project Concept

DrishyaManch brings together **creators, viewers, and the community** through a single video-sharing platform.

### Core Platform Architecture

```text
                DrishyaManch
                     │
    ┌────────────────┼────────────────┐
    ↓                ↓                ↓
 Creators          Viewers         Community
    │                │                │
 Upload             Watch          Comments
 Videos             Search         Likes
 Channels           Feed           Posts
    │                │                │
    └────────────────┼────────────────┘
                     ↓
                Recommendations
```

The platform is being designed around three major experiences:

- **Creators** — upload videos and manage their channels.
- **Viewers** — discover, watch, search, and organize content.
- **Community** — interact through comments, likes, posts, and subscriptions.
- **Recommendations** — connect users with relevant content based on their activity and interests.

The goal is to build a scalable backend foundation that can support a complete video-sharing and creator ecosystem.

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| **Node.js** | JavaScript runtime |
| **Express.js** | REST API and backend framework |
| **MongoDB** | NoSQL database |
| **Mongoose** | MongoDB ODM and schema modeling |
| **JWT** | Authentication and authorization |
| **bcrypt** | Password hashing |
| **dotenv** | Environment configuration |
| **Nodemon** | Development server workflow |

---

## 🗄️ Database Architecture

The database is designed around the core relationships between users, videos, comments, likes, playlists, subscriptions, and tweets/posts.

### ER Diagram

<p align="center">
  <img src="![Uploading ChatGPT Image Aug 10, 2026, 11_38_18 AM.png…]()
" alt="DrishyaManch Database ER Diagram" width="900">
</p>

### Main Entities

- **Users** — accounts, profiles, authentication information, and user activity
- **Videos** — video metadata, ownership, views, publishing information, and media references
- **Comments** — user comments associated with videos
- **Likes** — user interactions with videos/comments
- **Playlists** — collections of videos created by users
- **Subscriptions** — relationships between subscribers and creators/channels
- **Tweets** — short-form posts and creator/user updates

> The database design is still evolving as new backend requirements are implemented.

---

## 📊 Current Development Status

| Module | Status |
|---|---|
| Project setup | ✅ Completed |
| Express server | ✅ Completed |
| MongoDB connection | ✅ Completed |
| Database architecture | ✅ Mostly completed |
| Mongoose models | ✅ Mostly completed |
| User module | 🟡 In progress |
| Authentication & authorization | 🟡 In progress |
| Video module | 🟡 In progress |
| Comments | 🟡 In progress |
| Likes | 🟡 In progress |
| Playlists | 🟡 In progress |
| Subscriptions | 🟡 In progress |
| Tweets / posts | 🟡 In progress |
| Validation & error handling | 🟡 In progress |
| API testing | 🔴 Upcoming |
| Frontend integration | 🔴 Upcoming |
| Deployment | 🔴 Upcoming |

### Overall Progress

**Backend: ~60% 🟡**

Development is actively continuing.

---

## 📁 Project Structure

```text
DrishyaManch/
│
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
│
├── assets/
│
├── .env
├── .gitignore
├── package.json
└── README.md
```

The structure may evolve as additional modules are implemented.

---

## 🔐 Environment Configuration

Create a `.env` file in the project root.

```env
PORT=8000
MONGODB_URL=your_mongodb_connection_string
DB_NAME=your_database_name
ACCESS_TOKEN_SECRET=your_access_token_secret
REFRESH_TOKEN_SECRET=your_refresh_token_secret
```

**Never commit real credentials or secrets to GitHub.**

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone <repository-url>
cd DrishyaManch
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Create `.env` and add the required configuration.

### 4. Start the development server

```bash
npm run dev
```

The backend will run on the configured port:

```text
http://localhost:8000
```

---

## 🔌 Planned API Modules

The backend follows a modular REST API architecture.

```text
/api/users
/api/videos
/api/comments
/api/likes
/api/playlists
/api/subscriptions
/api/tweets
```

These modules are being implemented and tested incrementally.

---

## 🧪 Testing

API testing is being performed during backend development using tools such as **Postman**.

Testing will cover:

- Authentication
- Authorization
- CRUD operations
- Request validation
- Protected routes
- Database operations
- Error handling
- Media/file handling

A more complete automated testing layer is planned after the core API modules are stabilized.

---

## 🗺️ Roadmap

### Phase 1 — Backend Foundation

- [x] Project initialization
- [x] Express server setup
- [x] MongoDB/Mongoose integration
- [x] Initial database architecture
- [x] Core data models

### Phase 2 — Core APIs

- [x] Initial user module
- [ ] Complete authentication flow
- [ ] Video APIs
- [ ] Comment APIs
- [ ] Like APIs
- [ ] Playlist APIs
- [ ] Subscription APIs
- [ ] Tweet/post APIs

### Phase 3 — Backend Hardening

- [ ] Complete request validation
- [ ] Centralized error handling
- [ ] Authentication/security improvements
- [ ] API testing
- [ ] Performance optimization
- [ ] API documentation

### Phase 4 — Frontend Integration

- [ ] Frontend development
- [ ] Backend/frontend integration
- [ ] Media upload integration
- [ ] Complete user workflows
- [ ] End-to-end testing

### Phase 5 — Production

- [ ] Production configuration
- [ ] Database deployment
- [ ] Backend deployment
- [ ] Frontend deployment
- [ ] Monitoring
- [ ] Final performance optimization

---

## 🎯 Project Vision

DrishyaManch is being built with the long-term goal of becoming a complete platform for:

**Create → Upload → Discover → Watch → Interact → Connect**

The current priority is to finish and stabilize the backend before moving into full frontend integration.

---

## 📌 Development Status

> **DrishyaManch is currently under active development.**

The backend is approximately **60% complete**. Database architecture and core backend foundations are established, while remaining APIs, security, validation, testing, and integration work are actively being developed.

Features and architecture may change as the project progresses.

---

## 👨‍💻 Development

Built as an ongoing full-stack development project with the backend being developed first to establish a stable and scalable foundation.

**DrishyaManch — Your Stage. Your Story.**
