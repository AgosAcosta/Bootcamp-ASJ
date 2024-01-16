import java.util.Scanner;

public class Ejercicio6 {

	public static void main(String[] args) {
		
		Scanner scanner = new Scanner(System.in);
		System.out.println("Ingrese el numero de consultas: (De 0 a 500)");
		int num = scanner.nextInt();
		
		if(num > 0 && num <= 500) {
			for (int v = 0; v < num; v++) {
				
				System.out.println("Ingrese el valor de a: (De 0 a 50)");
				int a = scanner.nextInt();
				System.out.println("Ingrese el valor de b: (De 0 a 50)");
				int b = scanner.nextInt();
				System.out.println("Ingrese el valor de n: (De 1 a 15)");
				int n = scanner.nextInt();
				
				if (a >= 0 && a <= 50 && b >= 0 && b <= 50 && n >= 1 && n <= 15) {
	                int x = a;
	                
	                for (int i = 0; i < n; i++) {
	                    x += Math.pow(2, i) * b;
	                    System.out.print(x + " ");
	                }
	                System.out.println(); 
	            } else {
	                System.out.println("Los valores de a, b y n no son correctos");
	            }				
			}		
        }		


	}

}
