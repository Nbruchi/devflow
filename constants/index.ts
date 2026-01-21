export const sidebarLinks = [
  {
    imgURL: "/icons/home.svg",
    route: "/",
    label: "Home",
  },
  {
    imgURL: "/icons/users.svg",
    route: "/community",
    label: "Community",
  },
  {
    imgURL: "/icons/star.svg",
    route: "/collection",
    label: "Collections",
  },
  {
    imgURL: "/icons/suitcase.svg",
    route: "/jobs",
    label: "Find Jobs",
  },
  {
    imgURL: "/icons/tag.svg",
    route: "/tags",
    label: "Tags",
  },
  {
    imgURL: "/icons/user.svg",
    route: "/profile",
    label: "Profile",
  },
  {
    imgURL: "/icons/question.svg",
    route: "/ask-question",
    label: "Ask a question",
  },
];

export const BADGE_CRITERIA = {
  QUESTION_COUNT: {
    BRONZE: 10,
    SILVER: 50,
    GOLD: 100,
  },
  ANSWER_COUNT: {
    BRONZE: 10,
    SILVER: 50,
    GOLD: 100,
  },
  QUESTION_UPVOTES: {
    BRONZE: 10,
    SILVER: 50,
    GOLD: 100,
  },
  ANSWER_UPVOTES: {
    BRONZE: 10,
    SILVER: 50,
    GOLD: 100,
  },
  TOTAL_VIEWS: {
    BRONZE: 1000,
    SILVER: 10000,
    GOLD: 100000,
  },
};
export const techMap: { [key: string]: string } = {
  // JavaScript variations
  javascript: "devicon-javascript-plain",
  js: "devicon-javascript-plain",

  // TypeScript variations
  typescript: "devicon-typescript-plain",
  ts: "devicon-typescript-plain",

  // React variations
  react: "devicon-react-original",
  reactjs: "devicon-react-original",

  // Next.js variations
  nextjs: "devicon-nextjs-plain",
  next: "devicon-nextjs-plain",

  // Node.js variations
  nodejs: "devicon-nodejs-plain",
  node: "devicon-nodejs-plain",

  // Bun.js variations
  bun: "devicon-bun-plain",
  bunjs: "devicon-bun-plain",

  // Deno.js variations
  deno: "devicon-denojs-original",
  denojs: "devicon-denojs-plain",

  // Python
  python: "devicon-python-plain",

  // Java
  java: "devicon-java-plain",

  // C++
  "c++": "devicon-cplusplus-plain",
  cpp: "devicon-cplusplus-plain",

  // C#
  "c#": "devicon-csharp-plain",
  csharp: "devicon-csharp-plain",

  // PHP
  php: "devicon-php-plain",

  // HTML
  html: "devicon-html5-plain",
  html5: "devicon-html5-plain",

  // CSS
  css: "devicon-css3-plain",
  css3: "devicon-css3-plain",

  // Git
  git: "devicon-git-plain",

  // Docker
  docker: "devicon-docker-plain",

  // MongoDB
  mongodb: "devicon-mongodb-plain",
  mongo: "devicon-mongodb-plain",

  // MySQL
  mysql: "devicon-mysql-plain",

  // PostgreSQL
  postgresql: "devicon-postgresql-plain",
  postgres: "devicon-postgresql-plain",

  // AWS variations
  aws: "devicon-amazonwebservices-original",
  "amazon web services": "devicon-amazonwebservices-original",

  // Firebase
  firebase: "devicon-firebase-plain",

  // GraphQL
  graphql: "devicon-graphql-plain",

  // Vue.js
  vue: "devicon-vuejs-plain",
  vuejs: "devicon-vuejs-plain",

  // Tailwind CSS
  tailwind: "devicon-tailwindcss-plain",
  tailwindcss: "devicon-tailwindcss-plain",

  // Angular
  angular: "devicon-angularjs-plain",

  // jQuery
  jquery: "devicon-jquery-plain",

  // SASS
  sass: "devicon-sass-plain",

  // Laravel
  laravel: "devicon-laravel-plain",

  // Ruby on Rails
  rails: "devicon-rails-plain",
  ruby: "devicon-rails-plain",

  // Redis
  redis: "devicon-redis-plain",

  // Linux
  linux: "devicon-linux-plain",

  // Jenkins
  jenkins: "devicon-jenkins-plain",

  // Kubernetes
  kubernetes: "devicon-kubernetes-plain",

  // Azure
  azure: "devicon-azure-plain",
  "azure devops": "devicon-azure-plain",

  // Google Cloud Platform
  gcp: "devicon-googlecloud-plain",
  "google cloud": "devicon-googlecloud-plain",

  // Bitbucket
  bitbucket: "devicon-bitbucket-plain",

  // NGINX
  nginx: "devicon-nginx-plain",

  // Blender
  blender: "devicon-blender-plain",

  // Unity
  unity: "devicon-unity-original",

  // Unreal Engine
  unreal: "devicon-unrealengine-original",

  // Swift
  swift: "devicon-swift-plain",

  // Kotlin
  kotlin: "devicon-kotlin-plain",

  // Go
  go: "devicon-go-plain",

  // Rust
  rust: "devicon-rust-plain",

  // Dart
  dart: "devicon-dart-plain",

  // Flask
  flask: "devicon-flask-original",

  // Django
  django: "devicon-django-plain",

  // Bootstrap
  bootstrap: "devicon-bootstrap-plain",

  // Material-UI
  materialui: "devicon-materialui-plain",
  "material ui": "devicon-materialui-plain",

  // Adobe tools
  photoshop: "devicon-photoshop-plain",
  illustrator: "devicon-illustrator-plain",
  xd: "devicon-xd-plain",
  premiere: "devicon-premiere-plain",

  // Figma
  figma: "devicon-figma-plain",

  // Inkscape
  inkscape: "devicon-inkscape-plain",

  // Trello
  trello: "devicon-trello-plain",

  // Jira
  jira: "devicon-jira-plain",

  // Heroku
  heroku: "devicon-heroku-plain",

  // Elasticsearch
  elasticsearch: "devicon-elasticsearch-plain",

  // Redux
  redux: "devicon-redux-original",

  // Three.js
  threejs: "devicon-threejs-original",
};

export const codeBlockLanguages = {
  js: "JavaScript",
  ts: "TypeScript",
  css: "CSS",
  html: "HTML",
  json: "JSON",
  md: "Markdown",
  xml: "XML",
  yaml: "YAML",
  python: "Python",
  java: "Java",
  c: "C",
  cpp: "C++",
  csharp: "C#",
  go: "Go",
  rust: "Rust",
  swift: "Swift",
  kotlin: "Kotlin",
  ruby: "Ruby",
  php: "PHP",
  r: "R",
  matlab: "MATLAB",
  bash: "Bash",
  powershell: "PowerShell",
  sql: "SQL",
  graphql: "GraphQL",
  dockerfile: "Dockerfile",
  dockercompose: "Docker Compose",
  makefile: "Makefile",
  toml: "TOML",
  ini: "INI",
  properties: "Properties",
  java_properties: "Java Properties",
  json5: "JSON5",
  jsonc: "JSON with Comments",
  jsonl: "JSON Lines",
  csv: "CSV",
  tsv: "TSV",
  jsx: "JavaScript JSX",
  tsx: "TypeScript JSX",
  vue: "Vue",
  svelte: "Svelte",
  astro: "Astro",
  mdx: "MDX",
  markdown: "Markdown",
  "": "Plain Text",
};

export const techDescriptionMap: { [key: string]: string } = {
  javascript: "JavaScript is a powerful language for building dynamic, interactive, and modern web applications.",
  typescript:
    "TypeScript adds strong typing to JavaScript, making it great for scalable and maintainable applications.",
  react: "React is a popular library for building fast and modular user interfaces.",
  nextjs: "Next.js is a React framework for server-side rendering and building optimized web applications.",
  nodejs: "Node.js enables server-side JavaScript, allowing you to create fast, scalable network applications.",
  python:
    "Python is a versatile language known for readability and a vast ecosystem, often used for data science and automation.",
  java: "Java is an object-oriented language commonly used for enterprise applications and Android development.",
  cplusplus: "C++ is a high-performance language suitable for system software, game engines, and complex applications.",
  git: "Git is a version control system that tracks changes in source code during software development.",
  docker: "Docker is a container platform that simplifies application deployment and environment management.",
  mongodb: "MongoDB is a NoSQL database for handling large volumes of flexible, document-based data.",
  mysql: "MySQL is a popular relational database, known for reliability and ease of use.",
  postgresql:
    "PostgreSQL is a robust open-source relational database with advanced features and strong SQL compliance.",
  aws: "AWS is a comprehensive cloud platform offering a wide range of services for deployment, storage, and more.",
  vue: "Vue.js is a progressive framework for building user interfaces, designed for approachability and performance.",
  angular: "Angular is a TypeScript-based framework for building scalable, enterprise-level web applications.",
  svelte: "Svelte is a compiler-based framework that produces highly efficient, minimal JavaScript bundles.",
  astro:
    "Astro is a modern web framework focused on server-first rendering and shipping less JavaScript to the client.",

  // Backend frameworks
  express: "Express.js is a minimalist Node.js framework for building robust APIs and server-side applications.",
  nestjs: "NestJS is a modular, TypeScript-first framework for building scalable server-side applications.",
  django: "Django is a high-level Python framework with built-in authentication, ORM, and admin system.",
  flask: "Flask is a lightweight Python micro-framework for building flexible APIs and web apps.",
  springboot: "Spring Boot is a Java framework for building production-ready, enterprise-grade backend services.",
  fastapi: "FastAPI is a modern Python framework optimized for speed, async support, and auto-generated documentation.",
  rails:
    "Ruby on Rails is an opinionated framework for building web applications quickly using convention over configuration.",

  // Databases
  redis: "Redis is an in-memory data store used for caching, queues, sessions, and fast key-value operations.",
  sqlite: "SQLite is a file-based relational database ideal for embedded apps, testing, and small projects.",
  dynamodb: "DynamoDB is AWS's fully managed NoSQL database built for speed and scalability.",
  cassandra: "Cassandra is a distributed NoSQL database optimized for high availability and massive datasets.",

  // Mobile development
  reactnative: "React Native allows building native mobile apps using JavaScript and React components.",
  flutter: "Flutter uses Dart to build cross-platform mobile apps with a single codebase and high-performance UI.",
  kotlin: "Kotlin is a modern language for Android development, fully interoperable with Java.",
  swift: "Swift is Apple's language for building iOS, macOS, and watchOS applications.",

  // DevOps / Infrastructure
  kubernetes: "Kubernetes automates deployment, scaling, and management of containerized applications.",
  terraform:
    "Terraform is an IaC tool that automates provisioning of cloud infrastructure using declarative configuration.",
  nginx: "Nginx is a high-performance web server, reverse proxy, and load balancer.",
  apache: "Apache HTTP Server is a widely used, flexible web server suitable for hosting web applications.",
  githubactions: "GitHub Actions automates CI/CD workflows directly from GitHub repositories.",
  gitlabci: "GitLab CI/CD provides automated pipelines for building, testing, and deploying applications.",

  // Testing tools
  jest: "Jest is a JavaScript testing framework for unit and integration testing.",
  cypress: "Cypress is an end-to-end testing framework built for modern web applications.",
  playwright: "Playwright enables reliable end-to-end testing for web apps across browsers.",
  mocha: "Mocha is a flexible JavaScript test framework for async testing.",

  // AI / ML
  tensorflow: "TensorFlow is an open-source library for building machine learning and deep learning models.",
  pytorch: "PyTorch is a flexible and widely used deep learning framework for research and production.",
  scikitlearn: "Scikit-learn provides simple yet powerful tools for classical machine learning tasks in Python.",
  langchain: "LangChain is a framework for building LLM-powered applications using composable modules.",

  // Build tools
  vite: "Vite is a lightning-fast frontend build tool and dev server.",
  webpack: "Webpack bundles JavaScript modules, enabling complex asset pipelines.",
  parcel: "Parcel is a zero-config bundler that automatically handles transforms and optimizations.",

  // Cloud Platforms
  gcp: "Google Cloud Platform provides cloud computing services including compute, storage, and AI tools.",
  azure: "Microsoft Azure offers cloud services for hosting, deploying, and scaling applications.",

  // Misc tools
  graphql: "GraphQL is a query language for APIs that allows clients to request only the data they need.",
  restapi: "REST is an architectural style for building scalable web APIs using stateless operations.",
  websocket: "WebSockets enable real-time, two-way communication between clients and servers.",
};
