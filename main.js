import kaplay from "https://unpkg.com/kaplay@3001.0.19/dist/kaplay.mjs";

kaplay({
    width:600,
    height: 600,
    background: [255, 230, 234],
});

scene("menu", () => {
    const container = add([
        rect(500,500),
        anchor("center"),
        pos(center()),
        color(240, 189, 198),
    ]);

    const stbtn = add([
        rect(200,30),
        anchor("center"),
        pos(center()),
        area(),
    ]);

    stbtn.onHover(() => {
        stbtn.scale = vec2(1.1,1.1);
    });
    stbtn.onHoverEnd(() => {
        stbtn.scale = vec2(1,1);
    });
    stbtn.onClick (() => {
        go("game");
    });

    stbtn.add([
        anchor("center"),
        color(133, 57, 70),
        text("start", {
            size: 20,
            letterSpacing:0,
        }),
    ]);

})

scene("game", () => {
    const container = add([
        rect(500,500),
        anchor("center"),
        pos(center()),
        color(240, 189, 198),
    ]);
})

go("menu");





