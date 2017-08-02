

viewCart=function()
{
	var items_str=localStorage.getItem("items");	
	var items=JSON.parse(items_str);

	var tot_cost=0;
	for(var i=0;i<items.length;i++)
	{
		var obj=items[i];
		
		var product_name=obj.product_name;
		var product_qty=obj.product_qty;
		var line_item_total=obj.line_item_total;
		
		var main_ul=document.getElementById("view_item_container");
		
		var li=document.createElement("li");
		
		var h4=document.createElement("h4");
		h4.innerHTML=product_name;
		var p1=document.createElement("p");
		p1.innerHTML="Qty : "+product_qty;
		var p2=document.createElement("p");
		p2.innerHTML="Amount : <strong>"+line_item_total+" Rs</strong>";
		
		tot_cost=(+tot_cost)+(+line_item_total)
		
		li.appendChild(h4);
		li.appendChild(p1);
		li.appendChild(p2);
		
		main_ul.appendChild(li);
	}
	
	document.getElementById("real_cost").innerHTML=tot_cost+" Rs";
	document.getElementById("tot_cost").innerHTML=(tot_cost+100)+" Rs";
	document.getElementById("tot_cost_last").innerHTML=(tot_cost+100)+" Rs";
	
	if(items.length==0)
	{
		alert("No Items in Cart, Add Items First....!!!");
		window.location.href="index.html";
	}
	
};

payment=function()
{
	alert("Plz. wait Payment is Proccessing...");
	window.location.href="index.html";
	
};