const request = require("supertest");
const app = require("../server"); // Import the Express app

describe("Server Tests", () => {
    test("GET / should return 200", async () => {
        const response = await request(app).get("/");
        expect(response.statusCode).toBe(200);
        expect(response.text).toBe("Hello, CI/CD!");
    });
});

