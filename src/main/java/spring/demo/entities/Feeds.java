package spring.demo.entities;

import java.io.Serializable;

import javax.persistence.Basic;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "feeds")
public class Feeds implements Serializable {
	
	/**
	 * 
	 */
	private static final long serialVersionUID = 2225682163516071082L;

	@Id
	@Column(name="name", unique = true)
	private String name;
	
	@Basic
	@Column(name="url")
	private String url;
	
	@Basic
	@Column(name="type")
	private String type;
	
	@Basic
	@Column(name="category")
	private String category;
	
	@Basic
	@Column(name="base_url")
	private String base_url;
	
	@Basic
	@Column(name="img_url")
	private String img_url;

	public Feeds() {
	}

	public Feeds(String name, String url, String type, String category, String base_url, String img_url) {
		super();
		this.name = name;
		this.url = url;
		this.type = type;
		this.category = category;
		this.base_url = base_url;
		this.img_url = img_url;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getUrl() {
		return url;
	}

	public void setUrl(String url) {
		this.url = url;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public String getCategory() {
		return category;
	}

	public void setCategory(String category) {
		this.category = category;
	}

	public String getBase_url() {
		return base_url;
	}

	public void setBase_url(String base_url) {
		this.base_url = base_url;
	}

	public String getImg_url() {
		return img_url;
	}

	public void setImg_url(String img_url) {
		this.img_url = img_url;
	}
	
	

}
