export async function fetchMapData(mapPath){
    return await (await fetch(mapPath)).json()

}

export function colorizeBackground(r,g,b){
add([
    rect(canvas.width,canvas.height),
    color(r,g,b),
    fixed(),
])

}

export function drawTiles(map,layer,tileheight, tilewidth){
let nbOfDrawnTiles = 0
    const tilePos = vec2(0,0)
    for (const tile of layer.data){
        if (nbOfDrawnTiles % layer.width === 0) {
            tilePos.x = 0
            tilePos.y += tileheight

        }else{
            tilePos.x += tilewidth
        }
        nbOfDrawnTiles ++
        if (tile === 0) continue;
        map.add([
            sprite("assets", {frame:tile-1}),
            pos(tilePos.x, tilePos.y),
            offscreen(),

        ])
    }
}