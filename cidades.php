<?php 
////////////////////////////////////////////////////////////////////
// retorna um json estático com as cidades                        //
// posteriormente deve retornar as cidades que possuem marcadores //
////////////////////////////////////////////////////////////////////
echo json_encode([
	['id' => 1,		'nome' => 'São Paulo',					'imagem' => 'img/id_1.jpg'],
	['id' => 2,		'nome' => 'Barueri',					'imagem' => 'https://dummyimage.com/75x76/b8b8b8/fff/?text=Barueri'],
	['id' => 3,		'nome' => 'Santo André',				'imagem' => 'https://dummyimage.com/75x76/b8b8b8/fff/?text=Santo André'],
	['id' => 4,		'nome' => 'São Bernardo do Campo',		'imagem' => 'https://dummyimage.com/75x76/b8b8b8/fff/?text=São Bernardo do Campo'],
	['id' => 5,		'nome' => 'São Caetano do Sul',			'imagem' => 'https://dummyimage.com/75x76/b8b8b8/fff/?text=São Caetano do Sul'],
	['id' => 6,		'nome' => 'Diadema',					'imagem' => 'https://dummyimage.com/75x76/b8b8b8/fff/?text=Diadema'],
	['id' => 7,		'nome' => 'Mauá',						'imagem' => 'https://dummyimage.com/75x76/b8b8b8/fff/?text=Mauá'],
	['id' => 8,		'nome' => 'Ribeirão Pires',				'imagem' => 'https://dummyimage.com/75x76/b8b8b8/fff/?text=Ribeirão Pires'],
	['id' => 9,		'nome' => 'Rio Grande da Serra',		'imagem' => 'https://dummyimage.com/75x76/b8b8b8/fff/?text=Rio Grande da Serra'],
	['id' => 10,	'nome' => 'Osasco',						'imagem' => 'https://dummyimage.com/75x76/b8b8b8/fff/?text=Osasco'],
	['id' => 11,	'nome' => 'Guarulhos',					'imagem' => 'https://dummyimage.com/75x76/b8b8b8/fff/?text=Guarulhos'],
]);
