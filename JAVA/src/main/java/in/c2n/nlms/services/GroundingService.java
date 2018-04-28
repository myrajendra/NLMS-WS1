package in.c2n.nlms.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import in.c2n.nlms.entities.Grounding;
import in.c2n.nlms.repositories.GroundingRepository;

@Service
public class GroundingService {

	@Autowired
	private GroundingRepository groundingRepository;

	public ResponseEntity<Grounding> saveGrounding(final Grounding grounding) {
		return new ResponseEntity<Grounding>(groundingRepository.save(grounding), HttpStatus.OK);
	}
}
