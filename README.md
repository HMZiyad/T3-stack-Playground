# 🚀 T3 Adventure: Interactive Playground

Welcome to the **T3 Adventure**! This isn't just a boilerplate—it's a fully gamified, interactive learning platform designed to take you from a T3 Novice to a Full-Stack Master.

## 🌟 Features

-   **Gamified Learning**: A vibrant, child-friendly UI utilizing a custom "Adventure Map" dashboard.
-   **Interactive Code Editor**: Write real TypeScript, Prisma, and Zod code directly in the browser using the embedded Monaco Editor.
-   **"Teach then Practice" Methodology**: Every level starts with a clear, analogy-based lesson followed by a hands-on coding mission.
-   **Live Lab**: A fully functional "Guestbook" application to demonstrate full-stack type safety in action.

## 🗺️ The Curriculum

Complete these 6 levels to master the stack:

1.  **🛡️ Level 1: The Shield (TypeScript & Zod)**
    *   **Goal**: Master data validation.
    *   **Mission**: Write a Zod schema to protect the database from bad inputs.

2.  **💎 Level 2: The Chest (Prisma)**
    *   **Goal**: Learn database modeling.
    *   **Mission**: Design a `Post` model using Prisma Schema Language.

3.  **🧙‍♂️ Level 3: The Messenger (tRPC)**
    *   **Goal**: Build type-safe APIs without the headache.
    *   **Mission**: Create a `hello` procedure that communicates between client and server.

4.  **🖼️ Level 4: The Canvas (Next.js)**
    *   **Goal**: Understand App Router & Server Components.
    *   **Mission**: Fetch data directly inside a Server Component.

5.  **🔐 Level 5: The Key (NextAuth.js)**
    *   **Goal**: Secure your application.
    *   **Mission**: Implement session checks and protected routes.

6.  **🎨 Level 6: The Paint (Tailwind CSS)**
    *   **Goal**: Style with speed.
    *   **Mission**: Use utility classes to build a beautiful UI component.

## 🛠️ Tech Stack

*   **Framework**: [Next.js](https://nextjs.org) (App Router)
*   **Language**: [TypeScript](https://www.typescriptlang.org)
*   **Styling**: [Tailwind CSS](https://tailwindcss.com)
*   **Database**: [Prisma](https://prisma.io) (SQLite)
*   **API**: [tRPC](https://trpc.io)
*   **Auth**: [NextAuth.js](https://next-auth.js.org)

## ⚡ Getting Started

1.  **Install Dependencies**:
    ```bash
    npm install
    ```

2.  **Set up Environment**:
    The project comes with a `.env` file pre-configured for local development (SQLite).
    ```env
    DATABASE_URL="file:./db.sqlite"
    NEXTAUTH_SECRET="supersecret"
    NEXTAUTH_URL="http://localhost:3000"
    ```

3.  **Initialize Database**:
    ```bash
    npx prisma db push
    ```

4.  **Start the Adventure**:
    ```bash
    npm run dev
    ```
    Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🧪 Admin Credentials (for Guestbook)

To test the "Delete" functionality in the Guestbook lab:
*   **Username**: `admin`
*   **Password**: `password`

---

*Built with ❤️ for the T3 Community*
