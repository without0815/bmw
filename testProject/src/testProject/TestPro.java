package testProject;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;

public class TestPro {

	public static void main(String[] args) {

		ArrayList<TestPro> zsList = new ArrayList<TestPro>();

		zsList.add(new TestPro("1", "0000"));
		zsList.add(new TestPro("Y", "1111"));
		zsList.add(new TestPro("Y", "1111444"));
		zsList.add(new TestPro("我是一个热好人", "2222"));
		zsList.add(new TestPro("S", "3333"));
		zsList.add(new TestPro("A", "4444"));
		zsList.add(new TestPro("I", "5555"));
		zsList.add(new TestPro("V", "6666"));
		zsList.add(new TestPro("Q", "7777"));
		zsList.add(new TestPro("I", "8888"));

		Collections.sort(zsList, new Comparator<TestPro>() {

			@Override
			public int compare(TestPro o1, TestPro o2) {
				// TODO Auto-generated method stub
				return o1.getAbbreviation().compareTo(o2.getAbbreviation());
			}

		});

		for (int i = 0; i < zsList.size(); i++) {
			System.out.println(zsList.get(i).getAbbreviation() + "==="
					+ zsList.get(i).getName());
		}

	}

	private String abbreviation;
	private String name;

	public TestPro() {
		super();
	}

	public TestPro(String abbreviation, String name) {
		super();
		this.abbreviation = abbreviation;
		this.name = name;
	}

	public String getAbbreviation() {
		return abbreviation;
	}

	public void setAbbreviation(String abbreviation) {
		this.abbreviation = abbreviation;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

}
