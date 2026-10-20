# Memória Descritiva

My process of recreating the painting:
1. analysing the original, defying main parts. the painting has 4 main elements, 3 rectangles (red, yellow and blue) and black lines with different width.
2. adding basic shapes
i used a web tool [Image Coordinates Finder](https://imageonline.io/find-coordinates-of-image/) to get exact coordinates on the image of the painting (i resized the image to the same pixels, 600x612px). and one by one i added each shape. i used web tool [ImageColorPicker.com](https://imagecolorpicker.com/) to pick colors.
3. adding gradients and texture
i decided to use gradients on the background and the blue and yellow rectangles, to replicate the uneven shift in colors on the original painting. i created functions for each gradient. 
i also added a noise texture on the background to imitate the texture of the canvas. i noticed that if i comment out line noLoop(), it creates an inetersting effect that covers image with dots. i use this line to stop this animation and only adding one layer of noise.
4. filter blur on lines
lastly, i wanted to add a littble bit og blur to the lines, to make them appear less digital and more like a line painted with paint. at first it was hard to understand how to apply a blur filter only to lines, but then i found out that the filters are used only on the entire canvas or on layers. so i out all black lines on one layer and applied a filter. 

in the end i was able to recreate a painting of Mondrian.