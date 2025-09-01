import kaplay from "https://unpkg.com/kaplay@3001.0.19/dist/kaplay.mjs";

kaplay({
    width:600,
    height: 600,
    background: [255, 230, 234]
});

const container = add([
    rect(500,500),
    pos(50,50),
    color(240, 189, 198),
]);

const stbtn = container.add([
    rect(200,20),
    pos(150,240),
]);

stbtn.add([
    pos(85.9,5),
    color(133, 57, 70),
    text("start", {
        size: 10,
        letterSpacing:0,
        width:28.2,
    }),

])