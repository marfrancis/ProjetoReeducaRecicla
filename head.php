	<head>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, user-scalable=yes">
		<meta http-equiv="X-UA-Compatible" content="ie=edge">
		<meta name="theme-color" content="#000000">
		<link rel="icon" href="img/favicon.png" sizes="16x16 32x32" type="image/jpg">

		<!-- Metas para o Google -->
		<title><?php @print($title); ?></title>
		<meta name="description" content="<?php @print($description); ?>">
		<meta name="keywords" content="<?php @print($keywords); ?>">

		<!-- Metas para o Facebook -->
		<meta property="og:type" content="website" />
		<meta property="og:title" content="<?php @print($facebook_title); ?>" />
		<meta property="og:url" content="<?php @print($facebook_url); ?>"/>
		<meta property="og:site_name" content="<?php @print($facebook_site_name); ?>" />
		<meta property="og:description" content="<?php @print($facebook_description); ?>"/>
		<meta property="og:image" content="<?php @print($facebook_image); ?>" />
		<?php if (!empty($facebook_image_width)): ?><meta property="og:image:width" content="<?php @print($facebook_image_width); ?>" /><?php endif ?>
		<?php if (!empty($facebook_image_height)): ?><meta property="og:image:height" content="<?php @print($facebook_image_height); ?>" /><?php endif ?>
		<meta property="fb:app_id" content="501123709922257" />

		<title>Reeduca Recicla</title>

		<?php if (strpos($_SERVER['HTTP_USER_AGENT'], "Google Page Speed Insights") === false): ?>
			<!-- O que tiver aqui dentro o page speed do Google não consegue ver -->
		<?php endif ?>
	</head>