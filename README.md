# Barangay-Calingag-BMIS
Management Information System for Barangay Calingag

## Features 
- Resident Profiling
- Clearance Form Generator (PDF)
- Residency Certificate Generator (PDF)
- Resident Demographics
- Customizable HomePage

## Usage
**ENV Variables**

Create a .env file in then root and add the following
```
NODE_ENV = development
PORT = 5000
MONGO_URI = your mongodb uri
JWT_SECRET = abc123
```
**Install Dependencies (frontend & backend)**

```
npm install
cd frontend
npm install
```

**RUN**

```
# Run frontend (:3000) & backend (:5000)
npm run dev

# Run backend only
npm run server
```

**Build & Deploy**

```
# Create frontend prod build
cd frontend
npm run build
```

**Sample User Logins**

```
calingagBMIS (Admin)
calingag123
```

