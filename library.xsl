<?xml version="1.0" encoding="UTF-8"?>

<xsl:stylesheet version="1.0"
xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

<xsl:template match="/">
  <html>
  <body>
  <h2>Book</h2>
  <table border="1">
    <tr bgcolor="#9acd32">
      <th>Book</th>
      <th>gender</th>
      <th>price</th>
      <th>author</th>
      <th>select</th>
    </tr>
    <xsl:for-each select="books/list">
    <tr >
      <td><xsl:value-of select= "bookname"/></td>
      <td><xsl:value-of select="gender"/></td>
      <td><xsl:value-of select="price"/></td>
      <td><xsl:value-of select="author"/></td>
      


                    
                        
    </tr>
    </xsl:for-each>

   

  </table>
  </body>
  </html>
</xsl:template>
</xsl:stylesheet>