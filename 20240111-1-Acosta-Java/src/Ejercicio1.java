import java.util.Scanner;

public class Ejercicio1 {

	public static void main(String[] args) {
		//Ejecicio 1:
		
				Scanner scanner = new Scanner(System.in);		
				
				String myString = scanner.next();
				int myInt = scanner.nextInt();
				scanner.close();

				System.out.println("myString is: " + myString);
				System.out.println("myInt is: " + myInt);
				
				scanner.close();


	}

}
