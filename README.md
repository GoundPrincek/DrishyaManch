# 🎬 DrishyaManch

> **Your Stage. Your Story.**

**DrishyaManch (दृश्य मंच)** is a video-sharing and content platform designed to bring **creators, viewers, and communities** together in one digital space.

The platform is being developed with a backend-first approach using **Node.js, Express.js, MongoDB, and Mongoose**, following a modular REST API architecture.

> 🚧 **Current Status: Backend ~60% Complete**

The core backend foundation, database connectivity, and major data models are in place. Authentication, APIs, validation, security improvements, testing, and frontend integration are currently being developed.

---

## ✨ Project Concept

DrishyaManch is built around a simple idea:

**Create → Upload → Discover → Watch → Interact → Connect**

The platform aims to provide separate but connected experiences for creators, viewers, and the wider community.

### Core Platform Architecture

```text
                         DrishyaManch
                              │
             ┌────────────────┼────────────────┐
             │                │                │
             ▼                ▼                ▼
         Creators          Viewers         Community
             │                │                │
          Upload             Watch          Comments
          Videos             Search           Likes
         Channels             Feed            Posts
             │                │                │
             └────────────────┼────────────────┘
                              │
                              ▼
                       Recommendations
```

### 👨‍🎨 Creators

- Create and manage channels
- Upload and manage videos
- Publish content
- Interact with viewers
- Create posts and updates

### 👀 Viewers

- Discover videos
- Search for content
- Watch and organize videos
- Like and comment
- Subscribe to creators

### 💬 Community

- Comments and discussions
- Likes and interactions
- Creator/user posts
- Subscriptions
- Community engagement

### 🧠 Recommendations

The long-term goal is to build a recommendation system that can connect users with relevant content based on their interests, activity, and viewing behavior.

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| **Node.js** | JavaScript runtime |
| **Express.js** | Backend framework and REST APIs |
| **MongoDB** | NoSQL database |
| **Mongoose** | MongoDB ODM and schema modeling |
| **JWT** | Authentication and authorization |
| **bcrypt** | Password hashing |
| **dotenv** | Environment configuration |
| **Nodemon** | Development workflow |

---

## 🏗️ Backend Architecture

DrishyaManch follows a modular backend structure designed to separate responsibilities and make the application easier to maintain and scale.

```text
Client
  │
  ▼
Routes
  │
  ▼
Controllers
  │
  ▼
Models / Database
  │
  ▼
MongoDB
```

Supporting layers include:

```text
src/
├── controllers/
├── db/
├── middlewares/
├── models/
├── routes/
├── utils/
├── app.js
└── index.js
```

This architecture allows individual modules to be developed and tested independently.

---

## 🗄️ Database Architecture

The database is designed around the relationships between users, videos, comments, likes, playlists, subscriptions, and posts.

### ER Diagram

<p align="center">
  <img src="database-erd.png" alt="DrishyaManch Database ER Diagram" width="900">
</p>

### Main Entities

| Entity | Purpose |
|---|---|
| **Users** | Accounts, profiles, authentication, and user activity |
| **Videos** | Video metadata, ownership, views, publishing information, and media references |
| **Comments** | User comments associated with videos |
| **Likes** | User interactions with videos and comments |
| **Playlists** | User-created collections of videos |
| **Subscriptions** | Relationships between viewers and creators |
| **Tweets / Posts** | Short-form creator and community updates |

> The database schema will continue to evolve as additional platform requirements are implemented.

---

## 📊 Development Status

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
| Posts / tweets | 🟡 In progress |
| Validation & error handling | 🟡 In progress |
| API testing | 🔴 Upcoming |
| Frontend integration | 🔴 Upcoming |
| Deployment | 🔴 Upcoming |

### Overall Progress

**Backend: ~60% 🟡**

The project is actively under development, with the backend currently being prioritized before complete frontend integration.

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
├── assets/
│
├── .env
├── .gitignore
├── package.json
└── README.md
```

> The project structure may evolve as new features and modules are added.

---

## 🔐 Environment Configuration

Create a `.env` file in the project root:

```env
PORT=8000

MONGODB_URL=your_mongodb_connection_string
DB_NAME=your_database_name

ACCESS_TOKEN_SECRET=your_access_token_secret
REFRESH_TOKEN_SECRET=your_refresh_token_secret
```

### Security

Never commit real credentials, database connection strings, tokens, or secrets to GitHub.

Make sure `.env` is included in `.gitignore`.

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/GoundPrincek/DrishyaManch.git
cd DrishyaManch
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env` file and add the required MongoDB and authentication configuration.

### 4. Start the Development Server

```bash
npm run dev
```

The backend will run on:

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

### Planned Responsibilities

```text
Users
 ├── Registration
 ├── Login
 ├── Profile
 └── Authentication

Videos
 ├── Upload
 ├── Update
 ├── Delete
 ├── Watch
 └── Video metadata

Comments
 ├── Create
 ├── Read
 ├── Update
 └── Delete

Likes
 ├── Like
 └── Unlike

Playlists
 ├── Create
 ├── Update
 ├── Delete
 └── Manage videos

Subscriptions
 ├── Subscribe
 └── Unsubscribe

Posts
 ├── Create
 ├── Update
 ├── Delete
 └── Interactions
```

---

## 🧪 Testing

API testing is being performed during backend development using tools such as **Postman**.

Testing covers:

- Authentication
- Authorization
- CRUD operations
- Protected routes
- Request validation
- Database operations
- Error handling
- Media/file handling

A more comprehensive automated testing layer will be added after the core APIs are stabilized.

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
- [ ] Post/tweet APIs

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
- [ ] User workflows
- [ ] End-to-end testing

### Phase 5 — Production

- [ ] Production configuration
- [ ] Database deployment
- [ ] Backend deployment
- [ ] Frontend deployment
- [ ] Monitoring
- [ ] Performance optimization

---

## 🎯 Project Vision

DrishyaManch aims to evolve into a complete creator and community platform where users can:

```text
Create
   ↓
Upload
   ↓
Discover
   ↓
Watch
   ↓
Interact
   ↓
Connect
```

The long-term vision includes a scalable backend, rich creator tools, community interaction, personalized content discovery, and a complete video-sharing experience.

---

## 🚧 Development Status

> **DrishyaManch is currently under active development.**

The backend is approximately **60% complete**. The core architecture, database foundation, and major models have been established, while authentication, remaining APIs, validation, security, testing, and frontend integration are being developed.

Features and architecture may change as development progresses.

---

## 👨‍💻 Development

Built as an ongoing **full-stack development project**, with the backend being developed first to establish a stable and scalable foundation for the complete platform.

**DrishyaManch — Your Stage. Your Story.**
