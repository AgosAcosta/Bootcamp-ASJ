package Ejercicios;
import java.util.ArrayList;
import java.util.Collection;
import java.util.Collections;
import java.util.List;
import java.util.Random;

public class Ejercicio4Matriz {

	public static void main(String[] args) {

		/*
		 * Ejercicio 4 Generar una matriz de 3×3 con números aleatorios sin repetirse.
		 */

		int[][] matriz = new int[3][3];
		Random random = new Random();
		List<Integer> numPosibles = new ArrayList<>(List.of(1, 2, 3, 4, 5, 6, 7, 8, 9));
		Collections.shuffle(numPosibles);

		int index = 0;
		for (int i = 0; i < 3; i++) {
			for (int j = 0; j < 3; j++) {
				matriz[i][j] = numPosibles.get(index);
				index++;
			}
		}

		for (int i = 0; i < 3; i++) {
			for (int j = 0; j < 3; j++) {
				System.out.print(matriz[i][j] + " ");
			}
			System.out.println();
		}

	}
}
