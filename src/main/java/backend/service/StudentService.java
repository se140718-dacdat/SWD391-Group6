package backend.service;

import backend.model.Student;
import backend.model.User;
import backend.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;

public class StudentService {

    @Autowired
    private StudentRepository studentRepository;

    public Student getStudentByUsername(String username) {
        return studentRepository.getStudentByUsername(username);
    }

    public Student getStudentById(String studentId) {
        return studentRepository.getStudentByStudentId(studentId);
    }
}
