package Ejercicios;

import java.util.Scanner;

public class Ejercicio6Opciones {

	private static Scanner scanner = new Scanner(System.in);
	private static int[][] matriz = new int[4][4];
	private static boolean flagMatriz = false;

	public static void main(String[] args) {
		/*
		 * Ejercicio 6 Nos piden crear una matriz de 4×4 de números enteros que
		 * inicialmente esta vacía, nos piden hacer un menú con estas opciones:
		 * 
		 * Rellenar TODA la matriz de números, debes pedírselo al usuario. Suma de una
		 * fila que se pedirá al usuario (controlar que elija una correcta) Suma de una
		 * columna que se pedirá al usuario (controlar que elija una correcta)
		 * 
		 * 
		 * Sumar la diagonal principal (ver ejemplo) Sumar la diagonal inversa (ver
		 * ejemplo) La media de todos los valores de la matriz
		 * 
		 * IMPORTANTE: hasta que no se haga la primera opción, el resto de opciones no
		 * se deberán de ejecutar, simplemente mostrar un mensaje donde diga que debes
		 * rellenar la matriz
		 */

		System.out.println("Hola, ingrese una opcion:");
		int opcion;
		do {
			System.out.println(
					"1- Generar Matriz , 2- Sumar Fila , 3- Sumar Columna , 4- Sumar diagonal principal , 5- Sumar diagonal inversa 6- Media de la Matriz , 7- Salir");
			opcion = scanner.nextInt();

			switch (opcion) {
			case 1: {
				generarMatriz();
				break;
			}
			case 2: {
				sumarFila();
				break;
			}
			case 3: {
				sumarColumna();
				break;
			}
			case 4: {
				sumarDiagonalPrincipal();
				break;
			}
			case 5: {
				sumarDiagonalInversa();
				break;
			}
			case 6: {
				calculoMedia();
				break;
			}
			case 7: {
				System.out.println("Adios!");
				break;
			}
			default:
				System.out.println("Error, elegir una opcion correcta");
				break;
			}
		} while (opcion != 7);
	}

	private static void generarMatriz() {
		System.out.println("Ingrese los numeros para rellenar la matriz:");

		for (int i = 0; i < 4; i++) {
			for (int j = 0; j < 4; j++) {
				System.out.print("Ingrese el valor para la fila " + (i + 1) + " para la columna " + (j + 1) + ": ");
				matriz[i][j] = scanner.nextInt();
			}
		}
		flagMatriz = true;
		dibujarMatriz();
	}

	private static void dibujarMatriz() {
		if (!flagMatriz) {
			System.out.println("La matriz está vacía. Elige la opcion 1");
			return;
		}

		for (int i = 0; i < 4; i++) {
			for (int j = 0; j < 4; j++) {
				System.out.print(matriz[i][j] + " ");
			}
			System.out.println();
		}
	}

	private static void sumarFila() {
		if (flagMatriz == true) {
			System.out.println("Ingrese el N° de la fila que desea sumar (0-1-2-3):");
			int fila = scanner.nextInt();

			if (fila == 0 || fila == 1 || fila == 2 || fila == 3) {
				int suma = 0;
				for (int f = 0; f < matriz[fila].length; f++) {
					suma += matriz[fila][f];
				}
				System.out.println("La suma de la fila " + fila + " es: " + suma);
			} else {
				System.out.println("Debe elegir una opcion correcta");
			}
		} else {
			System.out.println("Debe completar primero la matriz");
		}
	}

	private static void sumarColumna() {
		if (flagMatriz == true) {
			System.out.println("Ingrese el N° de la columna que desea sumar (0-1-2-3):");
			int columna = scanner.nextInt();

			if (columna == 0 || columna == 1 || columna == 2 || columna == 3) {
				int suma = 0;
				for (int c = 0; c < matriz.length; c++) {
					suma += matriz[c][columna];
				}
				System.out.println("La suma de la columna " + columna + " es: " + suma);
			} else {
				System.out.println("Debe elegir una opcion correcta");
			}
		} else {
			System.out.println("Debe completar primero la matriz");
		}
	}

	private static void sumarDiagonalPrincipal() {
		if (flagMatriz == true) {
			int suma = 0;
			for (int i = 0; i < 4; i++) {
				suma += matriz[i][i];
			}
			System.out.println("La suma de la diagonal principal es: " + suma);
		} else {
			System.out.println("Debe completar primero la matriz");
		}
	}

	private static void sumarDiagonalInversa() {
		if (flagMatriz == true) {
			int suma = 0;
			for (int i = 0; i < 4; i++) {
				suma += matriz[i][3 - i];
			}
			System.out.println("La suma de la diagonal principal es: " + suma);

		} else {
			System.out.println("Debe completar primero la matriz");
		}
	}

	private static void calculoMedia() {

		if (flagMatriz == true) {
			int cantNum = 16;
			int suma = 0;
			for (int i = 0; i < 4; i++) {
				for (int j = 0; j < 4; j++) {
					suma += matriz[i][j];
				}
			}
			double media = (double) suma / cantNum;
			System.out.println("La media de la matriz es: " + media);
		} else {
			System.out.println("Debe completar primero la matriz");
		}
	}
}
