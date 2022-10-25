let projectile2: Sprite = null
scene.setBackgroundColor(13)
info.startCountdown(10)
game.onUpdateInterval(750, function () {
    projectile2 = sprites.createProjectileFromSide(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f f f . . . . . 
        . . . . f b b b f b b f . . . . 
        . . . f f b b b b b b b f . . . 
        . . . f b b f b b f b b f . . . 
        . . . f f b b b b b f f . . . . 
        . . . . f f f f f f f . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, randint(-30, -100), randint(10, scene.screenHeight()))
})
