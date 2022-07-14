package backend.controller;

import backend.model.User;
import backend.repository.UserRepository;
import backend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/users")
public class UsersController {
    private final UserRepository userRepository;

    @Autowired
    private UserService userService;

    public UsersController (UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @GetMapping("/login")
    public User loginUser(String username, String password) {
        return userService.getUser(username, password);
    }
}
