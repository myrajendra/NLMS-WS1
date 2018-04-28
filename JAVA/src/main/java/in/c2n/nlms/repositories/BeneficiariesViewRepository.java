package in.c2n.nlms.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import in.c2n.nlms.entities.BeneficiariesView;

@Repository
public interface BeneficiariesViewRepository extends JpaRepository<BeneficiariesView, Integer> {

	List<BeneficiariesView> findAllByDistrictNameAndMandalName(final String districtName, final String mandalName);
	
	BeneficiariesView findOneByAadharNo(final String aadharNo);
}
