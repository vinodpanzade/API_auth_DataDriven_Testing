# 🚀 Data-Driven API Automation Framework (Cypress)

This project demonstrates a **production-ready, data-driven API automation framework**
built using Cypress with **authentication handling, reusable service layers, and full CRUD chaining**.

---

## 🧠 Design Philosophy

The framework is designed with **scalability and maintainability** in mind:
- Authentication logic is separated from business APIs
- Test data is fully externalized using fixtures
- Dynamic values (IDs) are captured and reused across test cases
- Cypress async behavior is handled correctly using command chaining

---
## 🔐 Auth Module (API2/auth_datadriven.api.js)

- Centralized login & auth-related API logic
- Supports data-driven authentication using fixture inputs
- Designed for reuse across multiple test suites

---

## 🎓 Student Module (API2/student_datadriven.api.js)

Encapsulates all student-related APIs:
- Create Student (POST)
- Fetch Students (GET)
- Update Student (PUT / PATCH)
- Delete Student (DELETE)
- Validation after deletion (404)

---

## 🔁 End-to-End API Flow

1. Authenticate users using fixture data
2. Create multiple students (POST)
3. Capture and store dynamic student IDs
4. Fetch students (GET)
5. Update students using PUT
6. Partially update students using PATCH
7. Delete students one by one
8. Validate deletion using GET (404)

---

## 💡 Key Learnings & Best Practices

- Difference between `forEach` vs `cy.wrap().each()`
- Handling Cypress async command queue correctly
- Building reusable API service layers
- Implementing true data-driven API automation
- Writing maintainable, interview-ready automation code

---

## ▶️ Execution Note

📌 *This repository focuses on core API spec files, fixtures, and reusable API functions.  
For execution, initialize a fresh Cypress project and copy only these files.*

---

## 🧑‍💻 Author

**Vinod Panzade**  
QA  | API Automation | Cypress
