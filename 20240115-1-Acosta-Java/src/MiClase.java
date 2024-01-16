
public class MiClase {

	public static void main(String[] args) {
		System.out.println("Hola Mundo!!!");

		/*
		 * TIPOS DE DATOS: int, double, float, boolean, String, char, byte, short, long
		 */

		// VARIABLES:
		// tipo nombreVariable; o tipo nombreVariable = valor;

		int entero;
		double doble;
		float flotante;
		boolean booleano;
		String string;
		char caracter;
		byte miByte;
		long miLong;

//		byte miByte2 = 12;	
//		System.out.println((int) miByte2);

		var variable = "Hola";

		entero = 40;
		doble = 12.5;

		double res1 = entero / doble;
//		System.out.println(res1);

		int res2 = (int) res1;
//		System.out.println(res2);

		int a = 30;
		int b = 12;
		System.out.println(a / b);

		double c = (double) a / b;
		System.out.println(c);

//		System.out.println("Tipo - Minimo - Maximo");
//		System.out.println("int: Min= " + Integer.MIN_VALUE + " - Max = " + Integer.MAX_VALUE );
//		System.out.println("double: Min= " + Double.MIN_VALUE + " - Max = " + Double.MAX_VALUE );
//		System.out.println("float: Min= " + Float.MIN_VALUE + " - Max = " + Float.MAX_VALUE );
//		System.out.println("byte: Min= " + Byte.MIN_VALUE + " - Max = " + Byte.MAX_VALUE );
//		System.out.println("long: Min= " + Long.MIN_VALUE + " - Max = " + Long.MAX_VALUE );


		String palabra1 = "B";
		String palabra2 = "A";
		
//		System.out.println(palabra1.compareTo(palabra2));
//		System.out.println(palabra1.equals(palabra2));
		
		int varianleInt = 77;
		System.out.println((char) varianleInt ); // devuelve en codigo ASCII
		
		char variableChar = 'M';
		System.out.println((int) variableChar);
		
		
		System.out.println(Math.PI);		
		System.out.println(Math.pow(3, 2));
		System.out.println(Math.sqrt(25));

	}

}
