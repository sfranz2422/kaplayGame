import {colorizeBackground, drawTiles, fetchMapData} from "../utils.js";

export default async function world(){
    colorizeBackground(76,170,255)
    const mapData = await fetchMapData("./assets/maps/world.json")
const map = add([
    pos(0,0)
    ]
)
    const entities = {
        player:null,
        slimes:[],

    }

    const layers = mapData.layers;
    for (const layer of layers){
        if (layer.name === "Boundaries"){
            // TODO
            // need custom logic
            continue;
        }
        if (layer.name === "SpawnPoints"){
            // TODO
            // need custom logic

            continue;
        }
      drawTiles(map,layer, mapData.tileheight,mapData.tilewidth)


    }
camScale(2)
}