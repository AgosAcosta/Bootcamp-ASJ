package Ejercicios;
import java.util.Scanner;

public class EjercicioASCII {

	public static void main(String[] args) {

		// Dada una palabra ingresada por el usuario (por teclado), mostrar su
		// equivalencia en ASCII (letra por letra)

		Scanner scanner = new Scanner(System.in);

		System.out.println("Ingrese una palabra:");
		String palabra = scanner.nextLine();
		String e = "";

		for (int i = 0; i < palabra.length(); i++) {
			char letra = palabra.charAt(i);
			int resu = (int) letra;
			e += resu + " ";
		}
		System.out.println(palabra + " -> " + e);

	}

}
