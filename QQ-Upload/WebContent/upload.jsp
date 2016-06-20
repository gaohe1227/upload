<%@ page  language="java" import="java.util.*,util.*" pageEncoding="utf-8"%>

<%
String fileName=UpLoadFile.getUpLoadFile(request, response);
System.err.print(fileName+"---");
if(null!=fileName){
	 session.setAttribute("fileName", fileName);
	 response.sendRedirect("qq.jsp");
}else{
	//文件上传失败
}


%>