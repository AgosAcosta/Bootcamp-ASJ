
public class Array {

	public static void main(String[] args) {

		//Array unidimensional
		byte arr[] = {1,2,3,4};
		for (int i = 0; i < arr.length; i++) {
			System.out.println(arr[i]);
		}
		
		//Array bidimensional
		//int [][] matriz = new int [3][2]; //Filas y columnas
		
		int [][] matriz = {{1,2},{3,4},{5,6}};
		for (int i = 0; i < matriz.length; i++) {
			for (int j = 0; j < matriz[i].length; j++) {
				System.out.print(matriz[i][j] + " ");
			}
			System.out.println();
		}

	}

}
