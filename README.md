# Todo List Application

A simple Todo List application built with React, Redux, and TypeScript, allowing users to filter and sort tasks by status, category, and due date.

## Prerequisites

Before running the application locally, ensure you have the following installed:

- **Node.js** (v14 or later)
- **npm** or **yarn** (Package manager)
- **Git** (Optional, for version control)

## Setting Up the Application Locally

### 1. Clone the Repository

If you haven't already cloned the repository, run the following command:

```bash
git clone https://github.com/AjayKumarNagilla/todo.git
```



### 2. Navigate to the Project Directory

Go into the project folder:

```bash
cd todo-list-app
```

### 3. Install Dependencies

Install the required dependencies using either `npm` or `yarn`. Run one of the following commands:

#### Using npm:
```bash
npm install
```

#### Using yarn:
```bash
yarn install
```

This will install all the dependencies specified in the `package.json` file.

### 4. Running the Application Locally

To start the application in development mode, run the following command:

#### Using npm:
npm start
```

#### Using yarn:
yarn start
```

This will start the development server and open the application in your default web browser. By default, it will be accessible at `http://localhost:3000`.

### 5. Accessing the Application

Once the app is running locally, you can open it in a browser by going to:

```
http://localhost:3000
```

The Todo List application should now be live and fully functional.

### 6. Running Tests (Optional)

If you want to run tests to ensure everything is working correctly, you can use the following commands:

#### Using npm:

npm test
```

#### Using yarn:

yarn test
```

### 7. Building the Application for Production

To create an optimized production build, run:

#### Using npm:

npm run build


#### Using yarn:

yarn build


This will generate a `build` folder with the production-ready files.

## Folder Structure

The general folder structure of the application is as follows:

```
/todo-list-app
├── /src
│   ├── /components
│   │   ├── FilterSort.tsx
│   │   ├── TodoForm.tsx
│   │   ├── TodoItem.tsx
│   │   └── TodoList.tsx
│   ├── /store
│   │   └── store.ts
│   ├── App.tsx
│   ├── index.tsx
│   └── /assets
│       └── styles.css
├── /public
│   ├── index.html
│   └── /images
└── package.json
```

### Key Files

- **`src/App.tsx`**: Main component that renders the TodoList.
- **`src/components/FilterSort.tsx`**: Component for filtering and sorting tasks.
- **`src/components/TodoForm.tsx`**: Component for adding and editing tasks.
- **`src/components/TodoItem.tsx`**: Component to render individual Todo items.
- **`src/store/store.ts`**: Redux store setup with actions and reducers for managing the todo state.

