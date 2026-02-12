package ee.marcus.kodutoo1.repository;

import ee.marcus.kodutoo1.entity.Movie;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MovieRepository extends JpaRepository<Movie,Long>{
}
