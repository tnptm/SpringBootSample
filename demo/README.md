# Spring Boot + React Demo Application

A full-stack web application demonstrating Spring Boot 4.0 backend with React frontend, featuring REST APIs and modern development workflow.

## 🚀 Features

- **Spring Boot 4.0** backend with Java 21
- **React + Vite** frontend with Tailwind CSS
- **REST API endpoints** for data management
- **Maven integration** for automated frontend builds
- **Hot reload** with Spring Boot DevTools
- **JSON data handling** with in-memory storage

## 📋 Prerequisites

- Java 21 or higher
- Maven 3.6+
- Node.js 20.x (automatically installed via Maven plugin)
- npm 10.x (automatically installed via Maven plugin)

## 🏗️ Project Structure

```
demo/
├── src/
│   ├── main/
│   │   ├── java/com/example/demo/
│   │   │   ├── DemoApplication.java      # Main Spring Boot application
│   │   │   ├── HelloController.java      # Handles homepage and hello endpoint
│   │   │   ├── JsonController.java       # JSON data management API
│   │   │   ├── Payload.java              # Payload model
│   │   │   └── PayLoadHandler.java       # Payload processing logic
│   │   └── resources/
│   │       ├── application.properties    # Spring configuration
│   │       └── static/                   # Static files (index.html)
│   └── test/                             # Unit tests
├── frontend/                             # React application
│   ├── src/
│   │   ├── App.jsx                       # Main React component
│   │   ├── components/
│   │   │   ├── Hello.jsx                 # Hello component
│   │   │   |── HelloStringColorizer.jsx # String colorizer component
|   |   |   └── Json.tsx                  # JSON UI component
│   │   └── main.jsx                      # React entry point
│   ├── package.json
│   └── vite.config.js                    # Vite configuration with proxy
├── pom.xml                               # Maven configuration
└── compose.yaml                          # Docker Compose (currently disabled)
```

## 🔌 API Endpoints

### Hello Controller
- **GET `/`** - Serves the main application (React app or index.html)
- **GET `/hello`** - Returns a random motivational message
  ```json
  {
    "message": "Hello World",
    "msgIndex": "0"
  }
  ```

### JSON Controller
- **GET `/json`** - Retrieves stored JSON data
- **POST `/json`** - Stores JSON data with UUID-based caching
  ```json
  {
    "uuid_key": "optional-uuid",
    "value": "data-to-store"
  }
  ```

## 🛠️ Development Setup

### Option 1: Development Mode (Recommended)

Run Spring Boot and React dev server separately for hot reloading:

```bash
# Terminal 1 - Start Spring Boot backend
./mvnw spring-boot:run

# Terminal 2 - Start React dev server
cd frontend
npm install
npm run dev
```

- Backend: http://localhost:8080
- Frontend dev server: http://localhost:5173 (with API proxy to port 8080)

### Option 2: Production Build

Build everything and run as a single JAR:

```bash
# Clean build with React included
./mvnw clean package

# Run the packaged application
java -jar target/demo-0.0.1-SNAPSHOT.jar
```

Access the application at http://localhost:8080

## 🔧 Configuration

### Spring Boot Configuration
Located in `src/main/resources/application.properties`:
```properties
spring.application.name=demo
```

### Vite Configuration
The `frontend/vite.config.js` includes proxy settings for API calls during development:
```javascript
server: {
  proxy: {
    '/hello': 'http://localhost:8080',
    '/json': 'http://localhost:8080',
  }
}
```

### Maven Frontend Plugin
Automatically handles:
- Node.js and npm installation
- Frontend dependency installation
- React build process
- Copying build artifacts to `target/classes/static`

## 🎨 Frontend Stack

- **React 19.2** - UI framework
- **Vite 7.2** - Build tool and dev server
- **Tailwind CSS 4.1** - Utility-first CSS framework
- **Axios** - HTTP client for API calls
- **ESLint** - Code linting

## 📦 Building for Production

The Maven build process automatically:
1. Installs Node.js and npm (if not present)
2. Installs npm dependencies
3. Builds the React application
4. Copies the built files to Spring Boot's static resources
5. Packages everything into a single executable JAR

```bash
./mvnw clean package
```

The resulting JAR in `target/` contains both backend and frontend.

## 🐳 Docker Support

Docker Compose support is currently disabled but can be enabled by uncommenting the dependency in `pom.xml`.

## 📝 Notes

- The application uses in-memory storage for JSON data (resets on restart)
- Spring Boot DevTools provides automatic restart on code changes
- React components use Tailwind CSS for styling
- The frontend makes API calls to the backend during development via Vite proxy

## 🤝 Contributing

This is a demo project. Feel free to fork and modify for your own use cases.

## 📄 License

This project is created for demonstration purposes.
