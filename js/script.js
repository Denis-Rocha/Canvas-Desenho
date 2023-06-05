var canvas = document.getElementById("canvas");

		var ctx = canvas.getContext("2d");
       
        // Definindo o tamanho do canvas
        canvas.width = 1920;
        canvas.height = 1080;

        // ceu
        ctx.fillStyle = 'skyblue';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Sol
        ctx.beginPath();
        ctx.arc(100, 100, 50, 0, 2 * Math.PI);
        ctx.fillStyle = 'yellow';
        ctx.fill();

        // estrada
        ctx.fillStyle = 'tan';
        ctx.fillRect(0, canvas.height * 0.6, canvas.width, canvas.height * 0.4);

       // cactos
       ctx.fillStyle = 'green';
       ctx.fillRect(100, canvas.height * 0.4, 20, canvas.height * 0.2);
       ctx.fillRect(200, canvas.height * 0.4, 20, canvas.height * 0.2);
       ctx.fillRect(300, canvas.height * 0.4, 20, canvas.height * 0.2);


         // rodas
         ctx.fillStyle = "black";
         ctx.fillRect(820, 610, 25, 50);
         ctx.fillRect(1045, 610, 25, 50);
         // corpo carro
         ctx.fillStyle = 'red';
         ctx.fillRect(820, 570, 250, 80);
 
         // para-brisa
         ctx.fillStyle = 'grey';
         ctx.fillRect(820, 520, 250, 50);
 
 
         // farol
         ctx.fillStyle = 'yellow';
         ctx.beginPath();
         ctx.arc(1050, 595, 10, 0, 2 * Math.PI);
         ctx.arc(850, 595, 10, 0, 2 * Math.PI);
         ctx.fill();
 
         // retrovisor
         ctx.fillStyle = 'black';
         ctx.fillRect(800, 570, 20, 15);
         ctx.fillRect(1070, 570, 20, 15);
 
         // simbolo
         var img = new Image();
 
         img.src = "img/simbolo.png";
 
         img.onload = function() {
             ctx.drawImage(img, 935, 600, 20, 20);
         }
         
        