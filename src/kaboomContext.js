import kaplay from "kaplay";
// import "kaplay/global"; // uncomment if you want to use without the k. prefix

const k = kaplay({
    width: 1280,
    height: 720,
    letterbox: true,
    global: false,

});

export default k;