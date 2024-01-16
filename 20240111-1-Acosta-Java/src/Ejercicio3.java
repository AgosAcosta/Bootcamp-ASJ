import java.util.Scanner;

public class Ejercicio3 {

	public static void main(String[] args) {
		//Ejecicio 3:
		Scanner scanner = new Scanner(System.in);		
		
		System.out.println("Ingrese un numero entero:");
		int num1 = scanner.nextInt();
		System.out.println("Ingrese un numero con decimal:");
		double num2 = scanner.nextDouble();
	
		scanner.nextLine();
	
		System.out.println("Ingrese una palabra:");		
		String palabra = scanner.nextLine();
		
		scanner.close();
		
		System.out.println("\n" + "String: " + palabra);
		System.out.println("double: " + num2);
		System.out.println("int: " + num1);
	}

}
