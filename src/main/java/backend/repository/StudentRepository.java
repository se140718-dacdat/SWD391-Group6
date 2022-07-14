package backend.repository;

import backend.model.Student;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface StudentRepository extends JpaRepository<Student, String> {

    @Query("SELECT s from Student s WHERE s.username = :username")
    public Student getStudentByUsername (String username);

    @Query("select s from Student s  where s.id = :studentId")
    public Student getStudentByStudentId (@Param("studentId") String studentId);

}
