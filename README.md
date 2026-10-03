# DrishyaManch

> **Your Stage. Your Story.**

**DrishyaManch (दृश्य मंच)** is a video-sharing and community platform designed to connect **creators, viewers, and communities** in one digital space.

The project is being developed with a **backend-first approach** using **Node.js, Express.js, MongoDB, and Mongoose**, following a modular REST API architecture designed for scalability and maintainability.

> **Current Status: Backend ~60% Complete**

The core backend foundation, database connectivity, and major data models are established. Authentication, API development, validation, security, testing, and frontend integration are currently under development.

---

## Project Overview

DrishyaManch is built around a simple content lifecycle:

```text
Create → Upload → Discover → Watch → Interact → Connect
```

The platform is designed around three primary areas:

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

### Creators

Creators will be able to:

* Create and manage channels
* Upload and manage videos
* Publish content
* Manage creator profiles
* Interact with viewers
* Create posts and updates

### Viewers

Viewers will be able to:

* Discover videos
* Search for content
* Watch videos
* Like and comment
* Subscribe to creators
* Create and manage playlists
* Interact with the community

### Community

The community layer will support:

* Comments and discussions
* Likes and interactions
* Creator and user posts
* Subscriptions
* Community engagement

### Recommendations

A long-term goal of DrishyaManch is to introduce a recommendation system capable of connecting users with relevant content based on:

* User interests
* Viewing activity
* Engagement
* Search behavior
* Content preferences

---

# Tech Stack

| Technology     | Purpose                          |
| -------------- | -------------------------------- |
| **Node.js**    | JavaScript runtime               |
| **Express.js** | Backend framework and REST APIs  |
| **MongoDB**    | NoSQL database                   |
| **Mongoose**   | MongoDB ODM and schema modeling  |
| **JWT**        | Authentication and authorization |
| **bcrypt**     | Password hashing                 |
| **dotenv**     | Environment configuration        |
| **Nodemon**    | Development workflow             |
| **Postman**    | API development and testing      |

---

# Backend Architecture

DrishyaManch follows a modular backend architecture where each layer has a specific responsibility.

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
                         Models
                           │
                           ▼
                      Mongoose ODM
                           │
                           ▼
                         MongoDB
```

Supporting components include middleware and utility layers:

```text
src/
│
├── controllers/
├── db/
├── middlewares/
├── models/
├── routes/
├── utils/
│
├── app.js
└── index.js
```

This structure helps keep the backend modular, maintainable, testable, and easier to scale as new features are introduced.

---

# Database Architecture

The database is designed around the relationships between users, videos, comments, likes, playlists, subscriptions, and posts.

### ER Diagram

<p align="center">
  <img src="database-erd.png" alt="DrishyaManch Database ER Diagram" width="900">
</p>

### Main Entities

| Entity             | Purpose                                                                        |
| ------------------ | ------------------------------------------------------------------------------ |
| **Users**          | User accounts, profiles, authentication, and activity                          |
| **Videos**         | Video metadata, ownership, views, publishing information, and media references |
| **Comments**       | Comments and discussions associated with videos                                |
| **Likes**          | User interactions with videos and comments                                     |
| **Playlists**      | User-created collections of videos                                             |
| **Subscriptions**  | Relationships between viewers and creators                                     |
| **Tweets / Posts** | Short-form creator and community updates                                       |

The database schema is expected to evolve as additional platform requirements are implemented.

---

# Development Status

| Module                         | Status           |
| ------------------------------ | ---------------- |
| Project setup                  | Completed        |
| Express server                 | Completed        |
| MongoDB connection             | Completed        |
| Database architecture          | Mostly completed |
| Mongoose models                | Mostly completed |
| User module                    | In progress      |
| Authentication & authorization | In progress      |
| Video module                   | In progress      |
| Comments                       | In progress      |
| Likes                          | In progress      |
| Playlists                      | In progress      |
| Subscriptions                  | In progress      |
| Posts / Tweets                 | In progress      |
| Validation & error handling    | In progress      |
| API testing                    | Upcoming         |
| Frontend integration           | Upcoming         |
| Deployment                     | Upcoming         |

### Current Progress

```text
Backend Progress

████████████░░░░░░░░  ~60%
```

The backend is currently the primary development focus before complete frontend integration.

---

# Project Structure

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

The project structure may evolve as additional modules and features are implemented.

---

# Environment Configuration

Create a `.env` file in the project root:

```env
PORT=8000

MONGODB_URL=your_mongodb_connection_string
DB_NAME=your_database_name

ACCESS_TOKEN_SECRET=your_access_token_secret
REFRESH_TOKEN_SECRET=your_refresh_token_secret
```

### Security

Never commit sensitive information to GitHub.

Make sure the following are included in `.gitignore`:

```text
.env
node_modules/
```

Never expose:

* Database credentials
* JWT secrets
* API keys
* Access tokens
* Private configuration

---

# Getting Started

## 1. Clone the Repository

```bash
git clone https://github.com/GoundPrincek/DrishyaManch.git
```

```bash
cd DrishyaManch
```

## 2. Install Dependencies

```bash
npm install
```

## 3. Configure Environment Variables

Create a `.env` file in the project root and configure:

```env
PORT=8000
MONGODB_URL=your_mongodb_connection_string
DB_NAME=your_database_name
ACCESS_TOKEN_SECRET=your_access_token_secret
REFRESH_TOKEN_SECRET=your_refresh_token_secret
```

## 4. Start the Development Server

```bash
npm run dev
```

The backend will run locally on:

```text
http://localhost:8000
```

---

# API Architecture

DrishyaManch follows a modular REST API structure.

```text
/api/users
/api/videos
/api/comments
/api/likes
/api/playlists
/api/subscriptions
/api/tweets
```

## Users

```text
Users
├── Registration
├── Login
├── Logout
├── Profile
└── Authentication
```

## Videos

```text
Videos
├── Upload
├── Update
├── Delete
├── Watch
└── Video Metadata
```

## Comments

```text
Comments
├── Create
├── Read
├── Update
└── Delete
```

## Likes

```text
Likes
├── Like
└── Unlike
```

## Playlists

```text
Playlists
├── Create
├── Update
├── Delete
└── Manage Videos
```

## Subscriptions

```text
Subscriptions
├── Subscribe
└── Unsubscribe
```

## Posts

```text
Posts
├── Create
├── Update
├── Delete
└── Interactions
```

---

# Authentication & Security

Authentication is being designed around secure user authentication and authorization.

Planned security mechanisms include:

* JWT-based authentication
* Access and refresh tokens
* Password hashing using bcrypt
* Protected routes
* Request validation
* Centralized error handling
* Environment-based configuration
* Secure API practices

Security improvements will continue throughout the backend development process.

---

# Testing

API development and testing are being performed using **Postman**.

Testing includes:

* User registration
* User login
* Authentication
* Authorization
* Protected routes
* CRUD operations
* Database operations
* Request validation
* Error handling
* Media/file handling

A more comprehensive automated testing layer will be introduced after the core APIs are stabilized.

---

# Roadmap

## Phase 1 — Backend Foundation

* [x] Project initialization
* [x] Express server setup
* [x] MongoDB/Mongoose integration
* [x] Initial database architecture
* [x] Core data models

## Phase 2 — Core APIs

* [x] Initial user module
* [ ] Complete authentication flow
* [ ] Video APIs
* [ ] Comment APIs
* [ ] Like APIs
* [ ] Playlist APIs
* [ ] Subscription APIs
* [ ] Post/Tweet APIs

## Phase 3 — Backend Hardening

* [ ] Complete request validation
* [ ] Centralized error handling
* [ ] Authentication improvements
* [ ] Security improvements
* [ ] API testing
* [ ] Performance optimization
* [ ] API documentation

## Phase 4 — Frontend Integration

* [ ] Frontend architecture
* [ ] Backend/frontend integration
* [ ] Authentication UI
* [ ] Video upload interface
* [ ] Video discovery
* [ ] Creator dashboard
* [ ] User workflows
* [ ] End-to-end testing

## Phase 5 — Production

* [ ] Production configuration
* [ ] Database deployment
* [ ] Backend deployment
* [ ] Frontend deployment
* [ ] Monitoring
* [ ] Performance optimization
* [ ] Production security

## Phase 6 — Advanced Features

* [ ] Content recommendation system
* [ ] Personalized feed
* [ ] Advanced search
* [ ] Creator analytics
* [ ] Notification system
* [ ] Improved community features
* [ ] Content moderation

---

# Project Vision

DrishyaManch aims to evolve into a complete creator and community platform.

The long-term experience can be represented as:

```text
                    CREATE
                       │
                       ▼
                    UPLOAD
                       │
                       ▼
                   DISCOVER
                       │
                       ▼
                     WATCH
                       │
                       ▼
                   INTERACT
                       │
                       ▼
                    CONNECT
                       │
                       ▼
                 RECOMMENDATIONS
```

The platform's long-term vision includes:

* Scalable backend architecture
* Complete video-sharing functionality
* Creator tools
* Community interaction
* Personalized content discovery
* Search and recommendation systems
* Creator analytics
* Secure authentication
* Production-ready deployment

---

# Learning & Development

DrishyaManch is also being developed as a practical full-stack engineering project to explore:

* REST API development
* Backend architecture
* MongoDB data modeling
* Authentication and authorization
* API security
* CRUD operations
* File and media handling
* Database relationships
* Frontend-backend integration
* Production deployment

The project is being developed incrementally, with the architecture and APIs evolving as new requirements are introduced.

---

# Current Status

> **DrishyaManch is actively under development.**

The backend is approximately **60% complete**, with the core server architecture, database foundation, and major models established.

Current development is focused on:

```text
Authentication
     ↓
Core APIs
     ↓
Validation
     ↓
Security
     ↓
Testing
     ↓
Frontend Integration
     ↓
Deployment
```

Features, APIs, database schemas, and architecture may change as development progresses.

---

# Repository

**GitHub:**
https://github.com/GoundPrincek/DrishyaManch

---

# Developer

Developed as an ongoing **full-stack engineering project** with a backend-first approach.

**DrishyaManch — Your Stage. Your Story.**
