package backend.model;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "Companies")
@Getter
@Setter
@NoArgsConstructor
public class Company {
    @Id
    @Column(name = "CompanyID")
    private int id;
    @Column(name = "CompanyName")
    private String name;
    @Column(name = "Address")
    private String address;
    @Column(name = "Phone")
    private String phone;
    @Column(name = "Email")
    private String email;
    @Column(name = "Description")
    private String description;
    @Column(name = "ImageURL")
    private String imageUrl;
    @Column(name = "ActiveStatus")
    private boolean isActive;
    @Column(name = "WebSite")
    private String webUrl;
    @Column(name = "Introduction")
    private String introDescription;
    @Column(name = "ApplyPosition")
    private String hiringDescription;

}
