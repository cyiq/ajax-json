window.onload =function(){
	document.getElementById("button1").onclick=function(){
	      var people ={
	              "username":"jack",
	              "age":"20",
	              "info":{
	            	  	"tel":"1234566",
	            	  	"celltelphone":788666
	              },
	              "address":[
	                   {
	                	  "city":"beijing",
	                	  "code":"1000022"
	                   },
	                   {
	                	   "city":"shanghai",
	                	   "code":"2210444"
	                   }
	               ]
	         };
	      	alert(people.username);
	      	alert(people.info.tel);
	      	alert(people.address[0].city);

	};
};