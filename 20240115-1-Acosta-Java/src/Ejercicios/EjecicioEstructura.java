package Ejercicios;
import java.util.Scanner;
public class EjecicioEstructura {

	public static void main(String[] args) {
		
		//Pedir al usuario que ingrese: ¿Cuantas notas quiere ingresar?
		//Segun eso, pedir el valor de cada nota ( 1 al 10)
		//Sacar el promedio
		
		Scanner scanner = new Scanner(System.in);
		
		// CON LOS 3 CICLOS
		
//        int suma = 0;
//        int cont = 0;
//        int status;
//
//        do {
//            System.out.println("¿Cuántas notas desea agregar?");
//            int cant = scanner.nextInt();
//
//            for (int i = 0; i < cant; i++) {
//                System.out.println("Ingrese la nota N°" + (i + 1)  + ":");
//                int nota = scanner.nextInt();
//                
//                if (nota >= 1 && nota <= 10) {
//                    suma += nota;
//                    cont++;
//                } else {
//                    System.out.println("Ingresar una nota entre el 1 y 10");
//                    break;
//                }
//            }
//
//            if (cont > 0) {
//                double promedio = (double) suma / cont;
//                System.out.println("El promedio es: " + promedio);
//            } else {
//                System.out.println("Error en la nota ingresada.");
//            }
//            
//            System.out.println("¿Quiere ingresar más notas? 1- Si 2- No");
//            status = scanner.nextInt();
//        } while (status == 1);
        
        
        //CON CICLO FOR
//       int sum1 = 0;
//       int cont1 = 0;
//        System.out.println("¿Cuántas notas desea agregar?");
//        int cant1 = scanner.nextInt();
//
//        for (int i = 0; i < cant1; i++) {
//            System.out.println("Ingrese la nota N°" + (i +1)  + ":");
//            int nota1 = scanner.nextInt();
//            sum1 += nota1;
//            cont1++;
//        }
//       	double promedio1 = (double) sum1 / cont1;
//        System.out.println("El promedio es: " + promedio1);       
//    }
        
		
	 //CON CICLO WHILE
//    int sum2 = 0;
//    int cont2 = 0;
//    
//     System.out.println("¿Cuántas notas desea agregar?");
//     int cant1 = scanner.nextInt();
//     while (cant1 > 0) {
//    	 for (int i = 0; i < cant1; i++) {
//          System.out.println("Ingrese la nota N°" + (i +1)  + ":");
//          int nota1 = scanner.nextInt();
//          sum2 += nota1;
//          cont2++;
//       }
//     	double promedio1 = (double) sum2 / cont2;
//      System.out.println("El promedio es: " + promedio1);    
//		
//	}
        
        int suma = 0;
        int cont = 0;

        do {
            System.out.println("¿Cuántas notas desea agregar?");
            int cant = scanner.nextInt();

            for (int i = 0; i < cant; i++) {
                int nota;
                do {
                    System.out.println("Ingrese la nota N°" + (i + 1) + ":");
                    nota = scanner.nextInt();

                    if (nota >= 1 && nota <= 10) {
                        suma += nota;
                        cont++;
                    } else {
                        System.out.println("Ingresar una nota entre el 1 y 10");
                    }
                } while (nota < 1 || nota > 10);
            }
     
            if (cont > 0) {
                double promedio1 = (double) suma / cont;
                System.out.println("El promedio es: " + promedio1);
                break;
            } else {
                System.out.println("Error en la nota ingresada.");
            }

        } while (true);

	}

}
