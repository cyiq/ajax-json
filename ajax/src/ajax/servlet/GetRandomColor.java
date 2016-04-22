package ajax.servlet;

import java.util.Random;

import org.junit.Test;

public class GetRandomColor {
	public static String getColor(){
		Random random = new Random();
		String color = "";
		for(int i = 0; i < 6; i++){
			Integer nextInt = random.nextInt(16);
			color += Integer.toHexString(nextInt).toUpperCase();
		}
		System.out.println(color);
		return color;
	}
}
