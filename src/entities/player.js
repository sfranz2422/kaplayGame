export function generatePlayerComponents(position){
    return [
     sprite("assets",{
         anim:"player-idle-down"
     }),
        area({
            shape: new Rect(vec2(3,4),10,12),

        }),
        body(),
        pos(position),
        opacity(),
        {
            speed:100,
            attackPower:1,
            direction:"down",
            isAttacking:false,
        },
        "player",

    ]
}