# Project Kickoff: QR-Based Restaurant Ordering & Management System

Welcome to **Phase 1 — Foundation** of our restaurant ordering platform This document outlines our architectural strategy, how we are structuring the codebase so we can all work in parallel, and our immediate action items to get the initial environments up and running

## 🏗️ 1. Architecture Strategy: The Monorepo
To ensure seamless collaboration and type safety across our entire stack, we will use a **Monorepo** (via npm or Yarn workspaces). Because both our frontend and backend rely on TypeScript, this allows us to share data models (like `Order` and `Bill` interfaces) and validation schemas without duplicating code 

We will start with a **modular monolith** for the backend, which will make it much easier to extract into microservices (Auth, Order, Menu, etc.) later when scaling requires it

### Directory Structure
    /qr-restaurant-platform
    │
    ├── /apps
    │   ├── /customer-app      # Next.js mobile-first web app
    │   ├── /admin-cms         # React/Next.js dashboard for staff
    │   ├── /kitchen-kds       # React/Next.js Kitchen Display System
    │   └── /backend           # NestJS modular monolith
    │
    ├── /packages
    │   ├── /shared-types      # Shared TypeScript interfaces 
    │   ├── /shared-ui         # Shared UI components (buttons, modals)
    │   └── /validation        # Shared Zod schemas for forms and API payloads
    │
    ├── /infrastructure        # DevOps & Deployment configs
    │   ├── /terraform         # Infrastructure as Code for AWS provisioning
    │   └── /local-dev         # Docker-compose files for local development
    │
    └── .github
        └── /workflows         # GitHub Actions for CI/CD pipelines

---

## 🧑‍💻 2. Division of Responsibilities

### 🎨 Frontend Lead
**Focus:** User interfaces, client-side state, and QR code interaction
*   **Customer App:** Next.js, React, Tailwind CSS, TanStack Query Mobile-first focus since it is accessed via QR
*   **Admin CMS:** React, Material UI, React Hook Form, Zod 
*   **Kitchen Display System (KDS):** Optimized UI for fast status updates and large order cards

### ⚙️ Backend Lead
**Focus:** Core business logic, APIs, and data integrity
*   **Core API:** NestJS and REST APIs Ensure the backend acts as the absolute source of truth for pricing, availability, and taxes
*   **Database:** PostgreSQL with Prisma ORM
*   **Real-Time Sync:** WebSockets / Socket.IO for real-time kitchen and customer updates

### ☁️ DevOps & QA Lead 
**Focus:** Infrastructure, deployments, and product validation.
*   **Local Dev Standardization:** Establishing a unified local development environment utilizing Windows Subsystem for Linux (WSL 2 running Ubuntu) alongside Visual Studio Code.
*   **Infrastructure & CI/CD:** Writing Dockerfiles for containerization, GitHub Actions for deployment pipelines, and managing AWS infrastructure (including S3 for file storage) using Terraform
*   **Automated Validation:** Engineering end-to-end UI and API test automation frameworks using Python and Robot Framework to validate concurrency, order states, and strictly enforce Role-Based Access Control (RBAC)

---

## 🚀 3. Immediate Action Items (Sprint 1)

To get us unblocked and coding, here are the first tasks for each of us:

**DevOps (Setup Local Infrastructure)**
1. Initialize the monorepo repository and configure shared formatting (`.prettierrc`, `.eslintrc`).
2. Provide the local database and caching infrastructure via Docker. 

**Backend (API Initialization)**
1. Scaffold the NestJS application inside `/apps/backend`
2. Set up the exact modular folder structure outlined in the spec (`/auth`, `/users`, `/restaurants`, `/orders`, etc.)
3. Connect Prisma ORM to the local PostgreSQL container and define the initial core entities (`users`, `restaurants`, `tables`)

**Frontend (Scaffolding)**
1. Initialize the Next.js apps in `/apps/customer-app` and `/apps/admin-cms`
2. Set up Tailwind CSS for the customer app and Material UI for the CMS
3. Configure TanStack Query for future API integrations
