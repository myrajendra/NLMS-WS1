package in.c2n.nlms.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "grounding")
public class Grounding implements java.io.Serializable {
	
	private static final long serialVersionUID = 1L;
	
	private Integer id;
	private String baadhaar;
	private String dateOfGrounding;
	private String place;
	private String sellerName;
	private String sellerAddress;
	private String saadhaar;
	private String bankAccount;
	private String bankName;
	private String ifsc;
	private float amountPaid;
	private String dateOfPayment;

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "id", unique = true, nullable = false)
	public Integer getId() {
		return this.id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	@Column(name = "bAadhaar", nullable = false, length = 25)
	public String getBaadhaar() {
		return this.baadhaar;
	}

	public void setBaadhaar(String baadhaar) {
		this.baadhaar = baadhaar;
	}

	@Column(name = "dateOfGrounding", nullable = false, length = 55)
	public String getDateOfGrounding() {
		return this.dateOfGrounding;
	}

	public void setDateOfGrounding(String dateOfGrounding) {
		this.dateOfGrounding = dateOfGrounding;
	}

	@Column(name = "place", nullable = false, length = 155)
	public String getPlace() {
		return this.place;
	}

	public void setPlace(String place) {
		this.place = place;
	}

	@Column(name = "sellerName", nullable = false, length = 50)
	public String getSellerName() {
		return this.sellerName;
	}

	public void setSellerName(String sellerName) {
		this.sellerName = sellerName;
	}

	@Column(name = "sellerAddress", nullable = false, length = 155)
	public String getSellerAddress() {
		return this.sellerAddress;
	}

	public void setSellerAddress(String sellerAddress) {
		this.sellerAddress = sellerAddress;
	}

	@Column(name = "sAadhaar", nullable = false, length = 55)
	public String getSaadhaar() {
		return this.saadhaar;
	}

	public void setSaadhaar(String saadhaar) {
		this.saadhaar = saadhaar;
	}

	@Column(name = "bankAccount", nullable = false, length = 25)
	public String getBankAccount() {
		return this.bankAccount;
	}

	public void setBankAccount(String bankAccount) {
		this.bankAccount = bankAccount;
	}

	@Column(name = "bankName", nullable = false, length = 25)
	public String getBankName() {
		return this.bankName;
	}

	public void setBankName(String bankName) {
		this.bankName = bankName;
	}

	@Column(name = "ifsc", nullable = false, length = 25)
	public String getIfsc() {
		return this.ifsc;
	}

	public void setIfsc(String ifsc) {
		this.ifsc = ifsc;
	}

	@Column(name = "amountPaid", nullable = false, precision = 12, scale = 0)
	public float getAmountPaid() {
		return this.amountPaid;
	}

	public void setAmountPaid(float amountPaid) {
		this.amountPaid = amountPaid;
	}

	@Column(name = "dateOfPayment", nullable = false, length = 55)
	public String getDateOfPayment() {
		return this.dateOfPayment;
	}

	public void setDateOfPayment(String dateOfPayment) {
		this.dateOfPayment = dateOfPayment;
	}

}
