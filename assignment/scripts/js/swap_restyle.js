// JavaScript Document
var counter = 0;
$(document).ready(function() {
	
	selectPage();
	selectModel();

	function selectPage() {

		$('#home').show();
		$('#models').hide();
		$('#about').hide();
		$('#interaction').hide();
		$('#cokeDescription').hide();
		$('#oasisDescription').hide();
		$('#pepperDescription').hide();
		$('#spriteDescription').hide();
		$('#about').hide();
		$('#statement').hide();
		$('#refsite').hide();


		$('#navHome').click(function(){
			$('#home').show();
			$('#about').hide();
			$('#models').hide();
			$('#refsite').hide();
			$('#about').hide();
			$('#interaction').hide();
			$('#cokeDescription').hide();
			$('#oasisDescription').hide(); 
			$('#pepperDescription').hide(); 
			$('#spriteDescription').hide();

		});

		$('#navAbout').click(function(){
			$('#home').hide();
			$('#about').show();
			$('#models').hide();
			$('#refsite').hide();
			$('#about').hide();
			$('#interaction').hide();
			$('#cokeDescription').hide();
			$('#oasisDescription').hide(); 
			$('#pepperDescription').hide();
			$('#spriteDescription').hide();

		});

		$('#navModels').click(function(){
			$('#home').hide();
			$('#about').hide();
			$('#models').show();
			$('#interaction').show();
			$('#refsite').hide();
			$('#about').hide();
			$('#cokeDescription').show();
			$('#oasisDescription').hide(); 
			$('#pepperDescription').hide();
			$('#spriteDescription').hide();
			$('#statement').hide();

		});

		$('#navStatement').click(function(){
			$('#home').hide();
			$('#about').hide();
			$('#models').hide();
			$('#statement').show();
			$('#about').hide();
			$('#refsite').hide();
			$('#interaction').hide(); 
			$('#cokeDescription').hide();
			$('#oasisDescription').hide(); 
			$('#pepperDescription').hide();
			$('#spriteDescription').hide();

		});

		$('#navAbout').click(function(){
			$('#home').hide();
			$('#about').hide();
			$('#models').hide();
			$('#statement').hide();
			$('#refsite').hide();
			$('#about').show();
			$('#interaction').hide(); 
			$('#cokeDescription').hide();
			$('#oasisDescription').hide(); 
			$('#pepperDescription').hide();
			$('#spriteDescription').hide();

		});

		$('#navRefsite').click(function(){
			$('#home').hide();
			$('#about').hide();
			$('#models').hide();
			$('#statement').hide();
			$('#about').hide();
			$('#refsite').show();
			$('#interaction').hide(); 
			$('#cokeDescription').hide();
			$('#oasisDescription').hide(); 
			$('#pepperDescription').hide();
			$('#spriteDescription').hide();

		});
	}

	function selectModel() {

		$('#navCoke').click(function(){
			$('#coke').show();
			$('#oasis').hide();
			$('#pepper').hide();
			$('#sprite').hide();
			$('#interaction').show(); 
			$('#cokeDescription').show();
			$('#oasisDescription').hide(); 
			$('#spriteDescription').hide();  	   
			$('#pepperDescription').hide(); 
		});

		$('#navOasis').click(function(){
			$('#coke').hide();
			$('#oasis').show();
			$('#pepper').hide();
			$('#sprite').hide();
			$('#interaction').show(); 
			$('#cokeDescription').hide();
			$('#oasisDescription').show();
			$('#spriteDescription').hide();  	   
			$('#pepperDescription').hide();  	  	  
		});

		$('#navPepper').click(function(){
			$('#coke').hide();
			$('#oasis').hide();
			$('#pepper').show();
			$('#sprite').hide();
			$('#interaction').show(); 
			$('#cokeDescription').hide();
			$('#oasisDescription').hide(); 
			$('#pepperDescription').show();
			$('#spriteDescription').hide();  	   
		});
		$('#navSprite').click(function(){
			$('#coke').hide();
			$('#oasis').hide();
			$('#pepper').hide();
			$('#sprite').show();
			$('#interaction').show(); 
			$('#cokeDescription').hide();
			$('#oasisDescription').hide(); 
			$('#pepperDescription').hide();
			$('#spriteDescription').show(); 	   

		});
	}

});

$(document).ready(function() {
	$("#navModels").click(function() {
	  $("#home").hide();
	  $("#models").show();
	});
  });



function changeLook() {
	counter += 1;
	switch (counter) {
		case 1:
			document.getElementById('bodyColor').style.backgroundColor = '#203354';
			document.getElementById('headerColor').style.backgroundColor = '#585858';
			document.getElementById('footerColor').style.backgroundColor = '#888888';
			break;
		case 2:
			document.getElementById('bodyColor').style.backgroundColor = '8B0000';
			document.getElementById('headerClor').style.backgroundColor = '#585858';
			document.getElementById('footerColor').style.backgroundColor = '#888888';
			break;
		case 3:
			document.getElementById('bodyColor').style.backgroundColor = '#013220';
			document.getElementById('headerColor').style.backgroundColor = '#585858';
			document.getElementById('footerColor').style.backgroundColor = '#888888';
			break;
		case 4:
			counter = 0;
			document.getElementById('bodyColor').style.backgroundColor = 'lightgrey';
			document.getElementById('headerColor').style.backgroundColor = '#585858';
			document.getElementById('footerColor').style.backgroundColor = '#888888';
			break;
	}
}

function changeBack() {
	document.getElementById('bodyColor').style.backgroundColor = '#333333';
	document.getElementById('headerColor').style.backgroundColor = '#585858';
	document.getElementById('footerColor').style.backgroundColor = '#888888';
}