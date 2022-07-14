package backend.repository;

import backend.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import org.springframework.data.repository.query.Param;

public interface UserRepository extends JpaRepository<User, String> {

    @Query("SELECT u From User u Where u.isActive AND u.username = :username" +
            " AND u.password = :password")
    public User findByUsernameAndPassword(
            @Param("Username") String username, @Param("Password") String password);


}
