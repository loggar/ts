import fetch from "node-fetch";
import { mocked } from "ts-jest/utils";
import { getPeople } from "./api";

jest.mock("node-fetch", () => {
  return jest.fn();
});

beforeEach(() => {
  mocked(fetch).mockClear();
});

describe("getPeople test", () => {
  test("getPeople should fetch a person", async () => {
    // provide a mock implementation for the mocked fetch:
    mocked(fetch).mockImplementation(
      (): Promise<any> => {
        return Promise.resolve({
          json() {
            return Promise.resolve({ name: "Luke Vader" });
          }
        });
      }
    );

    // getPeople uses the mock implementation for fetch:
    const person = await getPeople(1);
    expect(mocked(fetch).mock.calls.length).toBe(1);
    expect(person).toBeDefined();
    expect(person.name).toBe("Luke Vader");
  });
});
