import { concatenation } from "./concatenation";

import { printDetails, useVehicle, letAnimalTalk } from "./advancedType";
printDetails({ name: "Tom", privileges: ["admin", "user", "moderator"] });
const button = document.querySelector("button");
const input = document.querySelector("input");
if (button && input) {
  button.addEventListener("click", () => {
    concatenation(input.value, "hello!");
  });
}
//# sourceMappingURL=index.js.map
