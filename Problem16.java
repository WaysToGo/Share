package julyjava;

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;

public class Problem16 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		BufferedReader br = null;
	    try {
	        String sCurrentLine;
	        br = new BufferedReader(new FileReader("give file location "));//file name with path
	        while ((sCurrentLine = br.readLine()) != null) {
	               String[] strArr = sCurrentLine.split(",");
	               for(String str:strArr){
	            	   if(Integer.parseInt(str) % 2==0) {
	                    System.out.println(str);
	                      }
	               }
	            }

	        } catch (IOException e) {
	            e.printStackTrace();
	        } finally {
	            try {
	                if (br != null)br.close();
	            } catch (IOException ex) {
	                ex.printStackTrace();
	            }
	        }
	}

}
