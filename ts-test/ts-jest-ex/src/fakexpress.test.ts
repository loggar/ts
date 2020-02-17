import { Response, Request } from "express";
import { Fakexpress } from "./Fakexpress";

test("Testing an express route", async () => {
  const xp = new Fakexpress({
    params: {
      name: "max"
    }
  });

  const searchResult = {
    name: "max",
    fullName: "Max Muster",
    description: "Full Stack TypeScript developer",
    pronouns: "they/them"
  };
  await expressRoute(xp.req as Request, xp.res as Response);
  expect(xp.responseData).toStrictEqual(searchResult);
  expect(xp.res.statusCode).toBe(200);
});
