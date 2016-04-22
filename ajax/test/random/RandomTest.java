package random;

import java.util.Random;

public class RandomTest {
	public static void main(String[] args) {
		Random random = new Random();
		for(int i = 0; i < 10; i++){
			Integer nextInt = random.nextInt(16);
			String s = Integer.toHexString(nextInt);
			System.out.println(s);
		}
	}
}
