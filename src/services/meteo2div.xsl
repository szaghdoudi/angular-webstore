<?xml version="1.0" encoding="utf-8" ?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:output method="html" encoding="utf-8" version="5.0"/>

<xsl:template match="/">
	<div class="meteo">
		<xsl:value-of select="meteo/date" />
		<br />Ville : <xsl:value-of select="meteo/ville" />
		<br />L'homme du jour : <xsl:value-of select="meteo/ephemerides/personne" />
		<br />Signe : <xsl:value-of select="meteo/ephemerides/astro" />
	</div>
</xsl:template>


</xsl:stylesheet>