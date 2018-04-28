package in.c2n.nlms.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import static javax.persistence.GenerationType.IDENTITY;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "mandals")
public class Mandals implements java.io.Serializable {

	private static final long serialVersionUID = -5989391814909115940L;

	private Integer id;
	private int districtId;
	private String name;

	@Id
	@GeneratedValue(strategy = IDENTITY)
	@Column(name = "id", unique = true, nullable = false)
	public Integer getId() {
		return this.id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	@Column(name = "district_id", nullable = false)
	public int getDistrictId() {
		return this.districtId;
	}

	public void setDistrictId(int districtId) {
		this.districtId = districtId;
	}

	@Column(name = "name", nullable = false)
	public String getName() {
		return this.name;
	}

	public void setName(String name) {
		this.name = name;
	}

}