package Ejercicios;
import java.util.Scanner;

public class Ejercicio8Cifrado {

	public static void main(String[] args) {
		/*Ejercicio 8
		Cifrado Cesar
		Crear un programa que codifique el texto ingresado por el usuario, utilizando el cifrado de Cesar. 
		Los carácteres no-alfabéticos no son transformados.

		El Cifrado de Caesar es uno de los métodos de codificación conocidos más antiguos. Es muy simple, sólo se cambian las posiciones del alfabeto. 
		La transformación se denomina ROTn, donde "n" es el valor de cambio de posiciones y ROT significa "ROTAR", porque es un cambio cíclico.

		Por ejemplo, ROT2 significa que "a" se vuelve "c", "b" se vuelve "d" y al final "y" se vuelve "a", y "z" se vuelve "b". 
		La cantidad de transformaciones posibles depende de la longitud del alfabeto. Para Español sólo llega a 27.
		ROT2
		*/
		
		//EJEMPLO DE CIFRADO - FERNANDO
		/*
		System.out.println("Ingrese el mensaje :");
        Scanner scanner = new Scanner(System.in);
        String mensaje = scanner.nextLine();
        scanner.close();
        
        String resultado = "";
        for(char ch:mensaje.toCharArray()) {
            if(ch!=' ') {
                int posicionAlfabeticaOriginal = ch - 'a';
                int posicionAlfabeticaNueva = (posicionAlfabeticaOriginal+3)%27;
                char nuevoCaracter = (char) ('a'+posicionAlfabeticaNueva);
                resultado+=nuevoCaracter;
            }else {
                resultado+=ch;
            }
        }
        System.out.println("Mensaje cifrado:" + resultado);
        
        */
	}

}
