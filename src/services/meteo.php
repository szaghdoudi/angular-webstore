<?php 
	sleep( 2);
	$s = '<?xml version="1.0" encoding="UTF-8" ?>';
	$s .= "<meteo>";
	$s .= "<date>Mercredi 28/02/2018</date>";
	$s .= "<ville>Nantes</ville>";
	$s .= "<ephemerides>";
	$s .= "<jour>07h34</jour>";
	$s .= "<nuit>18h32</nuit>";
	$s .= "<personne>M. Auguste ROMAIN</personne>";
	$s .= "<astro>Poissons vous êtes rêveur !</astro>";
	$s .= "</ephemerides>";
	$s .= "</meteo>";

	header('Content-Type: text/xml; charset=utf-8;');
	echo( utf8_encode($s));
?>