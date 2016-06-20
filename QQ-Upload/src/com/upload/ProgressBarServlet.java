package com.upload;

import java.io.File;
import java.io.IOException;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.fileupload.FileItem;
import org.apache.commons.fileupload.FileItemFactory;
import org.apache.commons.fileupload.disk.DiskFileItemFactory;
import org.apache.commons.fileupload.servlet.ServletFileUpload;

/**
 * 
 * @author 高鹤
 *
 *         2016年3月10日
 *
 *         作用:ajax带进度条上传案例
 */
public class ProgressBarServlet extends HttpServlet {

	@Override
	protected void service(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		// TODO Auto-generated method stub
		/* super.service(arg0, arg1); */
		request.setCharacterEncoding("utf-8");
		response.setCharacterEncoding("text/html;charset=utf-8");
		try {
			/**
			 * 创建一个文件上传工厂
			 */
			FileItemFactory factory = new DiskFileItemFactory();
			/**
			 * 创建容器文件上传类
			 */
			ServletFileUpload fileUpload = new ServletFileUpload(factory);
			/**
			 * 解析上传文件
			 */

			List<FileItem> list = fileUpload.parseRequest(request);
			if (list == null || list.size() == 0) {
				return;
			}
			String uploadPath=request.getServletContext().getRealPath("/upload");
			StringBuffer results=new StringBuffer();
			 
			/**
			 * 遍历上传文件类型
			 */
			for (FileItem item : list) {
				if(!item.isFormField()){//如果是文件上传域
					
					System.out.println(item.getName()+"----"+item.getFieldName());
					
					if(results.length()>0){
						results.append(",");
					}
					
					/**
					 * 开始上传
					 */
				   item.write(new File(uploadPath, item.getName())); 
					
				}
				results.append("'upload/'"+ item.getName()+"'");

			}
			String tmp=results.toString();
			tmp="var path=["+tmp+"]";
			response.getWriter().println(tmp);

		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}

}
