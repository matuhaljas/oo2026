package ee.marcus.kontrolltoo.repository;


import ee.marcus.kontrolltoo.entity.Word;
import org.springframework.data.jpa.repository.JpaRepository;

public interface WordRepository extends JpaRepository<Word, Long> {
}