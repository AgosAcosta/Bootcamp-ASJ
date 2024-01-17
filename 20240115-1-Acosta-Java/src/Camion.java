import java.time.chrono.ThaiBuddhistChronology;

public class Camion extends Automovil{
	
	private double cargaMax;

	public Camion( double carga) {
		super(); //Llamo al constructor vacio del padre (Automovil)
		this.cargaMax = carga;
	}

	public double getCargaMax() {
		return cargaMax;
	}

	public void setCargaMax(double cargaMax) {
		this.cargaMax = cargaMax;
	}
	
	public void mostrar() {
		System.out.println("MARCA: " + super.getMarca()+ "AÑO: " + super.getAnio() + "CARGA: " + this.cargaMax);
	}

}
