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

	$('#cifra_control_btn').click(function() {

		var escape = function() {
			$('#cifra_control').val('Formato inválido');
		};
		var string = $('#cifra_control').val(),
			numero = null;
		if (string.length == 8) {
			try {
				var index = "XYZ".indexOf(string.substr(0, 1));
				if (index !== -1) { //NIE
					numero = pad(parseInt(index.toString() + string.substr(1, string.length - 1), 10), 8);
				} else { //DNI
					numero = parseInt(string, 10);
				}
				if (!isNaN(numero)) {
					$('#cifra_control').val(string + calcula_letra(numero));
				} else {
					escape();
				}
				
			} catch (e) {
				escape();
			}
			
		} else {
			escape();
		}
		
	});
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
	return cif + calcula_control_cif(cif);
}

function calcula_letra(dni_int) {
    var lockup = 'TRWAGMYFPDXBNJZSQVHLCKE';
    return lockup.charAt(dni_int % 23);
}

function pad (str, max) {
	str = str.toString();
  	return str.length < max ? pad("0" + str, max) : str;
}

function calcula_control_cif(cif) {
	var valueCif = cif.substr(1, cif.length - 1); 
	var suma = 0; 
	for (i = 1; i < valueCif.length; i = i + 2) { 
		suma = suma + parseInt(valueCif.substr(i, 1)); 
	} 
	var suma2 = 0; 
	for (i = 0; i < valueCif.length; i = i + 2) { 
		result = parseInt(valueCif.substr(i, 1)) * 2; 
		if (String(result).length == 1) { 
			suma2 = suma2 + parseInt(result); 
		} else { 
			suma2 = suma2 + parseInt(String(result).substr(0, 1)) + parseInt(String(result).substr(1, 1)); 
		} 
	}
	suma = suma + suma2; 
	var unidad = String(suma).substr(1, 1);
	unidad = 10 - parseInt(unidad); 
	var primerCaracter = cif.substr(0, 1).toUpperCase(); 
	if (primerCaracter.match(/^[FJKNPQRSUVW]$/)) { 
		return String.fromCharCode(64 + unidad).toUpperCase();
	} else if (primerCaracter.match(/^[XYZ]$/)) { 
		var newcif; 
		if (primerCaracter == "X") {
			newcif = cif.substr(1); 
		}
		else if (primerCaracter == "Y") {
			newcif = "1" + cif.substr(1); 
		}
		else if (primerCaracter == "Z") {
			newcif="2" + cif.substr(1); 
		}
		return calcula_letra(newcif); 
	} else if (primerCaracter.match(/^[ABCDEFGHLM]$/)) { 
		if (unidad == 10) {
			unidad=0;
		} 
		return unidad;
	} else { 
		return calcula_letra(cif); 
	}
}
