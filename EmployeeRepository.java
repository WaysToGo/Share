package julyjava;

import java.time.LocalDate;
import java.time.Month;
import java.util.ArrayList;
import java.util.List;

public class EmployeeRepository {

	private static List<Employee> EmployeeList;

	static {
		prepareEmployeeList();
	}

	private static void prepareEmployeeList() {
		
		EmployeeList = new ArrayList<>();
	
		EmployeeList.add(new Employee(1,"Test","ing","doselect@doselect.com","9999999999",LocalDate.of(2011, Month.JANUARY, 11),"Test",50000,123,new Department(123, "Test", 321)));
		EmployeeList.add(new Employee(1,"Test","ing","doselect@doselect.com","9999999999",LocalDate.of(2000, Month.JANUARY, 11),"Test",50000,123,new Department(123, "Test", 321)));
		EmployeeList.add(new Employee(1,"Test","ing","doselect@doselect.com","9999999999",LocalDate.of(2011, Month.JANUARY, 11),"Test",50000,123,new Department(123, "Test", 321)));
		EmployeeList.add(new Employee(1,"Test","ing","doselect@doselect.com","9999999999",LocalDate.of(1999, Month.JANUARY, 11),"Test",50000,123,new Department(123, "Test1", 321)));


		
	}

	public static List<Employee> getEmployeeList() {
		return EmployeeList;
	}
}
