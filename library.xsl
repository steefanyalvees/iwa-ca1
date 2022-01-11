<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
<xsl:template match="/">
 
 <html>
  <body>
  <h2>BOOOK COLLECTION</h2>
<table id="books" border="1" class="indent">
    <thead>
        <tr>
            <th>Select</th>
            <th>Item</th>
            <th>Value</th>
            
        </tr>
    
        <xsl:for-each select="//section">
            <tr>
                <td><xsl:value-of select="item"/></td>
                <td><xsl:value-of select="value"/></td>
            </tr>

    <tbody>
</table>
</xsl:template>
</xsl:stylesheet>