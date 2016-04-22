package ajax.servlet;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class PostAjaxServlet extends HttpServlet {


	public void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {

		response.setContentType("text/html");
	}

	public void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		System.out.println("post方法调用了...");
		response.setContentType("text/html;charset=UTF-8");
		String a = request.getParameter("a");
		String b = request.getParameter("b");
		System.out.println("a:"+ a);
		System.out.println("b:"+ b);
		

	}

}
