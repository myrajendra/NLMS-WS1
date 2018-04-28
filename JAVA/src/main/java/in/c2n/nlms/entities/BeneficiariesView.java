package in.c2n.nlms.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "beneficiaries_view")
public class BeneficiariesView implements java.io.Serializable {

	private int id;
	private String name;
	private String fatherOrHusbandName;
	private String aadharNo;
	private String mobileNo;
	private String address;
	private String gender;
	private String caste;
	private int income;
	private int disability;
	private String bankName;
	private String ifscCode;
	private String accountNo;
	private String appliedDate;
	private String mandalName;
	private String districtName;

	@Id
	@Column(name = "id", nullable = false)
	public int getId() {
		return this.id;
	}

	public void setId(int id) {
		this.id = id;
	}

	@Column(name = "name", nullable = false)
	public String getName() {
		return this.name;
	}

	public void setName(String name) {
		this.name = name;
	}

	@Column(name = "fatherOrHusbandName")
	public String getFatherOrHusbandName() {
		return this.fatherOrHusbandName;
	}

	public void setFatherOrHusbandName(String fatherOrHusbandName) {
		this.fatherOrHusbandName = fatherOrHusbandName;
	}

	@Column(name = "aadharNo", nullable = false, length = 20)
	public String getAadharNo() {
		return this.aadharNo;
	}

	public void setAadharNo(String aadharNo) {
		this.aadharNo = aadharNo;
	}

	@Column(name = "mobileNo", length = 15)
	public String getMobileNo() {
		return this.mobileNo;
	}

	public void setMobileNo(String mobileNo) {
		this.mobileNo = mobileNo;
	}

	@Column(name = "address")
	public String getAddress() {
		return this.address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	@Column(name = "gender", length = 25)
	public String getGender() {
		return this.gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	@Column(name = "caste", length = 15)
	public String getCaste() {
		return this.caste;
	}

	public void setCaste(String caste) {
		this.caste = caste;
	}

	@Column(name = "income", nullable = false)
	public int getIncome() {
		return this.income;
	}

	public void setIncome(int income) {
		this.income = income;
	}

	@Column(name = "disability", nullable = false)
	public int getDisability() {
		return this.disability;
	}

	public void setDisability(int disability) {
		this.disability = disability;
	}

	@Column(name = "bankName")
	public String getBankName() {
		return this.bankName;
	}

	public void setBankName(String bankName) {
		this.bankName = bankName;
	}

	@Column(name = "ifscCode", length = 75)
	public String getIfscCode() {
		return this.ifscCode;
	}

	public void setIfscCode(String ifscCode) {
		this.ifscCode = ifscCode;
	}

	@Column(name = "accountNo", length = 55)
	public String getAccountNo() {
		return this.accountNo;
	}

	public void setAccountNo(String accountNo) {
		this.accountNo = accountNo;
	}

	@Column(name = "appliedDate", length = 25)
	public String getAppliedDate() {
		return this.appliedDate;
	}

	public void setAppliedDate(String appliedDate) {
		this.appliedDate = appliedDate;
	}

	@Column(name = "mandalName", nullable = false)
	public String getMandalName() {
		return this.mandalName;
	}

	public void setMandalName(String mandalName) {
		this.mandalName = mandalName;
	}

	@Column(name = "districtName", nullable = false)
	public String getDistrictName() {
		return this.districtName;
	}

	public void setDistrictName(String districtName) {
		this.districtName = districtName;
	}

}