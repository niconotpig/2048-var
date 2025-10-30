import kaplay from "https://unpkg.com/kaplay@3001.0.19/dist/kaplay.mjs";

kaplay({
    width:600,
    height: 600,
    background: [251,242,237],
});

scene("menu", () => {
    const container = add([
        rect(500,500),
        anchor("center"),
        pos(center()),
        color(253,190,221,255),
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
    setLayers(["back", "mid", "top"], "back");
    const container = add([
        rect(500,500),
        anchor("center"),
        pos(center()),
        color(253,190,221,255),
    ]);
    //text
    const keyText = add([
        text("press any key",{
            size: 20,
        }),
        color(BLACK),
        anchor("center"),
        pos(center())
    ]);
    //grid
    //column 1
        const _00 = container.add([
        rect(100,100),
        color(255,199,226),
        anchor("botright"),
        pos(-100,-100),
        outline(4, Color.fromHex("f7bbd7")),
        layer("back")

    ]);
        const _01 = container.add([
        rect(100,100),
        color(255,199,226),
        anchor("botright"),
        pos(-100,0),
        outline(4, Color.fromHex("ffffff")),
    ]);
        const _02 = container.add([
        rect(100,100),
        color(255,199,226),
        anchor("topright"),
        pos(-100,0),
        outline(4, Color.fromHex("f7bbd7")),
    ]);
        const _03 = container.add([
        rect(100,100),
        color(255,199,226),
        anchor("topright"),
        pos(-100,100),
        outline(4, Color.fromHex("f7bbd7")),
    ]);
    //column 2
        const _10 = container.add([
        rect(100,100),
        color(255,199,226),
        anchor("botright"),
        pos(0,-100),
        outline(4, Color.fromHex("f7bbd7")),
    ]);
        const _11 = container.add([
        rect(100,100),
        color(255,199,226),
        anchor("botright"),
        pos(0,0),
        outline(4, Color.fromHex("f7bbd7")),
    ]);
        const _12 = container.add([
        rect(100,100),
        color(255,199,226),
        anchor("topright"),
        pos(0,0),
        outline(4, Color.fromHex("f7bbd7")),
    ]);
        const _13 = container.add([
        rect(100,100),
        color(255,199,226),
        anchor("topright"),
        pos(0,100),
        outline(4, Color.fromHex("f7bbd7")),
    ]);
    //column 3
        const _20 = container.add([
        rect(100,100),
        color(255,199,226),
        anchor("botleft"),
        pos(0,-100),
        outline(4, Color.fromHex("f7bbd7")),
    ]);
        const _21 = container.add([
        rect(100,100),
        color(255,199,226),
        anchor("botleft"),
        pos(0,0),
        outline(4, Color.fromHex("f7bbd7")),
    ]);
        const _22 = container.add([
        rect(100,100),
        color(255,199,226),
        anchor("topleft"),
        pos(0,0),
        outline(4, Color.fromHex("f7bbd7")),
    ]);
        const _23 = container.add([
        rect(100,100),
        color(255,199,226),
        anchor("topleft"),
        pos(0,100),
        outline(4, Color.fromHex("f7bbd7")),
    ]);
    //column 4
        const _30 = container.add([
        rect(100,100),
        color(255,199,226),
        anchor("botleft"),
        pos(100,-100),
        outline(4, Color.fromHex("f7bbd7")),
    ]);
        const _31 = container.add([
        rect(100,100),
        color(255,199,226),
        anchor("botleft"),
        pos(100,0),
        outline(4, Color.fromHex("f7bbd7")),
    ]);
        const _32 = container.add([
        rect(100,100),
        color(255,199,226),
        anchor("topleft"),
        pos(100,0),
        outline(4, Color.fromHex("f7bbd7")),
    ]);
        const _33 = container.add([
        rect(100,100),
        color(255,199,226),
        anchor("topleft"),
        pos(100,100),
        outline(4, Color.fromHex("f7bbd7")),
    ]);

    //gamestart
    onKeyPress("any", () =>{
        destroy(keyText);
    });

    onKeyPress("space", () =>{
        const x = rand(3);
        const y = rand(3);
        
        const coord = "_" + x() + y();
        const blahblah = add([
            text(coord, {
                size: 20
            }),
            color(BLACK),
        ])
        // const piece = (coord).add([
        //     rect(100,100),
        //     anchor("botright"),
        //     pos(0,0),
        //     color(BLACK),
        //     outline(4, Color.fromHex("ff00ff")),
        //     layer("top"), 
        // ]);
    })
})
go("menu");