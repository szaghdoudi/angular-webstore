/*global
document, window, $
*/
/*jslint
    white, this, browser
    */

    const WS = "http://localhost:3000/";
   
    String.prototype.getWsProduct = limit => {
    	let _url = "produits";
    	if(limit > 0){
    		_url += "?_limit=" + limit;
    	}
    	return WS + _url;
    };  



    function afficherProduits(data,title){
    	
    	title = title  || "Tous les produits";
    	let _html = `<h3>${title}</h3>`;
    	_html += `<div class="produits">`;
    	_html += `</div>`;
    	_html += data
    	.map(item => {return `<p class="produit">${item.id}-${item.name}</p>`})
    	.join('');
    	_html += "</div>";
    	$("#main section").html(_html);
    }


    function chargerProduits(limit,title){
	// appel de webservice RESTFUL JSON
	$.get(WS.getWsProduct(limit), data => {afficherProduits(data,title);});
}


function init(){
	//window.alert("index ok !");
	$("#menuProduitTous").click(chargerProduits);
	$("#menuProduit3").click(() =>chargerProduits(3,"Produit par 3 !"));
}
$(document).ready(init);
