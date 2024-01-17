package Ejercicios.Ejercicio_Clases_Objetos;

import javax.sql.rowset.JoinRowSet;

public class Ejercicio3_Password {
	
//	3) Haz una clase llamada Password que siga las siguientes condiciones:
//		Que tenga los atributos longitud y contraseña . Por defecto, la longitud sera de 8.
//		Un constructor por defecto.
//		Un constructor con la longitud que nosotros le pasemos. Generara una contraseña
//		aleatoria con esa longitud.
	
//		Los métodos que implementa serán al menos:
//
//		    -- esFuerte(): devuelve un booleano si es fuerte o no, para que sea fuerte debe
//		tener mas de 2 mayúsculas, mas de 1 minúscula y mas de 5 números.
//		    -- generarPassword(): genera la contraseña del objeto con la longitud que
//		tenga.
//		   -- Método get para contraseña y longitud.
//		   -- Método set para longitud.
//
//		Ahora, crea una clase clase ejecutable:
//		Obtener por teclado, contraseñas ingresadas por el usuario (pueden utilizar arrays o ArrayList).
//		Mostrar todas las contraseñas y si son fuertes o no
//
//		Ej: 
//		contraseña_1 FUERTE
//		  contraseña_2 DEBIL
//		  contraseña_3 FUERTE
	
	private int longitud = 8;
	private String contrasena;
	
	public Ejercicio3_Password(int longitud, String contrasena) {
		this.longitud = 0;
		this.contrasena = "";
	}
	public Ejercicio3_Password() {
		
	}
	public int getLongitud() {
		return longitud;
	}
	public void setLongitud(int longitud) {
		this.longitud = longitud;
	}
	public String getContrasena() {
		return contrasena;
	}
	
	public boolean esFuerte() {
	    int may = 0;
	    int min = 0;
	    int num = 0;

	    for (int i = 0; i < contrasena.length(); i++) {
	        char caracter = contrasena.charAt(i);
	        if (Character.isUpperCase(caracter)) {
	            may++;
	        } else if (Character.isLowerCase(caracter)) {
	            min++;
	        } else if (Character.isDigit(caracter)) {
	            num++;
	        }
	    }
	    
	    if(may > 2 && min > 1 && num > 5) {
	    	return true;
	    }else {
	    	return false;
	    }

	}
	
	public void generarPassword() {
	    String letras = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
	    contrasena = "";
	    for (int i = 0; i < longitud; i++) {
	        int index = (int) (Math.random() * letras.length());
	        char caracterAleatorio = letras.charAt(index);
	        contrasena += caracterAleatorio;
	    }
	}
	
	
}
