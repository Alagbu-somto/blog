const superTest = require("supertest");
const app = require("../app.js");
const blog = require("../model/blogModel");
const request = superTest(app);

describe("testing routes", () => {
  afterEach(
    async () => await blog.findOneAndDelete({ title: "test@gmail.com" })
  );
  it("test", async () => {
    const result1 = await request.get("/compose");
    const result = await request.post("/compose").send({
      Text: "Hey!",
      Post: "its working",
    });
    console.log(result.body.status);
    const user = await blog.findOne({ title: "Hey!" });
    expect(user).toMatchObject(payload);
  });
});
