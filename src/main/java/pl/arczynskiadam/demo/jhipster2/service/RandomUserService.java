package pl.arczynskiadam.demo.jhipster2.service;

import org.springframework.stereotype.Service;
import pl.arczynskiadam.demo.jhipster2.model.User;

import java.util.ArrayList;
import java.util.List;

@Service
public class RandomUserService {
    public List<User> randomUsers() {
        simulateError();

        ArrayList<User> users = new ArrayList<>();
        for (int i = 0; i < 10; i++) {
            users.add(new User(getRandomFirstName(), getRandomLastName()));
        }
        return users;
    }

    private String getRandomFirstName() {
        String[] names = {"Adam", "Tomasz", "Andrzej", "Mateusz", "Rafał", "Michał"};
        return names[(int)(Math.random() * names.length)];
    }

    private String getRandomLastName() {
        String[] names = {"Kowalski", "Nowak", "Iksiński"};
        return names[(int)(Math.random() * names.length)];
    }

    private void simulateError() {
        if (Math.random() > 0.8) {
            throw new RuntimeException("Simulated exception");
        }
    }
}
