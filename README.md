### Code Fellows D49 Week 1 Assignment - Bitmap Transformer

#### Bitmap Transformer - Summary
+ This is project was completed by Tomo Sindberg and David Sheffield.
+ This project builds a bitmap transformer that reads a bitmap from a disk, transforms its color and writes that output to a new file.
+ The bitmap transformer uses node buffers to manipulate binary data.
+ gulpfile.js in the project root executes the program by typing "gulp" from the terminal.
+ Images are saved in the /img folder.
+ buffer.js is in the /lib folder and it is responsible for reading and writing the file.
+ color-map.js is also in the /lib folder and it actually executes the darken and invert functions on our buffer object data.
+ test.js in the /test folder is what completes 2 Mocha / Chai tests.
+ package.JSON itemizes all of our Node.js depencies.
