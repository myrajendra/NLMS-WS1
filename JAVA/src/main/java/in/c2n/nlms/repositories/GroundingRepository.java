package in.c2n.nlms.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import in.c2n.nlms.entities.Grounding;

@Repository
public interface GroundingRepository extends JpaRepository<Grounding, Integer> {

}
