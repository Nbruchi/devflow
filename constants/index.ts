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

export const questions = [
    {
        _id: "1",
        title: "How to learn React",
        content: "I want to learn React. Can anyone suggest what to begin on?",
        tags: [
            { _id: "1", name: "React" },
            { _id: "2", name: "JavaScript" },
        ],
        author: {
            _id: "1",
            name: "John Doe",
            image: "https://c.pxhere.com/photos/e7/22/profile_face_person_man_human-1327211.jpg!d",
        },
        createdAt: new Date(),
        upvotes: 0,
        answers: 0,
        views: 0,
    },
    {
        _id: "2",
        title: "How to learn TypeScript",
        content: "I want to learn TypeScript. Can anyone suggest what to begin on?",
        tags: [
            { _id: "1", name: "TypeScript" },
            { _id: "2", name: "JavaScript" },
        ],
        author: {
            _id: "1",
            name: "Gaylord Focker",
            image: "https://www.goodfreephotos.com/cache/people/female-face-woman-portrait.jpg",
        },
        createdAt: new Date(),
        upvotes: 0,
        answers: 0,
        views: 0,
    },
    {
        _id: "3",
        title: "How to learn Next.js",
        content: "I want to learn Next.js. Can anyone suggest what to begin on?",
        tags: [
            { _id: "1", name: "Next.js" },
            { _id: "2", name: "React" },
        ],
        author: {
            _id: "1",
            name: "Miles Morales",
            image: "https://p2.piqsels.com/preview/876/356/902/boy-businessman-close-up-eyes.jpg",
        },
        createdAt: new Date(),
        upvotes: 0,
        answers: 0,
        views: 0,
    },
    {
        _id: "4",
        title: "How to learn Tailwind CSS",
        content: "I want to learn Tailwind CSS. Can anyone suggest what to begin on?",
        tags: [
            { _id: "1", name: "Tailwind CSS" },
            { _id: "2", name: "CSS" },
        ],
        author: {
            _id: "1",
            name: "Carl Russel",
            image: "https://p2.piqsels.com/preview/941/886/553/analog-watch-businessman-casual-close-up.jpg",
        },
        createdAt: new Date(),
        upvotes: 0,
        answers: 0,
        views: 0,
    },
    {
        _id: "5",
        title: "How to learn GraphQL",
        content: "I want to learn GraphQL. Can anyone suggest what to begin on?",
        tags: [
            { _id: "1", name: "GraphQL" },
            { _id: "2", name: "API" },
        ],
        author: {
            _id: "1",
            name: "Steve Doe",
            image: "https://p0.piqsels.com/preview/760/89/310/adult-businessman-contemporary-corporate.jpg",
        },
        createdAt: new Date(),
        upvotes: 0,
        answers: 0,
        views: 0,
    },
];

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
