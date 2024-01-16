package Ejercicios;
import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class EjercicioCajero {

	private static float saldo = 0;
	private static List<String> movimientos = new ArrayList<>();
	private static Scanner scanner = new Scanner(System.in);

	public static void main(String[] args) {

		System.out.println("Hola, ingrese una opcion:");
		int opcion;
		do {
			System.out.println("1 - EXTRAER, 2 - DEPOSITAR, 3 - CONSULTAR SALDO, 4 - VER ÚLTIMOS MOVIMIENTOS, 5- SALIR");
			opcion = scanner.nextInt();

			switch (opcion) {
			case 1:
				Extraer();
				break;

			case 2:
				Deposito();
				break;

			case 3:
				ConsultarSaldo();
				movimientos.add("Consulta saldo: $" + saldo);
				break;

			case 4:
				Movimientos();
				break;

			case 5:
				System.out.println("Gracias por usar nuestro cajero. Vuelva Pronto!");
				break;

			default:
				System.out.println("Error, vuelva a elegir una opcion.");
				break;
			}
		} while (opcion != 5);
	}

	public static void ConsultarSaldo() {
		System.out.println("Su saldo actual es: $" + saldo);
	}

	public static void Extraer() {

		System.out.println("Cuánto dinero desea extraer?");
		int e = scanner.nextInt();
		if (e <= saldo) {
			saldo -= e;
			ConsultarSaldo();
			movimientos.add("Extraido: $" + e);
		} else if (saldo == 0) {
			System.out.println("No se puede realizar esta operacion");
		} else {
			System.out.println("Saldo Insuficiente. Se extrae su saldo actual de $" + saldo);
			movimientos.add("Extraido (Saldo insuficiente): $" + saldo);
			saldo = 0;
		}
	}

	public static void Deposito() {
		System.out.println("Cuanto dinero desea ingresar?");
		int i = scanner.nextInt();
		saldo += i;
		movimientos.add("Depositado: $" + i);
		ConsultarSaldo();
	}

	public static void Movimientos() {
		System.out.println("ULTIMOS MOVIMIENTOS");
		for (String movimiento : movimientos) {
			System.out.println(movimiento);
		}
	}

}
