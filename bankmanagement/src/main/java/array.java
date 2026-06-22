import java.util.*;
public class array {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Scanner scan = new Scanner(System.in);
		int n = scan.nextInt();
		int [] ar =new int [n];
		for(int i=0;i<n;i++) {
			ar[i] = scan.nextInt();
		}
			for(int i =n-1;i>=0;i--) {
				
				
			System.out.print(ar[i]);
		
		}
		

	}

}
