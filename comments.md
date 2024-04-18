## Decision making reasons

1. Monorepo: Choosing a monorepo structure allows for better organization and management of multiple related projects within a single repository. This facilitates code sharing, dependency management, and version control across the backend, frontend, and any other related projects.

2. MVC with Node.js for Backend: Adopting the Model-View-Controller (MVC) architecture pattern in the Node.js backend separates concerns, making the codebase more modular, maintainable, and scalable. It also allows for easier testing and debugging of individual components.

3. Next.js for Frontend for SEO: Opting for Next.js for the frontend ensures better SEO performance due to built-in server-side rendering (SSR) capabilities.

4. Tanstack Query: Utilizing Tanstack Query for data fetching and caching in the frontend provides a simple and efficient way to manage API data. It offers features such as caching, invalidation, and error handling out of the box, reducing the need for manual data management code.

5. TypeScript: Using TypeScript brings static typing to the project, enhancing code quality, readability, and maintainability. It provides compile-time type checking, catching errors early in the development process and enabling better tooling support for code navigation, refactoring, and documentation.

## Please use yarn in stead of npm.

### Issues

1. First Time installation may take time due to monorepo architecture.
2. In the latest Next.js 14 release, there is a potential issue where the app may encounter an error upon launch. However, this issue is automatically resolved after a 2-second delay. Here you can find more info about this issue,
   https://github.com/vercel/next.js/issues/47121
