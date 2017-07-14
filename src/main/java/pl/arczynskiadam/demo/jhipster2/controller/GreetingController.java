package pl.arczynskiadam.demo.jhipster2.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import pl.arczynskiadam.demo.jhipster2.model.User;
import pl.arczynskiadam.demo.jhipster2.service.RandomUserService;

import java.util.List;

import static org.springframework.web.bind.annotation.RequestMethod.GET;

@RestController
public class GreetingController {

    @Autowired
    RandomUserService userService;

    @RequestMapping(method = GET, value = "/users")
    public List<User> index() {
        return userService.randomUsers();
    }
}