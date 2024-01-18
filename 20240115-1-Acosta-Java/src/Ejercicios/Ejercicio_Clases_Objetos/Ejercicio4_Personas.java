package Ejercicios.Ejercicio_Clases_Objetos;

import java.time.chrono.ThaiBuddhistChronology;
import java.util.Random;
import java.util.Scanner;

public class Ejercicio4_Personas {
	
//	4) Crear una clase llamada Persona que siga las siguientes condiciones:
//		Atributos: nombre, edad, DNI, sexo (H hombre, M mujer), peso y altura. Pueden añadir algún atributo si quieren.
//		Por defecto, todos los atributos menos el DNI serán valores por defecto según su tipo (0 números, cadena vacía para String, etc.). Sexo sera hombre por defecto.
//		Constructores:
//		Un constructor por defecto.
//		Un constructor con el nombre, edad y sexo, el resto por defecto.
//		Un constructor con todos los atributos como parámetro.
//
//		Métodos:
//		calcularIMC(): calculara si la persona esta en su peso ideal (peso en kg/(altura^2 en m)). <br>
//		Si esta fórmula es menor que 20, la función devuelve un -1, si el resultado es un número entre 20 y 25 (incluidos),
	// significa que esta por debajo de su peso ideal y la función devuelve un 0, y
	// si el resultado es mayor que 25
	// significa que tiene sobrepeso y la función devuelve un 1.
//		  
//		esMayorDeEdad(): indica si es mayor de edad, devuelve un booleano.
//		comprobarSexo(char sexo): comprueba que el sexo introducido es correcto. Si no es correcto, sera H. No sera visible al exterior.
//		toString(): devuelve toda la información del objeto.
//		generaDNI(): genera un número aleatorio de 8 cifras. Este método sera invocado cuando se construya el objeto.
//		 
//		Crea una clase ejecutable que haga lo siguiente:
//		Crea 3 objetos: el primer objeto obtendrá los datos pedidas por teclado (nombre edad, sexo, peso y altura), el segundo objeto obtendrá por teclado todos los datos anteriores menos el peso y la altura, y el último por defecto.
//		Para cada objeto, deberá comprobar si esta en su peso ideal, tiene sobrepeso o por debajo de su peso ideal con un mensaje.
//		Indicar para cada objeto si es mayor de edad.
//		Por último, mostrar la información de cada objeto.
	
	Scanner scanner = new Scanner(System.in);
	
	private String nombre;
	private int edad;
	private int DNI;
	private char sexo;
	private double peso;
	private double altura;
	
	public Ejercicio4_Personas() {
		this.nombre= "Pepito";
		this.edad = 78;
		this.DNI=generaDNI();;
		this.sexo ='M';
		this.peso= 78;
		this.altura = 1.70;
	}
	
	public Ejercicio4_Personas(String nombre, int edad, char sexo) {
		this.nombre= nombre;
		this.edad = edad;
		this.sexo = comprobarSexo(sexo);
		this.DNI=generaDNI();;
		this.peso= 180;
		this.altura = 1.67;
	}
	public Ejercicio4_Personas(String nombre, int edad,  char sexo, double peso,double altura ) {
		this.nombre= nombre;
		this.edad = edad;
		this.DNI=generaDNI();;
		this.sexo =comprobarSexo(sexo);
		this.peso= peso;
		this.altura = altura;
		
	}

    @Override
    public String toString() {
        return "Persona: Nombre = " + this.nombre + " - edad = " +this.edad+ " - DNI = "+this.DNI+" - sexo = " +this.sexo+ " - peso = " +this.peso+ " - altura = " +this.altura;
    }
	public double calcularIMC() {
		
		 double imc = peso / Math.pow(altura, 2);

	        if (imc < 20) {
	            return -1;
	        } else if (imc >= 20 && imc <= 25) {
	            return 0;
	        } else {
	            return 1;
	        }
	}
	
	public boolean esMayorDeEdad() {		
		 if(edad >= 18) {
		        return true;
		    } else {
		        return false;
		    }
		
	}
	
	private char comprobarSexo(char sexo) {		
		 if (sexo == 'H' || sexo == 'M') {
	            return sexo;
	        } else {
	            return 'H'; 
	        }
	}

    private int generaDNI() {
        Random random = new Random();
        int dni = 0;

        for (int i = 0; i < 8; i++) {
            dni = dni * 10 + random.nextInt(10);
        }
        return dni;
    }



}
