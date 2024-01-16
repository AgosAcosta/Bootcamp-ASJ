package Ejercicios;
import java.util.Random;
import java.util.Scanner;

public class Ejercicio3Random {

	public static void main(String[] args) {

		/*Ejercicio 3 
		Escribe un programa que genere 20 números enteros aleatorios entre 0 y 100 y que los almacene en un array.
		El programa debe ser capaz de pasar todos los números pares a las primeras posiciones del array (del 0 en adelante)
		y todos los números impares a las celdas restantes. Utiliza arrays auxiliares si es necesario.
		*/
		
        Random random = new Random();
        int[] num = new int[20];
        int inicio = 0;
        int fin = num.length - 1;

        for (int i = 0; i < num.length; i++) {
            num[i] = random.nextInt(100);
        }

        int[] pares = new int[num.length];
        int[] impares = new int[num.length];

        for (int numeros : num) {
            if (numeros % 2 == 0) {
                pares[inicio++] = numeros;
            } else {
                impares[fin--] = numeros;
            }
        }

        fin = num.length - 1;

        for (int i = 0; i < inicio; i++) {
            num[i] = pares[i];
        }

          for (int i = num.length - 1; i >= inicio; i--) {
            num[i] = impares[fin--];
        }

        System.out.println("Resultado:");
        for (int numero : num) {
            System.out.print(numero + " ");
        }
	        
	}

}
