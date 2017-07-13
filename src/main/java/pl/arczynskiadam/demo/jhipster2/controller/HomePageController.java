package pl.arczynskiadam.demo.jhipster2.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import static org.springframework.web.bind.annotation.RequestMethod.GET;

@Controller
public class HomePageController {

    @RequestMapping(method = GET, value = "/")
    public String index(Model model) {
        model.addAttribute("test", "test");
        return "index";
    }
}