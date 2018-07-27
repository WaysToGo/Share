package julyjava;

import java.util.Arrays;
import java.util.List;

public class MethodReferece {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		final List<Person> people = Arrays.asList(new Person("Test"), new Person("TestTwo"));
		
       people.forEach(Person::printName);
		
	}

}
