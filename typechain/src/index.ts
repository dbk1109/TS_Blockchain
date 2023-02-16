class Block {
  constructor(private data: string) {}
  static hello() {
    return "Hi";
  }
}
import { init, exit } from "./myPackage";

init({ url: "true" });
exit(2);
