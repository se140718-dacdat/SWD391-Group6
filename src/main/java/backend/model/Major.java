package backend.model;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "CareerFields")
@Getter @Setter @NoArgsConstructor
public class Major {

    @Id
    @Column(name = "Field_ID")
    private int id;

    @Column(name = "FieldName")
    private String name;
}
