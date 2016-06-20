<%@ page language="java" contentType="text/html; charset=utf-8"%>

<!doctype html>
<html>
	<head>
		 
		<meta http-equiv="content-type" content="text/html; charset=utf-8" />
		<title>Java开发QQ空间说说墙图像上传【腾讯内部技术】- Arry老师</title>
		<meta name="keywords" content="qqÉÏ´«" /> 
		<meta name="description" content="" />
		<style type="text/css">
		*{margin:0;margin:0}
		body{font-size:12px;font-family:"Î¢ÈíÑÅºÚ";color:#666 }
		/*md start*/
		.md{width:900px;height:350px;border:1px solid red;margin:100px auto;background:url("image/hd-bg.jpg")no-repeat;position:relative;}
		.msg{width:355px;height:80px;background:#fff;position:absolute;top:180px;left:50px;padding:10px;border-radius:6px;padding:10px; }
		.md .msg .m_text{width:355px;height:80px;background:#fff;border:1px solid #eaeaea;border-radius:3px;}
		.md .msg .m_text a {width:70px;height:56px;display:block;border-right:1px solid #fff; text-align:center;text-decoration:none;color:#9B9B9B;    padding-top: 24px;float:left;}
		.md .msg .m_text a:hover{background:#eee}
		.md .msg .m_text a  span{display:block;width:30px;height:23px;margin:0px auto;background:url("image/say_wall_loveu-hug140911174408.png")  no-repeat;background-position:0 0px;}
		.md  .msg .m_text input{display:none;}
		.md  .msg .m_text .m_edit{width:262px;height:60px;border:1px solid #eaeaea;float:left;border-radius:3px;padding:5px;}
		.showImg{width:362px;height:240px;position:absolute;top:280px;left:50px;padding:10px;border-radius:6px;padding:10px; }
		/*end  md*/
		</style>


	</head>
	<body>
	<!--md start-->
	  <div  class="md">
	   <div class="msg">
	   <form action="upload.jsp" method="post" enctype="multipart/form-data" id="fileForm">
	     <div class="m_text">
		 <a  href="#"  onclick="openBrower()">
		 <span></span>
		<!--  图片 -->--${fileName }
		 </a>
		 <input type="file" id="_file" name="file" onchange="fileSubmit()">
		 <input type="text" id="_fileName">
		 <div class="m_edit" contenteditable="true"> </div>
		 </div>
		 </form>
	   </div>
	   <div class="showImg">
	   <img alt="" src="upload/${fileName }" width="374px" height="260px" alt="测试">
	   </div>
	  </div>
	  <script type="text/javaScript">
	   function openBrower(){
       var ie=navigator.appName=="Microsoft Internet Explorer"?true:false;
	   if(ie){
            document.getElementById("_file").click();
			 document.getElementById("_fileName").value=document.getElementById("_file").value;
	   }else{
          var a=document.createEvent("MouseEvents");
		   a.initEvent("click",true,true);
		    document.getElementById("_file").dispatchEvent(a);
	    }
	  }
	   function fileSubmit(){
		   document.getElementById("fileForm").submit();
	   }
	  </script>
	 	<!--end  md-->
    </body>

</html>
