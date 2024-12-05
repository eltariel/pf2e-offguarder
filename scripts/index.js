Hooks.on("setup", () => {
  game.keybindings.register("pf2e-offguarder", "offguard", {
    name: "Toggle Off-guard",
    hint: "Toggle the Off-guard condition on the token currently hovered over (if you can control it).",
    editable: [
      {
        key: "KeyO",
      },
    ],
    onDown: () => {
      canvas.tokens.hover?.actor?.toggleCondition("off-guard");
      return true;
    },
  });
});
