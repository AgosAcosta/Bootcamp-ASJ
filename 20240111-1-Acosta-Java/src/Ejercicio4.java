import java.util.Scanner;

public class Ejercicio4 {

	public static void main(String[] args) {
		//Ejecicio 4:
		
				Scanner scanner = new Scanner(System.in);		
				System.out.println("Ingrese un numero del 1 al 100:");
				int num = scanner.nextInt();
				
				if(num >= 1 && num <= 100) {
					if(num %2 != 0 || (num>= 6 && num<= 20)) {
						System.out.println("Weird");
					}else {
						if(num >= 2 && num <= 5 || num > 20) {
							System.out.println("Not Weird");
						}
					}				
				}else {
					System.out.println("Debe ingresar un numero en ese rango");
				}
				scanner.close();


	}

}
