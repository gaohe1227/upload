<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
 <%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
 <c:set  var="ctx" value="${pageContext.request.contextPath}"></c:set>
 
<html>
<head>
<!--   <meta http-equiv="Content-type" content="text/html;charset=utf-8"> -->
  <title>进度条上传</title>
  <meta name="keywords" content="关键字、关键词">
  <meta name="description"   content="说明">
  <style type="text/css">
    *{margin:0;padding:0;}

	.box{width:960px;height:800px;background:gray;margin:30px auto;}
	.box h1{text-align:center;text-shadow:2px 5px 10px #111;}
	.filebox .filein{display:none;}
	.filebox  .filebtn{margin-left:30px;margin-top:10px;background:#00ff00;width:120px;text-align:center;padding:5px;border-radius:10px;}
     ul li{list-style:none;float:left;margin-top:30px;margin-left:20px;margin-right:10px;transition:transform 2s ease;}
	/*  ul li:hover{transform:scale(2);transition:transform 2s ease;} */
	 ul li:hover{transform:scale(2);}
	 ul li img:hover{border:2px solid pink;}
  </style>
  <script type="text/javascript" src="js/jquery-1.9.1.min.js"></script>
 </head>

 <body> 
 <div class="box">
  <h1>Ajax实现多文件带进度条上传</h1>
   <div class="filebox">
      <div class="filebtn" onclick="opnefile()">文件上传</div>
    
     <input type="file" multiple="multiple" accept="image/**"  id="_file" class="filein" onchange="uploadFile()">
  </div>
  <ul>
	<!--   <li><img src="image/19_222949_2.jpg" width="150px" height="150px"> </li>
	  <li><img src="image/19_222949_3.jpg" width="150px" height="150px"> </li>
	  <li><img src="image/19_222949_4.jpg" width="150px" height="150px"> </li>
	  <li><img src="image/19_222949_5.jpg" width="150px" height="150px"> </li>
	  <li><img src="image/19_222949_6.jpg" width="150px" height="150px"> </li>
	  <li><img src="image/19_222949_7.jpg" width="150px" height="150px"> </li>
	  <li><img src="image/19_222949_8.jpg" width="150px" height="150px"> </li> -->
	 </ul>
	  
 </div> 
  <script type="text/javascript" src="${ctx }/js/jquery-1.9.1.min.js"></script>
 <script type="text/javascript" src="${ctx }/js/HTML5.js"></script>
 <script  type="text/javascript">
 function  opnefile(){
 var ie=navigator.apppName=="Microsoft Internet Explorer"?true:false; 
 
 if(ie){
      document.getElementById("_file").click();
	   document.getElementById("_file").dispatchEvent(fileopen);
	   uploadFile();
 }else{
      var fileopen=document.createEvent("MouseEvents");
	  fileopen.initEvent("click",true,true);
	  document.getElementById("_file").dispatchEvent(fileopen);
	 /*  uploadFile(); */
 } 

 } 
 
function uploadFile(){
	var upFile=document.getElementById("_file"); 
	var files=upFile.files;
	/*创建一个FormData对象(支持二进制)*/
	FormData formData=new FormData();
	for(i=0;i<files.length;i++){
		formData.append("file",files[i]);
		
	}
	
	var xhr=new XMLHttpRequest();
	xhr.open("post","progressBar.do",true)
	xhr.onreadystatechange=function(){
		if(xhr.readyState==4&&xhr.status==200){
			alert("******************")
			
		}
		
	}
	xhr.send(formData);
}
 
 
 </script>
  
 </body>
</html>
