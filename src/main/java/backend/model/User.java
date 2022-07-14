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
    @Column(name = "Username")
    private String username;

    @Column(name = "Password")
    private String password;
    @Column(name = "FullName")
    private String fullname;
    @Column(name = "Email")
    private String email;
    @Column(name = "RoleID")
    private int role;
    @Column(name = "AccountStatus")
    private boolean isActive;

}
