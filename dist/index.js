import { concatenation } from "./concatenation";
import { merge } from "./generics";
const button = document.querySelector("button");
const input = document.querySelector("input");
if (button && input) {
  button.addEventListener("click", () => {
    concatenation(input.value, "hello!");
  });
}
//# sourceMappingURL=index.js.map
