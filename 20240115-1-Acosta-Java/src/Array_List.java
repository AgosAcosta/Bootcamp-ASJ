import java.util.ArrayList;
import java.util.Iterator;

public class Array_List {

	public static void main(String[] args) {
	
		ArrayList<String> miLista = new ArrayList();
		
		miLista.add("Rojo");
		miLista.add("Azul");
		miLista.add("Verde");
		miLista.add("Amarillo");
		miLista.add("Rosa");
		
		miLista.add(3, "Negro");  //Se guarda en esa posicion

		System.out.println("---------");
		
		System.out.println(miLista.get(3));
		
		System.out.println("---------");
		//FOREACH
//		for(String lista: miLista) {
//			System.out.println(lista);
//		}
		
		imprimirLista(miLista);
		
		System.out.println("---------");
		//FOR
		for (int i = 0; i < miLista.size(); i++) {
			System.out.println(miLista.get(i));
		}
		
		System.out.println("---------");
		//Eliminar elemento		
		miLista.remove(1);
	//	miLista.clear(); //Elimina toda la lista 
		
		
		//Devuelve el indice del elemento
		
		System.out.println(miLista.indexOf("Rosa"));
		System.out.println(miLista.lastIndexOf("Rosa")); //Busca la ultima vez que aparece
		
		
		//ITERADOR
		
		Iterator<String>miIterator = miLista.iterator();
		
		//CON WHILE --hasnext() - tiene un segundo elemento?
		
		while(miIterator.hasNext()) {
			String elemento = miIterator.next();
			System.out.print(elemento + " - ");
		}
		
	}
	
	public static void imprimirLista(ArrayList<String> miLista) {
		for(String lista: miLista) {
			System.out.println(lista);
		}
		System.out.println("---------");
	}

}
