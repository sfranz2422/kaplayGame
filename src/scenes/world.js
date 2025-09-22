import {colorizeBackground, drawTiles, fetchMapData} from "../utils.js";
import {generatePlayerComponents} from "../entities/player.js";
import {generateSlimeComponents} from "../entities/slime.js";

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
            for (const object of layer.objects){
                if (object.name === "player"){
                    entities.player = map.add(generatePlayerComponents(vec2(object.x, object.y)))
                    continue
                }

                if (object.name === "slime"){
                    entities.slimes.push(map.add(generateSlimeComponents(vec2(object.x, object.y))))
                }
            }
            // need custom logic

            continue;
        }
      drawTiles(map,layer, mapData.tileheight,mapData.tilewidth)


    }
camScale(4)
    camPos(entities.player.worldPos())
}