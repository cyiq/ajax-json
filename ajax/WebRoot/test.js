window.onload = function(){
		document.getElementById("submitpost").onclick=function(){
			var xmlHttp = createXmlHttpRequest();
			xmlHttp.open("post", "./postAjax", true);
			xmlHttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
			xmlHttp.send("a=10&b=20");
		},
		document.getElementById("button").onclick=function click(){
		//创建对象
		var xmlHttp = createXmlHttpRequest();
		//连接服务器
		xmlHttp.open("post", "./firstAjax?timeStamp="+new Date().getTime()+"&b=66",true);
		//发送请求
		xmlHttp.send("?a=6&b=9");
		
		xmlHttp.onreadystatechange = function(){
			//alert(xmlHttp.readyState);
			//alert(xmlHttp.status);
			if(xmlHttp.readyState==4){
				if(xmlHttp.status==200||xmlHttp.status==304){
					var data = xmlHttp.responseText;
					document.getElementById("testdiv").innerHTML+=data;
				}
			}
		 };
	},
	document.getElementById("dbclick").ondblclick=document.getElementById("button").onclick;
	document.getElementById("clear").onclick=function(){
		document.getElementById("testdiv").innerHTML="";
		var xmlHttp = createXmlHttpRequest();
		xmlHttp.open("get", "./firstAjax?timeStamp="+new Date().getTime()+"&divIndex=0",true);
		xmlHttp.send("?a=6&b=9");
		xmlHttp.onreadystatechange = function(){
			if(xmlHttp.readyState==4){
				if(xmlHttp.status==200||xmlHttp.status==304){
					var msg = xmlHttp.responseText;
					alert(msg);
				}
			}
		 };
	};
	
};
function deletediv(obj){
	var divid = "div"+obj.id.substring(6,obj.id.length);
	document.getElementById("testdiv").removeChild(document.getElementById(divid));
	document.getElementById("testdiv").removeChild(document.getElementById(obj.id));
//	document.getElementById("testdiv").getElementsByTagName("")
};

function createXmlHttpRequest(){
	   var xmlHttp = null;
	   try{    //Firefox, Opera 8.0+, Safari
	       xmlHttp=new XMLHttpRequest();
	   }catch (e){
	       try{    //Internet Explorer
	          xmlHttp=new ActiveXObject("Msxml2.XMLHTTP");
	       }catch (e){
	          try{
	             xmlHttp=new ActiveXObject("Microsoft.XMLHTTP");
	          }catch (e){}  
	       }
	    }
	  return xmlHttp;
	}
