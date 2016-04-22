package ajax.servlet;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.Random;

import javax.servlet.ServletException;
import javax.servlet.ServletOutputStream;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class FirstAjaxServlet extends HttpServlet {
	private int divIndex = 0;

	public void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		response.setContentType("text/html");
		ServletOutputStream out = response.getOutputStream();
		out.write(("服务器clear前下标为"+divIndex+"").getBytes("UTF-8"));
		this.divIndex = Integer.parseInt(request.getParameter("divIndex"));
		out.print("\n");
		out.write(("服务器当前下标为"+divIndex+"").getBytes("UTF-8"));
		
		System.out.println(divIndex);
	}

	public void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {

		response.setContentType("text/html;charset=UTF-8");
		ServletOutputStream out = response.getOutputStream();
		String color = GetRandomColor.getColor();
		out.print(" <div id=\"div"+divIndex+"\" style=\"background-color:#"+color+";width:50px;\">666666"+"<input type=\"button\" value=\"");
		out.write("删除".getBytes("UTF-8"));
		out.print("\" id=\"delete"+divIndex+"\" name=\"delete\" onclick=\"deletediv(this)\"/></div>");
		divIndex++;
	}

}
