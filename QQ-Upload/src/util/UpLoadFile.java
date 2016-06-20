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
 * @author �ߺ�
 *
 * 2016��1��5��
 *
 * ����:�ϴ����߰���
 */
public class UpLoadFile {

	public UpLoadFile() {
		// TODO Auto-generated constructor stub
	}
	 /**
	  * ʵ���ļ����ϴ�
	  * @param request:ҳ�洫����http����
	  * @param response:��Ӧ
	  * @return:�����ļ�·��
	  */
	public static String getUpLoadFile(HttpServletRequest request,HttpServletResponse response){
		try {
			
			request.setCharacterEncoding("UTF-8");
			/**
			 * �ж��ϴ��ı��Ƿ�Ϊ�ļ��ϴ��ı�
			 */
			boolean isfile=ServletFileUpload.isMultipartContent(request);
			String fileName=null;
			if(isfile){
				/**
				 * ����һ���ļ��ϴ��Ķ���
				 */
				DiskFileItemFactory factory=new DiskFileItemFactory();
				ServletFileUpload upload=new ServletFileUpload(factory);
				/**
				 * ���������
				 */
				Iterator items=upload.parseRequest(request).iterator();
				while(items.hasNext()){
					FileItem fileItem=(FileItem) items.next();//����һ���ļ����� 
					String basePath = request.getSession().getServletContext().getRealPath("/");
					String filePath=basePath+"upload";
					 File file=new File(filePath);
					 if(!file.exists()){
						 file.mkdirs();
					 }
					 /**
					  * �ж�����������ͨ�ı����������ϴ����ļ�
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
