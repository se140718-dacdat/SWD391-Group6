package backend.repository;

import backend.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

public interface UserRepository extends JpaRepository<User, String> {

    @Query("SELECT u From Users u Where u.AccountStatus = 1 AND u.Username = :username" +
            " AND u.Password = :password")
    public User findByUsernameAndPassword(
            @Param("Username") String username, @Param("Password") String password);


}
