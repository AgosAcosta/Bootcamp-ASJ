package Ejercicios.Ejercicio_Clases_Objetos;

public class Ejercicio1_Calculo {

//		1) Cree una clase que me permita realizar una operación matemática de 2 números. 
//		(Crear los metodos y atributos necesarios)

	private int num1;
	private int num2;

	public Ejercicio1_Calculo(int num1, int num2) {
		this.num1 = num1;
		this.num2 = num2;
	}

	public int getNum1() {
		return num1;
	}

	public void setNum1(int num1) {
		this.num1 = num1;
	}

	public int getNum2() {
		return num2;
	}

	public void setNum2(int num2) {
		this.num2 = num2;
	}

	public int suma() {
		return num1 + num2;
	}

	public int resta() {
		return num1 - num2;
	}

	public int multiplicacion() {
		return num1 * num2;
	}

	public double division() {
		return (double) num1 / num2;
	}

}
