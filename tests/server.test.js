const request = require("supertest")("http://localhost:3000");
const expect = require("chai").expect;
const mysql = require("mysql")
const supertest = require('supertest');


describe("GET /api/related", function () {
  it("Leaving id field empty returns first id and its related productids", async function () {
    const response = await request.get("/api/related");
    expect(response.status).to.eql(200);
    expect(response.body).to.eql([2,3,8,7]);
  });

  it("Searching id returns a array of related productids", async function () {
    const response = await request.get("/api/related/?id=3");
    expect(response.status).to.eql(200);
    expect(response.body).to.eql([5,9,7,2,1]);
  });
})

