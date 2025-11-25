# Frontend Application

## 📦 Installation & Setup

### Local Development (npm)

1. Install dependencies:

```bash
npm install
```

2. Run development server:

```bash
npm run dev
```

App will be available at: http://localhost:5173

3. Build for production:

```
npm run build
```

4. Preview production build:

```bash
npm run preview
```

### 🐳 Docker Development (Recommended)

1. Create Docker network:

```bash
docker network create app-network
```

2. Start development server with hot-reload:

```bash
docker-compose -f docker-compose.dev.yml up
```

App will be available at: http://localhost:5173

3. Build and run production:

```bash
docker-compose up --build
```

App will be available at: http://localhost:8080

📚 **Full Docker documentation:** docs/DOCKER.md

## 🧪 Testing

### Logout Feature Tests

```bash
# Authentication state tests (2 tests)
npm test -- useAuth.test.ts

# Modal component tests (7 tests)
npm test -- LogoutModal.test.tsx

# Button component tests (5 tests)
npm test -- LogoutButton.test.tsx

# Run all logout tests (12 tests)
npm test -- Logout
```

Coverage: 14 tests - authentication hooks, modal interactions, logout flow

**Code Quality**

1. Lint code:

```bash
npm run lint
```

2. Fix lint errors:

```bash
npm run lint:fix
```

3. Format code with Prettier:

```bash
npm run format
```

4. Check formatting:

```bash
npm run format:check
```

On commit, staged files will be checked with ESLint and formatted with Prettier automatically.
