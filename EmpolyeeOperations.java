package julyjava;

import java.util.Comparator;
import java.util.LinkedHashMap;
import java.util.Map;
import java.util.Optional;
import java.util.function.Function;
import java.util.stream.Collectors;

public class EmpolyeeOperations {
public static void main(String[] args) {
	
	System.out.println("sum of salary of all employees");
	Optional<Double> total=EmployeeRepository.getEmployeeList().stream().map((a)->a.getSalary()).reduce((a,b)->a+b);
System.out.println(total.get());

System.out.println("senior most employee of an organization");
EmployeeRepository.getEmployeeList().sort(Comparator.comparing(Employee::getHireDate));
System.out.println(EmployeeRepository.getEmployeeList().get(0).getFirstName());

System.out.println("Find departments with highest count of employees");
Map<Object, Long> maxEmp = EmployeeRepository.getEmployeeList().stream().map(a->a.getDepartment().getDepartmentName()).sorted().collect(Collectors.groupingBy(Function.identity(),LinkedHashMap::new, Collectors.counting()));
System.out.println(maxEmp);

System.out.println("employee name, hire date and day of week on which employee has started");
EmployeeRepository.getEmployeeList().stream().forEach(a->System.out.printf(a.getFirstName()+"\n"+a.getHireDate()+"\n"+a.getHireDate().getDayOfWeek()+"\n"));
System.out.println("employee name, salary and salary increased by 15%");

EmployeeRepository.getEmployeeList().stream().forEach(a->System.out.printf(a.getFirstName()+"\n"+a.getSalary()+"\n"+(a.getSalary()+a.getSalary()*0.15)+"\n"));


}


}
