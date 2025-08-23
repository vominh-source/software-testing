# BÁO CÁO THIẾT KẾ TEST CASE - LOGIN FUNCTIONALITY

## 1. TỔNG QUAN DỰ ÁN

### 1.1 Mục tiêu
- Thiết kế và triển khai bộ test case tự động cho chức năng đăng nhập
- Sử dụng Data-Driven Testing để test nhiều kịch bản khác nhau
- Tạo báo cáo chi tiết với HTML report

### 1.2 Công nghệ sử dụng
- **Framework**: Cypress v14.5.3
- **Language**: JavaScript (ES6)
- **Reporting**: Mochawesome
- **Data Format**: JSON
- **Test Pattern**: Data-Driven Testing

---

## 2. THIẾT KẾ KIẾN TRÚC TEST

### 2.1 Cấu trúc thư mục
```
sprint5-with-bugs/
├── cypress/
│   ├── e2e/
│   │   ├── Login33Tests.cy.js      # File test chính
│   │   └── LoginSeparate.cy.js     # File test phụ
│   ├── fixtures/
│   │   └── loginData.json          # Dữ liệu test
│   ├── reports/                    # Báo cáo HTML/JSON
│   └── screenshots/                # Screenshots lỗi
├── cypress.config.js               # Cấu hình Cypress
└── package.json                    # Dependencies
```

### 2.2 Mô hình thiết kế
```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   Test Data     │───▶│   Test Engine   │───▶│   Test Report   │
│  (JSON File)    │    │ (Cypress + JS)  │    │ (HTML/JSON)     │
└─────────────────┘    └─────────────────┘    └─────────────────┘
         │                       │                       │
         ▼                       ▼                       ▼
   33 Test Cases         Helper Functions        Mochawesome
   - Valid logins        - performLoginTest()    - Pass/Fail stats
   - Invalid data        - Dynamic test gen      - Screenshots
   - Edge cases          - Assertions            - Detailed logs
```

---

## 3. CHIẾN LƯỢC TEST CASE

### 3.1 Phân loại Test Cases

#### A. **Positive Test Cases** (Valid Login)
```javascript
// Test cases 1-4: Successful logins
{
  "email": "admin@practicesoftwaretesting.com",
  "password": "welcome01", 
  "expectedResult": "success",
  "role": "admin"
}
```

#### B. **Negative Test Cases** (Invalid Login)
```javascript
// Test cases 5-33: Various failure scenarios
{
  "email": "admin@practicesoftwaretesting.com",
  "password": "wrongpass",
  "expectedResult": "fail",
  "role": "none"
}
```

#### C. **Boundary Testing**
- Password length: 8 chars (fail), 9 chars (pass), 40 chars (pass), 41 chars (fail)
- Email format validation
- Special characters handling

#### D. **Security Testing**
- SQL Injection attempts
- XSS attempts  
- Unicode/Emoji handling

### 3.2 Coverage Matrix

| Category | Test Cases | Coverage |
|----------|------------|----------|
| Valid Login | 1-4 | Admin, Customer roles |
| Password Validation | 5-7, 13-16 | Wrong, case-sensitive, length |
| Email Validation | 8-12, 17-19 | Format, empty, domain |
| Security Tests | 20-21 | SQL injection |
| Edge Cases | 22-33 | Special chars, unicode, spaces |

---

## 4. THIẾT KẾ KỸ THUẬT

### 4.1 Data-Driven Architecture

```javascript
// 1. Load test data from JSON
cy.fixture("loginData").then((users) => {
  // 2. Dynamic test generation
  users.forEach((user, index) => {
    it(`Test ${index + 1}: ${user.description}`, () => {
      performLoginTest(user);
    });
  });
});
```

### 4.2 Helper Function Design

```javascript
function performLoginTest(user) {
  // 1. Navigation
  cy.visit("/#/auth/login");
  
  // 2. Element verification
  cy.get('[data-test="email"]').should("exist").and("be.visible");
  
  // 3. Data input
  cy.get('[data-test="email"]').clear().type(user.email);
  cy.get('[data-test="password"]').clear().type(user.password);
  
  // 4. Action execution
  cy.get('[data-test="login-submit"]').click();
  
  // 5. Result validation
  if (user.expectedResult === "success") {
    // Success flow validation
  } else {
    // Failure flow validation
  }
}
```

### 4.3 Configuration Management

```javascript
// cypress.config.js
module.exports = {
  e2e: {
    baseUrl: "http://localhost:4200",
    reporter: "mochawesome",
    reporterOptions: {
      reportDir: "cypress/reports",
      overwrite: false,
      html: false,
      json: true,
      timestamp: "mmddyyyy_HHMMss"
    }
  }
};
```

---

## 5. IMPLEMENTATION PROCESS

### 5.1 Bước 1: Setup Environment
```bash
# Install dependencies
npm install --save-dev cypress mochawesome mochawesome-merge mochawesome-report-generator

# Setup project structure
mkdir cypress/{e2e,fixtures,reports,screenshots}
```

### 5.2 Bước 2: Create Test Data
```json
// cypress/fixtures/loginData.json
[
  {
    "email": "admin@practicesoftwaretesting.com",
    "password": "welcome01",
    "expectedResult": "success",
    "role": "admin",
    "description": "Admin login success"
  },
  // ... 32 more test cases
]
```

### 5.3 Bước 3: Generate Test Cases
```javascript
// Approach 1: Manual test case definition (Current)
it("Test 1: Admin login success", function () {
  cy.fixture("loginData").then((users) => {
    if (users[0]) performLoginTest(users[0]);
  });
});

// Approach 2: Dynamic generation (Alternative)
loginData.forEach((user, index) => {
  it(`Test ${index + 1}: ${user.description}`, () => {
    performLoginTest(user);
  });
});
```

### 5.4 Bước 4: Execute & Report
```bash
# Run tests
npx cypress run --spec "cypress/e2e/Login33Tests.cy.js"

# Generate HTML report
npx marge cypress/reports/mochawesome_*.json --reportDir cypress/reports --inline
```

---

## 6. DESIGN PATTERNS USED

### 6.1 **Page Object Model (Simplified)**
```javascript
// Element selectors as constants
const LOGIN_SELECTORS = {
  EMAIL: '[data-test="email"]',
  PASSWORD: '[data-test="password"]', 
  SUBMIT: '[data-test="login-submit"]'
};
```

### 6.2 **Data-Driven Testing Pattern**
- Separation of test data from test logic
- Reusable test functions
- Dynamic test case generation

### 6.3 **Factory Pattern**
```javascript
function performLoginTest(user) {
  // Factory method for different login scenarios
  switch(user.expectedResult) {
    case "success": return validateSuccessLogin(user);
    case "fail": return validateFailedLogin(user);
    case "validation-fail": return validateFormValidation(user);
  }
}
```

---

## 7. BENEFITS & ADVANTAGES

### 7.1 **Maintainability**
- Single helper function for all login tests
- Centralized test data in JSON file
- Easy to add new test cases

### 7.2 **Scalability** 
- Can easily expand from 33 to 100+ test cases
- Modular design allows component reuse
- Automated report generation

### 7.3 **Readability**
- Clear test case descriptions
- Structured data format
- Comprehensive reporting

### 7.4 **Debugging**
- Individual test case failure isolation
- Screenshots on failure
- Detailed error logs

---

## 8. LESSONS LEARNED

### 8.1 **Cypress Dynamic Test Generation**
- Dynamic `it()` generation within `describe()` works best at module level
- Avoid dynamic generation inside `before()` hooks
- Use manual test case definition for better control

### 8.2 **Data Management**
- JSON fixtures provide better data management than hardcoded values
- Consider using external data sources for larger datasets
- Validate data structure before test execution

### 8.3 **Reporting Optimization**
- Separate JSON files per test run for better tracking
- Use timestamps in report names
- Merge reports only when necessary

---

## 9. FUTURE ENHANCEMENTS

### 9.1 **Test Data Management**
- Database-driven test data
- Excel/CSV data import
- Dynamic data generation

### 9.2 **Advanced Reporting**
- Integration with CI/CD pipelines
- Slack/Email notifications
- Historical trend analysis

### 9.3 **Test Optimization**
- Parallel test execution
- Cross-browser testing
- Performance metrics integration

---

## 10. CONCLUSION

Thiết kế script test này demonstrierte một approach hiệu quả cho việc testing chức năng login với:

- **33 test cases** covering comprehensive scenarios
- **Data-driven architecture** for maintainability
- **Automated reporting** for clear visibility
- **Modular design** for scalability

Script này có thể serve as template cho các test modules khác trong dự án, providing một foundation vững chắc cho automated testing strategy.

---

*Báo cáo được tạo bởi: Test Automation Team*  
*Ngày: 02/08/2025*  
*Version: 1.0*
