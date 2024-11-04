const mongoose = require("mongoose");
const request = require("supertest");
const app = require("../app");
require("dotenv").config();
beforeAll(async () => {
  const url = process.env.MONGODB_URI;
  await mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
});

afterAll(async () => {
  await mongoose.connection.close();
});

describe("Example test suite", () => {
  it("should return 200 OK for GET/", async () => {
    const response = await request(app).get("/");
    expect(response.status).toBe(200);
  });
});
