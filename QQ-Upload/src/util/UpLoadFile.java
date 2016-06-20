package util;

import java.io.File;
import java.util.Iterator;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.fileupload.FileItem;
import org.apache.commons.fileupload.disk.DiskFileItemFactory;
import org.apache.commons.fileupload.servlet.ServletFileUpload;

/**
 * 
 * @author 高鹤
 *
 * 2016年1月5日
 *
 * 作用:上传工具案例
 */
public class UpLoadFile {

	public UpLoadFile() {
		// TODO Auto-generated constructor stub
	}
	 /**
	  * 实现文件的上传
	  * @param request:页面传来的http请求
	  * @param response:响应
	  * @return:返回文件路径
	  */
	public static String getUpLoadFile(HttpServletRequest request,HttpServletResponse response){
		try {
			
			request.setCharacterEncoding("UTF-8");
			/**
			 * 判断上传的表单是否为文件上传的表单
			 */
			boolean isfile=ServletFileUpload.isMultipartContent(request);
			String fileName=null;
			if(isfile){
				/**
				 * 构建一个文件上传的对象
				 */
				DiskFileItemFactory factory=new DiskFileItemFactory();
				ServletFileUpload upload=new ServletFileUpload(factory);
				/**
				 * 定义迭代器
				 */
				Iterator items=upload.parseRequest(request).iterator();
				while(items.hasNext()){
					FileItem fileItem=(FileItem) items.next();//返回一个文件对象 
					String basePath = request.getSession().getServletContext().getRealPath("/");
					String filePath=basePath+"upload";
					 File file=new File(filePath);
					 if(!file.exists()){
						 file.mkdirs();
					 }
					 /**
					  * 判断作用域是普通的表单作用域还是上传的文件
					  */
					 boolean isItem=fileItem.isFormField(); 
					 while(!isItem){
						   fileName=fileItem.getName();
						 File upLoadFile=new File(filePath+File.separator+fileName);
						 long size=fileItem.getSize();
						 fileItem.write(upLoadFile);
						 isItem=true;
						 
					 }
						 
				}
				
			}
			return fileName;
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return null;
		
	}

}
