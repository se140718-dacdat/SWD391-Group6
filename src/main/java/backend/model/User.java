package backend.model;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Table(name = "Users")
@Getter @Setter @NoArgsConstructor
public class User {
    @Id
    private String username;

    private String password;
    private String fullname;
    private String email;
    private int role;
    private boolean isActive = true;


}
