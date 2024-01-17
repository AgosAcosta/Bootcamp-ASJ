
public class Clases {

	public static void main(String[] args) {

	Automovil auto1 = new Automovil("Fiat", 2021, "Azul");

	
//		auto1.anio = 2021;
//		auto1.marca= "Fiat";
	
		auto1.mostrarDatos();
		
		auto1.setMarca("Ford");
		System.out.println("Cambiando marca: " + auto1.getMarca());
		
		auto1.mostrarDatos();
	}

}
