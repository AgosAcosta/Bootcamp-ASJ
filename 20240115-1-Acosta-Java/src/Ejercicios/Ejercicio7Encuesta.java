package Ejercicios;
import java.util.Scanner;

public class Ejercicio7Encuesta {
	
	private static int cantPersonas = 10;
	private static Scanner scanner = new Scanner(System.in);

	public static void main(String[] args) {
		/*Ejercicio 7
		Queremos realizar una encuesta a 10 personas, en esta encuesta indicaremos el 
		sexo (1=masculino, 2=femenino), 
		si trabaja (1=si trabaja, 2= no trabaja) 
		y su sueldo (si tiene un trabajo, sino sera un cero) estará entre 600 y 2000 (valor entero).
		 Los valores pueden ser generados aleatoriamente. 
		 Calcula y muestra lo siguiente:

		Porcentaje de hombres (tengan o no trabajo).
		Porcentaje de mujeres (tengan o no trabajo).
		
		
		Porcentaje de hombres que trabajan.
		Porcentaje de mujeres que trabajan.
		
		El sueldo promedio de las hombres que trabajan.
		EL sueldo promedio de las mujeres que trabajan.
		Usa todos los métodos que veas necesarios, piensa que es aquello que se repite o que puede ser mejor tenerlo por separado.*/
		
        int[] sexo = new int[cantPersonas];
        int[] trabaja = new int[cantPersonas];
        int[] sueldo = new int[cantPersonas];

        encuesta(sexo, trabaja, sueldo);
        
        System.out.println("Porcentaje de hombres: " + porcentajeGenero(sexo, 1) + "%");
        System.out.println("Porcentaje de mujeres: " + porcentajeGenero(sexo, 2) + "%");
        
        System.out.println("Porcentaje de hombres que trabajan: " + porcentajeGeneroTrabajan(sexo, 1, trabaja) + "%");
        System.out.println("Porcentaje de mujeres que trabajan: " + porcentajeGeneroTrabajan(sexo, 2, trabaja) + "%");
        
        System.out.println("Sueldo Promedio de los hombres que trabajan es: $" + sueldoPromedio(sexo, 1, trabaja, sueldo) );
        System.out.println("Sueldo Promedio de las mujeres que trabajan es: $" + sueldoPromedio(sexo, 2, trabaja, sueldo));
	}
	
	private static void encuesta(int[] sexo, int[] trabaja, int[]sueldo ) {
				
		for (int i = 0; i < cantPersonas; i++) {
            System.out.println("Encuesta persona " + (i + 1));

            do {
                System.out.print("Ingrese el sexo 1- M o 2- F: ");
                sexo[i] = scanner.nextInt();
            } while (sexo[i] != 1 && sexo[i] != 2);

            do {
                System.out.print("Trabaja 1- SI o 2- NO: ");
                trabaja[i] = scanner.nextInt();
            } while (trabaja[i] != 1 && trabaja[i] != 2);

            if (trabaja[i] == 1) {
                do {
                    System.out.print("Ingrese el sueldo (entre 600 y 2000): ");
                    sueldo[i] = scanner.nextInt();
                } while (sueldo[i] < 600 || sueldo[i] > 2000);
            } else {
                sueldo[i] = 0;
            }
		}
		
	}

	private static double porcentajeGenero(int[] sexo, int genero) {
		int cont = 0;		
		for (int i = 0; i < cantPersonas; i++) {
			if(sexo[i] == genero) {
				cont ++;
			}
		}
		
		return (cont * 100.0) / cantPersonas;
	}
	
	private static double porcentajeGeneroTrabajan(int[] sexo, int genero, int[]trabaja) {		
		int cont = 0;
		
		for (int i = 0; i < cantPersonas; i++) {
			if(sexo[i] == genero && trabaja[i] == 1) {
				cont ++;
			}
		}		
		return (cont * 100.0) / cantPersonas;
	}
	
	private static double sueldoPromedio(int[] sexo, int genero, int[]trabaja, int[]sueldo) {		
		int cont = 0;
		int totalSueldo = 0;
		
		for (int i = 0; i < cantPersonas; i++) {
			if(sexo[i] == genero && trabaja[i] == 1) {
				cont ++;
				totalSueldo += sueldo[i];
			}
		}		
		 return (double) totalSueldo / cont;
	}
}
