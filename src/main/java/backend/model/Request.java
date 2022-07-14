package backend.model;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "Requests")
@Getter @Setter @NoArgsConstructor
public class Request {
    @Id
    @Column(name = "Request_ID")
    @GeneratedValue(strategy=GenerationType.AUTO)
    private long id;

    @Column (name = "RequestType")
    private int type;

    @Column (name = "RequestTitle")
    private String title;

    @Column (name = "StudentID")
    private String studentId;

    @ManyToOne
    private Student student;

    @Column (name = "CompanyID")
    private String companyId;

    @ManyToOne
    private Company company;

    @Column(name = "CreateDate")
    private String createDate;

    @Column(name = "ChangeDate")
    private String changeDate;

    @Column(name = "RequestStatus")
    private int status;


}
