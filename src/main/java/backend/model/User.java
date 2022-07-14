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
    protected String username;

    @Column(name = "Password")
    protected String password;
    @Column(name = "FullName")
    protected String fullname;
    @Column(name = "Email")
    protected String email;
    @Column(name = "RoleID")
    protected int role;
    @Column(name = "AccountStatus")
    protected boolean isActive;

}
