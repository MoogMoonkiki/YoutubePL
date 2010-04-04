YoutubePL
=========

![Screenshot](http://moog.moonkiki.com/wp-content/uploads/2010/03/youtubepl2.png)

Include a script containing the class YoutubePL written using Mootools and Google API and you will bind your combobox and a div to the plugin.
On the same page you can create multiple pleaylist.  
Demo is here: <a href="http://moog.moonkiki.com/MooG/plugin/YoutubePL/youtubePLDemo.html">Demo 1 e 2 of YoutubePL</a>

How to use
----------

Include Mootools 1.4 with Elements.from more at least. Inlude Google API and charge SWF api in this way:

	<script src="http://www.google.com/jsapi" type="text/javascript">
        </script>
        <script>
            google.load("swfobject", "2.1");
        </script>


Then include YoutubePL script:

        <script src="YoutubePL.js" type="text/javascript">
        </script>

You can choose two way for use YoutubePL. First one is to link your YoutubePL instance to a div and a select with youtube video's list. Second one is to link YoutubePL only to a div and giive an array of videos tio the constructor.


	var ypl = new YoutubePL({
            select: 'videoSelection',
            videoContainer: 'videoDiv'
        });
        var ypl2 = new YoutubePL({
            videoContainer: 'videoDiv2',
            videos: ['2TaclzGjmm8', 'vorxYDEtuRY', '9mO5cKO7toE']
        });
        
        var runDemo = function(){
            ypl.run();
            ypl2.run();
        }
        

At the end run your ypl instances:

	google.setOnLoadCallback(runDemo());


More info
-----------------

You can find more info at <a href="http://moog.moonkiki.com">http://moog.moonkiki.com</a>

Demo is here: <a href="http://moog.moonkiki.com/MooG/plugin/YoutubePL/youtubePLDemo.html">demo youtubepl</a>