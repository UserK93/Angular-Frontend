package com.DocEstate.spring.products;

import javax.persistence.*;

//Klasse als Entity für die Datenbank
@Entity
//Tabellenname der Datenbank
@Table(name="Products")
public class Products {
	
	public Products() {
		super();
	}

	//Integer id als ID für die Datenbank festlegen
	//Autoincrement für ID
	@Id @GeneratedValue(strategy=GenerationType.IDENTITY)
	Integer id;
	int anzahl;
	String produktname;
	double preis;

	//Konstruktor für Products
	public Products(Integer id, int anzahl, String produktname, double preis) {
		super();
		this.id = id;
		this.anzahl = anzahl;
		this.produktname = produktname;
		this.preis = preis;
	}

	//Getter und Setter
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public int getAnzahl() {
		return anzahl;
	}
	public void setAnzahl(int anzahl) {
		this.anzahl = anzahl;
	}
	public String getProduktname() {return produktname; }
	public void setProduktname(String produktname) {
		this.produktname = produktname;
	}
	public double getPreis() {return preis; }
	public void setPreis(double preis) {
		this.preis = preis;
	}

	
	
	

}
