import { getPerson } from "./api";

async function main() {
  const luke = await getPerson(1);
  console.log(luke);
}

main();
