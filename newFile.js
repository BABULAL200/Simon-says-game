const { btn, allBtns, btnPress } = require("./app");

for (btn of allBtns) {
    btn.addEventListener("click", btnPress);
}
