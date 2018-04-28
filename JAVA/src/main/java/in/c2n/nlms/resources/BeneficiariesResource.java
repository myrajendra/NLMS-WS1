package in.c2n.nlms.resources;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import in.c2n.nlms.services.BeneficiariesService;

@CrossOrigin
@RestController
@RequestMapping("/beneficiaries")
public class BeneficiariesResource {

	@Autowired
	private BeneficiariesService beneficiariesService;

	@GetMapping
	public ResponseEntity findAll(final @PageableDefault(size = 150) Pageable pageable) {
		return beneficiariesService.findAll(pageable);
	}

	@GetMapping("{districtName}/{mandalName}")
	public ResponseEntity findAllByDistrictAndMandal(
			@PathVariable(name = "districtName", required = true) final String districtName,
			@PathVariable(name = "mandalName", required = true) final String mandalName) {
		return beneficiariesService.findAllByDistrictAndMandal(districtName, mandalName);
	}

	@GetMapping("/aadhar")
	public ResponseEntity findOneByAadharNo(@RequestParam(name = "aadharNo", required = true) final String aadharNo) {
		return beneficiariesService.findOneByAadharNo(aadharNo);
	}
}
