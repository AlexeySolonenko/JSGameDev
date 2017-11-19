


20171119

Need to check document JS command. For instance - document.location.reload().





Seems like with this course I learned how Udacity game is supposed to store the 
pictures and to load them each time from 
the disk.

<!DOCTYPE html>
<html>
<body>

<p>Image to use:</p>
<img id="scream" src="img_the_scream.jpg" alt="The Scream" width="220" height="277">

<p>Canvas to fill:</p>
<canvas id="myCanvas" width="250" height="300"
style="border:1px solid #d3d3d3;">
Your browser does not support the HTML5 canvas tag.</canvas>

<p><button onclick="myCanvas()">Try it</button></p>

<script>
function myCanvas() {
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    var img = document.getElementById("scream");
    ctx.drawImage(img,10,10);
}
</script>

</body>
</html>


20171118

I expect to learn new design pattersn for games and complex animations from this course.
I expect to make a new project for a portfolio.


