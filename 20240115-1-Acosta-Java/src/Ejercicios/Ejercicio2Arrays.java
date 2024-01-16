package Ejercicios;
import java.util.Scanner;

public class Ejercicio2Arrays {

	public static void main(String[] args) {
		/*
		 * Ejercicio 2 Escribe un programa que lea 15 números por teclado y que los
		 * almacene en un array. Rota los elementos de ese array, es decir, el elemento
		 * de la posición 0 debe pasar a la posición 1, el de la 1 a la 2, etc. El
		 * número que se encuentra en la última posición debe pasar a la posición 0.
		 * Finalmente, muestra el contenido del array.
		 */

		Scanner scanner = new Scanner(System.in);
		int[] num = new int[15];

		System.out.println("Ingrese 15 numeros:");

		for (int i = 0; i < 15; i++) {
			System.out.print("Número " + (i + 1) + ": ");
			num[i] = scanner.nextInt();
		}

		int ultimo = num[num.length - 1];

		for (int i = num.length - 1; i > 0; i--) {
			num[i] = num[i - 1];
		}

		num[0] = ultimo;

		System.out.println("Lista Array:");
		mostrarArray(num);
	}

	private static void mostrarArray(int[] array) {
		for (int i = 0; i < array.length; i++) {
			System.out.print(array[i] + " ");
		}
		System.out.println();
	}

}
