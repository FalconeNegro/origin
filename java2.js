function cancella(tabella)
{
var tab = document.getElementById("tabella");
var tr = tab.getElementsByTagName("tr");
tr[0].remove();
}
