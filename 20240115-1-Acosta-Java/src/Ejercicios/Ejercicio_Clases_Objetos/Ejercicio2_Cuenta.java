package Ejercicios.Ejercicio_Clases_Objetos;

import java.text.DecimalFormat;
import java.time.chrono.ThaiBuddhistChronology;
import java.util.Scanner;

public class Ejercicio2_Cuenta {
	
//	2) Crea una clase llamada Cuenta que tendrá los siguientes atributos: titular y cantidad
//	(puede tener decimales).
//	El titular será obligatorio y la cantidad es opcional. Crea dos constructores que cumpla lo anterior.
//
//	Crea sus métodos get, set y toString.
//
//	Tendrá dos métodos especiales:
//	ingresar(double cantidad): se ingresa una cantidad a la cuenta, si la cantidad
//	introducida es negativa, no se hará nada.
	
	
//	retirar(double cantidad): se retira una cantidad a la cuenta, si restando la cantidad
//	actual a la que nos pasan es negativa, la cantidad de la cuenta pasa a ser 0.

	private String titular;
	private double cantidad;
	
	Scanner scanner = new Scanner(System.in);
	
	public Ejercicio2_Cuenta() {
		
	}
	
	public Ejercicio2_Cuenta(String tiular) {
		this.titular = tiular;
		this.cantidad = 0;
	}
	
	
	public String getTitular() {
		return titular;
	}
	public void setTitular(String titular) {
		this.titular = titular;
	}
	public double getCantidad() {
		return cantidad;
	}
	public void setCantidad(double cantidad) {
		this.cantidad = cantidad;
	}
	
    @Override
    public String toString() {
        return "Cuenta: Titular = " + titular + " - Cantidad = " + cantidad;
    }
	
    public void ingresarCantidad() {
		System.out.println("Ingrese la cantidad a agregar:");
		double cant = scanner.nextDouble();
    	
    	if(cant> 0) {
    		 this.cantidad += cant;
    	}
    }
    
    public void retirarCantidad() {    	    	
		System.out.println("Ingrese la cantidad a retirar:");
		double cant = scanner.nextDouble();    	
		if (cant <= this.cantidad) {
            this.cantidad -= cant;
		}else {
			this.cantidad = 0;
		}
    }
   
    

}
