package in.c2n.nlms.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import in.c2n.nlms.repositories.BeneficiariesViewRepository;
import in.c2n.nlms.vo.NLMSResponse;

@Service
public class BeneficiariesService {

	@Autowired
	private BeneficiariesViewRepository beneficiariesViewRepository;

	public ResponseEntity<NLMSResponse> findAll(final Pageable pageable) {
		return new ResponseEntity<NLMSResponse>(
				new NLMSResponse(beneficiariesViewRepository.findAll(pageable).getContent()), HttpStatus.OK);
	}

	public ResponseEntity<NLMSResponse> findAllByDistrictAndMandal(final String districtName, final String mandalName) {
		return new ResponseEntity<NLMSResponse>(
				new NLMSResponse(
						beneficiariesViewRepository.findAllByDistrictNameAndMandalName(districtName, mandalName)),
				HttpStatus.OK);
	}

	public ResponseEntity<NLMSResponse> findOneByAadharNo(final String aadharNo) {
		return new ResponseEntity<NLMSResponse>(
				new NLMSResponse(beneficiariesViewRepository.findOneByAadharNo(aadharNo)), HttpStatus.OK);
	}
}
