package delete;

import java.util.Scanner;

public class UserValidation {
	public interface validate{
		boolean validationCheck(String name,String pass);
	}
	public static void main(String[] args) {
		Scanner sc=new Scanner(System.in);
		System.out.println("Enter user name");
		String name=sc.nextLine();
		System.out.println("Enter password");
		String pass=sc.nextLine();
		
		validate validate=(a,p)->{
			if(a.equals("admin")&&p.equals("admin")) {
				return true;
			}
			else {
				return false;
			}
		};
		System.out.println(validate.validationCheck(name,pass)?"accepted":"rejected");
		
		sc.close();
	}
	
}
