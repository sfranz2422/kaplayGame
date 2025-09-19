// import kaplay from "kaplay";
// // import "kaplay/global"; // uncomment if you want to use without the k. prefix
//
// const k = kaplay({
//     width: 1280,
//     height: 720,
//     letterbox: true,
//     global: false,
//
// });
//
// export default k;

import k from "./kaboomContext.js"
import world from "./scenes/world.js"


const scenes = {
    "world":world,
}

for (const sceneName in scenes){
    k.scene(sceneName, ()=>scenes[sceneName](k))
}


k.go("world")

