package superheroes;

public class Main {

	public static void main(String[] args) {

		Superheroe spiderman = new Superheroe("Spiderman");
		spiderman.setDescripcion("Hombre araña con traje rojo y azul");
		spiderman.setCapa(false);

		Dimension dimensionSpiderman = new Dimension(30, 15, 5);

		Figura figuraSpiderman = new Figura("SP001", 29.99, dimensionSpiderman, spiderman);

		Superheroe batman = new Superheroe("batman");
		batman.setDescripcion("el hombre murcielago");
		batman.setCapa(true);

		Dimension dimensionBatman = new Dimension(40, 20, 10);

		Figura figuraBatman = new Figura("SP002", 40.0, dimensionBatman, batman);

		Coleccion coleccionSpiderman = new Coleccion("Spiderman Collection");

		coleccionSpiderman.aniadirFigura(figuraSpiderman);
		coleccionSpiderman.aniadirFigura(figuraBatman);

		System.out.println(coleccionSpiderman.toString());

		coleccionSpiderman.subirPrecio(5.00, "SP001");

		System.out.println(coleccionSpiderman.toString());

		System.out.println(coleccionSpiderman.conCapa());

		System.out.println("Figura más valiosa:\n" + coleccionSpiderman.masValioso().toString());

		System.out.println("Valor total de la colección: $" + coleccionSpiderman.getValorColeccion());

		System.out.println("Volumen total de la colección: " + coleccionSpiderman.getVolumenColeccion() + " cm^3");

	}

}
