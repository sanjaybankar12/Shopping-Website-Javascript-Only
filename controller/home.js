
var items=[];

init=function()
{
	localStorage.removeItem("items");
	var items_list=[{"id":1,"product_name":"T-Shirt","unit_price":250},{"id":2,"product_name":"Ear Rings","unit_price":150},{"id":3,"product_name":"OCA 8 Book","unit_price":999},
	{"id":4,"product_name":"Levis Jeans","unit_price":2500},{"id":5,"product_name":"Green Tea","unit_price":150},{"id":6,"product_name":"Spark Shoes","unit_price":1499},
	{"id":7,"product_name":"Veg Pizza","unit_price":275},{"id":8,"product_name":"Asus Mobile","unit_price":1699},{"id":9,"product_name":"ToolBox","unit_price":785},
	{"id":10,"product_name":"Veg Burger","unit_price":65},{"id":11,"product_name":"Charger","unit_price":210},{"id":12,"product_name":"OCP 8 Book","unit_price":1299}];
	
	for(var i=0;i<items_list.length;i++)
	{
		var id=items_list[i].id;
		var product_name=items_list[i].product_name;
		var unit_price=items_list[i].unit_price;
		
		var main_node=document.getElementById("main_item_container");
		
		var main_li=document.createElement("li");
		
		var child_ul=document.createElement("ul");
		child_ul.className="child_item_container";
		
		var child_li1=document.createElement("li");
		var child_img=document.createElement("img");
		child_img.className="img";
		child_img.src="images/noimg.png";
		child_img.alt="No Image";
		var child_pt=document.createElement("p");
		child_pt.innerHTML="<button onclick='addToCart(this,"+id+")' type='button'>Add To Cart</button>";
		
		child_li1.appendChild(child_img);
		child_li1.appendChild(child_pt);

		var child_li2=document.createElement("li");
		var child_h4t=document.createElement("h4");
		child_h4t.innerHTML="Item No : "+id;
		var child_h4=document.createElement("h4");
		child_h4.innerHTML=product_name;
		var child_p1=document.createElement("p");
		child_p1.innerHTML="<span>Prize : </span><span>"+unit_price+"</span><span> Rs</span>";
		var child_p2=document.createElement("p");
		child_p2.innerHTML="<span>Qty : </span><select onchange='qty_change(this,this.value)' class='qty'><option value='1'>1</option><option value='2'>2</option><option value='3'>3</option><option value='4'>4</option></select><span class='qty_val'>1</span>"
		
		child_li2.appendChild(child_h4t);
		child_li2.appendChild(child_h4);
		child_li2.appendChild(child_p1);
		child_li2.appendChild(child_p2);
		
		child_ul.appendChild(child_li1);
		child_ul.appendChild(child_li2);
		
		main_li.appendChild(child_ul);
		main_node.appendChild(main_li);
		
	}
	
};

qty_change=function(obj,x)
{
	var el_arr=obj.parentNode.childNodes;
	el_arr[2].innerHTML=x;
	
};

addToCart=function(obj,id)
{
	var child_ul=obj.parentNode.parentNode.parentNode.childNodes; //child ul element
	var child_ul_li=child_ul[1].childNodes;//second list item
	var child_ul_li_p=child_ul_li[3].childNodes;
	var product_name=child_ul_li[1].innerHTML;
	var product_price=child_ul_li[2].childNodes[1].innerHTML;
	var qty=child_ul_li_p[2].innerHTML;

	var cart_obj={"id":id,"product_name":product_name,"product_qty":+qty,"line_item_total":(+qty)*(+product_price)};
	
	var isFound=false;
	var idx=0;
	for(var i=0;i<items.length;i++)
	{
		var check_obj=items[i];
		if(check_obj.id==id)
		{
			isFound=true;
			idx=i;
		}
	}
	
	if(!isFound)
	{
		items.push(cart_obj);
		
		alert("New Item added to Cart Successfully.");
	}
	else
	{
		items[idx].product_qty=+qty;
		items[idx].line_item_total=(+qty)*(+product_price);
		
		alert("Item quantity updated to Cart Successfully.");
	}
	
	
	console.log(items);
};

viewCartDetails=function()
{
	var items_str=JSON.stringify(items);
	localStorage.setItem("items",items_str);
		
	window.location.href="viewcart.html";
	
};
