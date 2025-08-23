describe("Login Test - 33 Separate Test Cases", () => {
  let loginData = [];

  before(() => {
    // Load data từ fixture
    cy.fixture("loginData").then((data) => {
      loginData = data;
      console.log(`Loaded ${data.length} test records`);
    });
  });

  // Test case 1: Admin success
  it("Test 1: Admin login success", function () {
    cy.fixture("loginData").then((users) => {
      if (users[0]) performLoginTest(users[0]);
    });
  });

  // Test case 2: Customer success
  it("Test 2: Customer login success", function () {
    cy.fixture("loginData").then((users) => {
      if (users[1]) performLoginTest(users[1]);
    });
  });

  // Test case 3: Customer2 success
  it("Test 3: Customer2 login success", function () {
    cy.fixture("loginData").then((users) => {
      if (users[2]) performLoginTest(users[2]);
    });
  });

  // Test case 4: Customer3 success
  it("Test 4: Customer3 login success", function () {
    cy.fixture("loginData").then((users) => {
      if (users[3]) performLoginTest(users[3]);
    });
  });

  // Test case 5: Admin wrong password
  it("Test 5: Admin wrong password", function () {
    cy.fixture("loginData").then((users) => {
      if (users[4]) performLoginTest(users[4]);
    });
  });

  // Test case 6: Admin case sensitive password
  it("Test 6: Admin case sensitive password", function () {
    cy.fixture("loginData").then((users) => {
      if (users[5]) performLoginTest(users[5]);
    });
  });

  // Test case 7: Admin short password
  it("Test 7: Admin short password validation", function () {
    cy.fixture("loginData").then((users) => {
      if (users[6]) performLoginTest(users[6]);
    });
  });

  // Test case 8: Invalid email format
  it("Test 8: Invalid email format", function () {
    cy.fixture("loginData").then((users) => {
      if (users[7]) performLoginTest(users[7]);
    });
  });

  // Test case 9: Empty email
  it("Test 9: Empty email validation", function () {
    cy.fixture("loginData").then((users) => {
      if (users[8]) performLoginTest(users[8]);
    });
  });

  // Test case 10: Empty password
  it("Test 10: Empty password validation", function () {
    cy.fixture("loginData").then((users) => {
      if (users[9]) performLoginTest(users[9]);
    });
  });

  // Test case 11: Invalid short domain
  it("Test 11: Invalid short domain", function () {
    cy.fixture("loginData").then((users) => {
      if (users[10]) performLoginTest(users[10]);
    });
  });

  // Test case 12: Invalid long domain
  it("Test 12: Invalid long domain", function () {
    cy.fixture("loginData").then((users) => {
      if (users[11]) performLoginTest(users[11]);
    });
  });

  // Test case 13: 8 char password fail
  it("Test 13: 8 character password fail", function () {
    cy.fixture("loginData").then((users) => {
      if (users[12]) performLoginTest(users[12]);
    });
  });

  // Test case 14: 9 char password success
  it("Test 14: 9 character password success", function () {
    cy.fixture("loginData").then((users) => {
      if (users[13]) performLoginTest(users[13]);
    });
  });

  // Test case 15: 40 char password success
  it("Test 15: 40 character password success", function () {
    cy.fixture("loginData").then((users) => {
      if (users[14]) performLoginTest(users[14]);
    });
  });

  // Test case 16: 41 char password fail
  it("Test 16: 41 character password validation fail", function () {
    cy.fixture("loginData").then((users) => {
      if (users[15]) performLoginTest(users[15]);
    });
  });

  // Test case 17: Email with spaces
  it("Test 17: Email with leading/trailing spaces", function () {
    cy.fixture("loginData").then((users) => {
      if (users[16]) performLoginTest(users[16]);
    });
  });

  // Test case 18: Password with space
  it("Test 18: Password with space", function () {
    cy.fixture("loginData").then((users) => {
      if (users[17]) performLoginTest(users[17]);
    });
  });

  // Test case 19: Incomplete email
  it("Test 19: Incomplete email format", function () {
    cy.fixture("loginData").then((users) => {
      if (users[18]) performLoginTest(users[18]);
    });
  });

  // Test case 20: SQL injection attempt
  it("Test 20: SQL injection in password", function () {
    cy.fixture("loginData").then((users) => {
      if (users[19]) performLoginTest(users[19]);
    });
  });

  // Test case 21: SQL injection in email
  it("Test 21: SQL injection in email", function () {
    cy.fixture("loginData").then((users) => {
      if (users[20]) performLoginTest(users[20]);
    });
  });

  // Test case 22: Non-existent user
  it("Test 22: Non-existent user", function () {
    cy.fixture("loginData").then((users) => {
      if (users[21]) performLoginTest(users[21]);
    });
  });

  // Test case 23: Case insensitive email
  it("Test 23: Case insensitive email", function () {
    cy.fixture("loginData").then((users) => {
      if (users[22]) performLoginTest(users[22]);
    });
  });

  // Test case 24: Email with plus sign
  it("Test 24: Email with plus sign", function () {
    cy.fixture("loginData").then((users) => {
      if (users[23]) performLoginTest(users[23]);
    });
  });

  // Test case 25: Special characters in password
  it("Test 25: Special characters in password", function () {
    cy.fixture("loginData").then((users) => {
      if (users[24]) performLoginTest(users[24]);
    });
  });

  // Test case 26: Newline in password
  it("Test 26: Newline in password", function () {
    cy.fixture("loginData").then((users) => {
      if (users[25]) performLoginTest(users[25]);
    });
  });

  // Test case 27: Unicode in password
  it("Test 27: Unicode characters in password", function () {
    cy.fixture("loginData").then((users) => {
      if (users[26]) performLoginTest(users[26]);
    });
  });

  // Test case 28: Emoji in email
  it("Test 28: Emoji in email", function () {
    cy.fixture("loginData").then((users) => {
      if (users[27]) performLoginTest(users[27]);
    });
  });

  // Test case 29: Subdomain email
  it("Test 29: Subdomain email", function () {
    cy.fixture("loginData").then((users) => {
      if (users[28]) performLoginTest(users[28]);
    });
  });

  // Test case 30: Underscore in password
  it("Test 30: Underscore in password", function () {
    cy.fixture("loginData").then((users) => {
      if (users[29]) performLoginTest(users[29]);
    });
  });

  // Test case 31: Uppercase email
  it("Test 31: Uppercase email", function () {
    cy.fixture("loginData").then((users) => {
      if (users[30]) performLoginTest(users[30]);
    });
  });

  // Test case 32: Different valid password
  it("Test 32: Different valid password", function () {
    cy.fixture("loginData").then((users) => {
      if (users[31]) performLoginTest(users[31]);
    });
  });

  // Test case 33: Invalid domain
  it("Test 33: Invalid domain", function () {
    cy.fixture("loginData").then((users) => {
      if (users[32]) performLoginTest(users[32]);
    });
  });
});

// Helper function để thực hiện login test
function performLoginTest(user) {
  cy.visit("/#/auth/login");

  cy.get('[data-test="email"]').should("exist").and("be.visible");
  cy.get('[data-test="password"]').should("exist").and("be.visible");
  cy.get('[data-test="login-submit"]').should("exist").and("be.enabled");

  cy.get('[data-test="email"]')
    .clear()
    .type(user.email)
    .should("have.value", user.email);

  cy.get('[data-test="password"]')
    .clear()
    .type(user.password)
    .should("have.value", user.password);

  cy.get('[data-test="login-submit"]').click();

  cy.wait(1000);

  if (user.expectedResult === "success") {
    if (user.role === "admin") {
      cy.wait(5000); // optional delay
      cy.url().should("include", "/admin/dashboard");
    } else {
      cy.url().should("include", "/account");
      cy.get('[data-test="page-title"]')
        .should("be.visible")
        .and("contain", "My account");
    }
  } else if (user.expectedResult === "fail") {
    cy.contains("Invalid email or password", { timeout: 5000 }).should(
      "be.visible"
    );
    cy.url().should("include", "/login");
  } else if (user.expectedResult === "validation-fail") {
    // For validation failures, check if still on login page
    cy.url().should("include", "/login");
  }
}
