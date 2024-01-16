package Ejercicios;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Random;
import java.util.Scanner;


public class Ejercicio5Suma {

	public static void main(String[] args) {
		/*Ejercicio 5
		Dada la matriz anterior, realizar la suma de una columna o fila aleatoria (preguntar al usuario que desea sumar, si una fila o una columna, y cual de ellas).
		Extra: mostrar el resultado al final de la fila/columna correspondiente
		*/
		 Scanner scanner = new Scanner(System.in);
        int[][] matriz = generarMatriz();        
        dibujo(matriz);       

        System.out.println("Ingrese la opcion que desea sumar 1 - Fila o 2 - Columna:");
        int opc = scanner.nextInt();

        if (opc == 1) {
            System.out.println("Ingrese el N° de la fila que desea sumar (0-1-2):");
            int fila = scanner.nextInt();
            sumarFila(matriz, fila);
        } else if (opc == 2) {
            System.out.println("Ingrese el N° de la columna que desea sumar (0-1-2):");
            int columna = scanner.nextInt();
            sumarColumna(matriz, columna);
        } else {
            System.out.println("Error");
        }
    }
	
    public static void dibujo(int[][] matriz) {
        for (int i = 0; i < matriz.length; i++) {
            for (int j = 0; j < matriz[i].length; j++) {
                System.out.print(matriz[i][j] + " ");
            }
            System.out.println();
        }
    }

    public static int[][] generarMatriz() {
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

        return matriz;
    }

    public static void sumarFila(int[][] matriz, int fila) {
        int suma = 0;
        for (int f = 0; f < matriz[fila].length; f++) {
            suma += matriz[fila][f];
        }
        System.out.println("La suma de la fila " + fila + " es: " + suma);
    }

    public static void sumarColumna(int[][] matriz, int columna) {
        int suma = 0;
        for (int c = 0; c < matriz.length; c++) {
            suma += matriz[c][columna];
        }
        System.out.println("La suma de la columna " + columna + " es: " + suma);
    }

}
