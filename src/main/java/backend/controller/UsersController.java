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
@RequestMapping(value = "/users", path = "/JSON", produces = "application/json")
public class UsersController {
    private final UserRepository userRepository;

    @Autowired
    private UserService userService;

    public UsersController(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @GetMapping("/login/{username}/{password}")
    public User loginUser(@PathVariable("username") String username, @PathVariable("password") String password) {
        return userService.getUser(username, password);
    }
}
