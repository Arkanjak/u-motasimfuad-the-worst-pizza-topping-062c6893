import { mkdirSync, writeFileSync } from "node:fs";

// One-line pitch for a terrible topping: wet socks plus glitter.
const entry = "Try our new pizza topped with wet socks and glitter — it tastes like laundry day and looks like a disco threw up, so every bite sparkles with regret.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
