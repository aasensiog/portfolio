$(document).ready(function() {
	var $result = $('#result');
	$('#nif').click(function() {
		$('#result_nif').val(genera_nif());
	});
	$('#nie').click(function() {
		$('#result_nie').val(genera_nie());
	});
	$('#cif').click(function() {
		$('#result_cif').val(genera_cif());
	});

	$('#result_nif').val(genera_nif());
	$('#result_nie').val(genera_nie());
	$('#result_cif').val(genera_cif());
});

function genera_nif() {
	var numero = Math.floor((Math.random() * 100000000));
	return pad(numero.toString(), 8) + calcula_letra(numero);
}

function genera_nie() {
	var primer_digito = Math.floor((Math.random() * 3));
	var numero = Math.floor((Math.random() * 10000000));
	return "XYZ".charAt(primer_digito) + pad(numero.toString(), 7) + calcula_letra(parseInt(primer_digito.toString() + numero.toString()));
}

function genera_cif() {
	//http://www.jagar.es/Economia/Ccif.htm
	// O P P N N N N N C
	var O = "ABCDEFGHJNPQRSUVW"; //17 //KLM formato antiguo
	O = O.charAt(Math.floor(Math.random() * 17));
	var P = Math.floor((Math.random() * 100) + 1);
	var N = Math.floor((Math.random() * 100000));
	var cif = O + pad(P.toString(), 2) + pad(N.toString(), 5);
	
    var a = 0;
    var b = 0;
    var calculo = new Array(0,2,4,6,8,1,3,5,7,9);
    var uletra = new Array('J', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I') ;
    var sonletra = ['N', 'P', 'Q', 'R', 'W'];
     
    for(x=2;x<=6;x+=2) {
	    a = a + parseInt(cif.substr(x,1));
	    b = b + calculo[parseInt(cif.substr(x - 1, 1))];
    }	
    b = b + calculo[parseInt(cif.substr(x - 1, 1))];
    c = a + b;
    d = (10 - (c % 10));

    if (sonletra.indexOf(O) != -1) {
    	control = uletra[d];
    } else {
    	control = d;
    }

    return cif + control.toString();
}

function calcula_letra(dni_int) {
    var lockup = 'TRWAGMYFPDXBNJZSQVHLCKE';
    return lockup.charAt(dni_int % 23);
}

function pad (str, max) {
	str = str.toString();
  	return str.length < max ? pad("0" + str, max) : str;
}






