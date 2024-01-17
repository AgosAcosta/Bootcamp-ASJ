
public class Automovil {

	// Atributos

	private String marca;
	private int anio;
	private String color;
	
	public Automovil() {
		this.marca = "";
		this.anio = 0;
		this.color = "";
	}

	// Constructor
	public Automovil(String m, int a, String c) {
		this.marca = m;
		this.anio = a;
		this.color = c;
	}

	//GET: devolver un atributo
	public String getMarca() {
		return this.marca;
	}
	public int getAnio() {
		return this.anio;
	}
	
	public String getColor() {
		return color;
	}
	
	//SET: Setear o cambiar el valor de un atributo
	
	public void setMarca(String marca) {
		this.marca = marca;
	}
	public void setAnio(int anio) {
		this.anio = anio;
	}
	
	public void setColor(String color) {
		this.color = color;
	}
	
	
	
	// Metodo:

	public void mostrarDatos() {
		System.out.println("Marca: " + this.marca + " - Año: " + this.anio + " - Color: " + this.color);
	}

}
