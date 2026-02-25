package ee.marcus.decathlon.entity;

import jakarta.persistence.*;

@Entity
public class Tulemus {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private int punktid;

    @ManyToOne
    private Sportlane sportlane;
}
