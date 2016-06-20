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
 * @author �ߺ�
 *
 *         2016��3��10��
 *
 *         ����:ajax���������ϴ�����
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
			 * ����һ���ļ��ϴ�����
			 */
			FileItemFactory factory = new DiskFileItemFactory();
			/**
			 * ���������ļ��ϴ���
			 */
			ServletFileUpload fileUpload = new ServletFileUpload(factory);
			/**
			 * �����ϴ��ļ�
			 */

			List<FileItem> list = fileUpload.parseRequest(request);
			if (list == null || list.size() == 0) {
				return;
			}
			String uploadPath=request.getServletContext().getRealPath("/upload");
			StringBuffer results=new StringBuffer();
			 
			/**
			 * �����ϴ��ļ�����
			 */
			for (FileItem item : list) {
				if(!item.isFormField()){//������ļ��ϴ���
					
					System.out.println(item.getName()+"----"+item.getFieldName());
					
					if(results.length()>0){
						results.append(",");
					}
					
					/**
					 * ��ʼ�ϴ�
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
