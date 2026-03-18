package ee.marcus.kontrolltoo.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "cipher_logs")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Logs {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String originalWord;
    private String cipheredWord;
    private int shift;
}
