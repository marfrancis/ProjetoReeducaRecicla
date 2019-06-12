<?php 

// $_GET['categoria'];
// $_GET['cidade'];

if(!isset($_GET['categoria']) || strlen($_GET['categoria']) == 0) die( json_encode([]) );

echo json_encode([
	[
		'latitude' => '-23.605895',
		'longitude' => '-46.563433',
		'nome' => 'Assaí São Caetano do Sul',
		'endereco' => 'R. Dr. Francisco Mesquita, 1000, Vila Industrial, Santo André / SP',
		'telefone' => '(11) 4444-4444'
	],
	[
		'latitude' => '-23.607518',
		'longitude' => '-46.562430',
		'nome' => 'Assaí São Caetano do Sul',
		'endereco' => 'R. Dr. Francisco Mesquita, 1000, Vila Industrial, Santo André / SP',
		'telefone' => '(11) 4444-4444'  , 
	],
	[
		'latitude' => '-23.606525',
		'longitude' => '-46.564221',
		'nome' => 'Assaí São Caetano do Sul',
		'endereco' => 'R. Dr. Francisco Mesquita, 1000, Vila Industrial, Santo André / SP',
		'telefone' => '(11) 4444-4444'  
	],
	[
		'latitude' => '-23.607006',
		'longitude' => '-46.567590',
		'nome' => 'Assaí São Caetano do Sul',
		'endereco' => 'R. Dr. Francisco Mesquita, 1000, Vila Industrial, Santo André / SP',
		'telefone' => '(11) 4444-4444' , 
	],
	[
		'latitude' => '-23.607783',
		'longitude' => '-46.566410',
		'nome' => 'Assaí São Caetano do Sul',
		'endereco' => 'R. Dr. Francisco Mesquita, 1000, Vila Industrial, Santo André / SP',
		'telefone' => '(11) 4444-4444' 
	],
]);


