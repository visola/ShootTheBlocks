# ShootTheBlocks

This is a very simple example using [Three.js](https://github.com/mrdoob/three.js/)
and [Physijs](https://github.com/chandlerprall/Physijs) to build a shoot-a-pile-of-blocks type of game.

I wrote this to learn how both frameworks work and also to experience what is like to write a game 
(even the simplest one like this).

This is how it looks like:
![alt tag](https://raw.githubusercontent.com/visola/ShootTheBlocks/master/screen-shot.png)

Some of the things I've used in this code that you may think is useful:

1. [Directional light](https://github.com/visola/ShootTheBlocks/blob/master/js/objects/light.js) with shadows
1. [Control the direction](https://github.com/visola/ShootTheBlocks/blob/master/js/controls/bullet.js) of the shooting using the keyboard
1. [Control the camera](https://github.com/visola/ShootTheBlocks/blob/master/js/controls/camera.js) using the mouse

## How to use this

Download the code as .zip or clone this repository.

To run the game you'll need a HTTP server. You can either put the files in your running HTTP server if you have
one or use the simple one that comes with Python if you have Python installed:

```
$ cd /path/to/where/you/unzipped/the/files
$ python -m SimpleHTTPServer
```
