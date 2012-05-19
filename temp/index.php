<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <script type="text/javascript" src="jquery.js"></script>
        <script type="text/javascript">
            //canvas
            window.onload= function(){
                var canvas = document.getElementById('game');
                var c=canvas.getContext('2d');
             
                c.fillStyle="#000000";
                c.fillRect(0,0,200,200);
                
                var phrase = 'siemanko!';
                
                c.font = 'bold 16px Arial, sans-serif';
                c.fillStyle = '#FFFFFF';
                c.fillText (phrase,10,30);
            }
            //jquery
       
            $(document).ready(function(){
          
                var couchurl = 'http://127.0.0.1:5984/test?callback=?';
                
                $.getJSON(couchurl, function(data) {
                    $("div.content").html(data.db_name+" "+data.instance_start_time);
                });
        
                $('canvas#game').click(function(){
                    alert('dupa');
                });
       
            });
    
    
            /* $(document).ready(function(){
        $("div.content").a('data.db_name');
        var couchurl = 'http://http://127.0.0.1:5984/test';
        
        $.ajax({
            type: "GET",
            url: cauchurl,
            dataType:"json",
            success: function(data)
            {
                $("div.content").html(data.db_name);
            }
        }); */
        
        
        </script>

        <title>Title</title>
    </head>
    <body>
        <div class="content"></div>
        <canvas id="game" width="100" height="100">
            Twoja przeglądarka nie lubi Canvas! lol.
        </canvas>
    </body>
</html>
