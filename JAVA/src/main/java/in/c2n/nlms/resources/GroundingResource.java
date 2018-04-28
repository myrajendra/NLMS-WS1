package in.c2n.nlms.resources;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import in.c2n.nlms.entities.Grounding;
import in.c2n.nlms.services.GroundingService;

@CrossOrigin
@RestController
@RequestMapping("/grounding")
public class GroundingResource {
	
	@Autowired
	private GroundingService groundingService;
	
	@PostMapping
	public Object saveGrounding(@RequestBody(required=true) final Grounding grounding){
		return groundingService.saveGrounding(grounding);
	}
}
