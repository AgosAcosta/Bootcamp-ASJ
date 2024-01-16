import java.util.Scanner;

public class Ejercicio5 {

	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		System.out.println("Ingrese un numero entre el 2 y el 20:");
		int num = scanner.nextInt();
		
		if(num >= 2 && num <= 20) {			
			for (int i = 1; i <= 10; i++) {
				int multi = num * i;				
				System.out.println(num + " x " + i + " = " + multi);
			}
		}else {
			System.out.println("Debe ingresar un numero en ese rango");
		}
		scanner.close();
	}


	}


