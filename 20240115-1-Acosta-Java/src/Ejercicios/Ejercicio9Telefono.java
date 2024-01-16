package Ejercicios;

import java.util.ArrayList;
import java.util.Scanner;

public class Ejercicio9Telefono {

	public static void main(String[] args) {
	
	    Scanner scanner = new Scanner(System.in);
        System.out.println("[2, A, B, C],\r\n"
                + "[3, D, E, F],\r\n"
                + "{'G', 'H', 'I', '4'},\r\n"
                + "{'J', 'K', 'L', '5'},\r\n"
                + "{'M', 'N', 'O', '6'},\r\n"
                + "{'P', 'Q', 'R', 'S', '7'},\r\n"
                + "{'T', 'U', 'V', '8'},\r\n"
                + "{'W', 'X', 'Y', 'Z', '9'}");
        
        ArrayList<Integer> num = new ArrayList<>();
        int opcion = 0;
        int numeroActual = 0;
        int cuantasVeces = 0;

        while(opcion != 1) {
            System.out.println("Ingrese el numero para escribir la palabra:");
            numeroActual = scanner.nextInt();
            switch (numeroActual) {
                case 1:
                    opcion = 1;
                    break;
                 case 2:
                     cuantasVeces++;
                     for(int i=1;i<3;i++) {
                         num.add(numeroActual);
                     }
                 case 3:

                 case 4:

                 case 5:

                 case 6:

                 case 7:

                 case 8:

                 case 9:

            }
            traducir(num);
            scanner.close();
        }




    }

    private static void traducir(ArrayList<Integer> num) {


    }

}
