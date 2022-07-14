package backend.model;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Table(name = "Students")
@Getter @Setter @NoArgsConstructor
public class Student extends User {

    @Id
    @Column (name = "StudentID")
    private String id;

    @OneToOne
    private User user;
    @ManyToOne
    private Major major;

    @Column(name = "DateOfBirth")
    private String dob;
    @Column(name = "Gender")
    private String gender;
    @Column(name = "Address")
    private String address;
    @Column(name = "Phone")
    private String phone;
    @Column(name = "CV_URL")
    private String cvUrl;
    @Column(name = "OJTStatus")
    private boolean isInOjt;



}
