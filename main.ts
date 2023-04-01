sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    sprites.destroy(sprite, effects.spray, 500)
})
let mySprite2: Sprite = null
let mySprite = sprites.create(assets.image`myImage0`, SpriteKind.Player)
tiles.setCurrentTilemap(tilemap`level`)
mySprite.setPosition(76, 99)
forever(function () {
    pause(2000)
    mySprite2 = sprites.createProjectileFromSide(assets.image`myImage1`, 0, 50)
    mySprite2.x = randint(0, 160)
})
forever(function () {
    if (controller.left.isPressed()) {
        mySprite.x += -1
    } else if (controller.right.isPressed()) {
        mySprite.x += 1
    } else {
    	
    }
})
