package com;

import java.util.Comparator;



public class Zhangsan implements Comparator<String> {
	
	private String abbreviation;
	private String name;

	public Zhangsan() {
		super();
	}

	public Zhangsan(String abbreviation,String name) {
		super();
		this.abbreviation = abbreviation;
		this.name=name;
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

	@Override
	public int compare(String o1, String o2) {
		// TODO Auto-generated method stub
		return o1.compareTo(o2);
	}
	
	
	
	

}
