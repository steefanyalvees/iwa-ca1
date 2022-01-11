<?xml version="1.0" encoding="UTF-8"?>

<xsl:stylesheet version="1.0"
xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

<xsl:template match="/">
  

  <table border="1">
    
      <th>Book</th>
      <th>gender</th>
      <th>price</th>
      <th>author</th>
      
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
  
</xsl:template>
</xsl:stylesheet>
