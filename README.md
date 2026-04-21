# 🧪 SauceDemo E2E Automation using Playwright (POM)

## 📌 Overview
This project is an end-to-end (E2E) test automation framework built using **Playwright** with the **Page Object Model (POM)** design pattern.

It automates key user workflows of the SauceDemo e-commerce application, ensuring maintainability, scalability, and a clean test structure.

---

## 🚀 Features
- 🔐 Login Automation  
- 🛒 Add to Cart Functionality  
- 💳 Checkout Process  
- 📝 Checkout Information Handling  
- 🔄 Order Continuation  
- ✅ Order Completion  
- 🏠 Back to Home Navigation  
- 🚪 Logout Flow  
- 📦 Modular POM Structure  

---

## 🏗️ Project Structure
```
project-root/
│── pages/
│   ├── loginPage.js
│   ├── addToCartPage.js
│   ├── checkoutPage.js
│   ├── checkoutInfoPage.js
│   ├── orderContinuePage.js
│   ├── orderFinishPage.js
│   ├── homePage.js
│   └── logoutPage.js
│
│── tests/
│   └── test.spec.js
│
│── package.json
│── playwright.config.js
```

---

## ⚙️ Tech Stack
- Playwright  
- JavaScript (Node.js)  
- Page Object Model (POM)  

---

## 🧪 Test Scenario Covered
1. User logs in with valid credentials  
2. Adds multiple products to cart  
3. Proceeds to checkout  
4. Enters user information  
5. Continues order process  
6. Completes purchase  
7. Returns to home page  
8. Logs out successfully  

---

## 🛠️ Installation

```bash
# Clone the repository
git clone https://github.com/your-username/your-repo-name.git

# Navigate to project directory
cd your-repo-name

# Install dependencies
npm install

# Install Playwright browsers
npx playwright install
```

---

## ▶️ Run Tests

```bash
npx playwright test
```

Run in headed mode:
```bash
npx playwright test --headed
```

---

## 📊 Future Improvements
- Add assertions for validation  
- Integrate reporting (Allure / HTML Report)  
- Add CI/CD pipeline (GitHub Actions)  
- Cross-browser testing  

---

## 🤝 Contribution
Feel free to fork this repository and contribute by submitting a pull request.

---

## 📄 License
This project is open-source and available under the MIT License.
