package pl.arczynskiadam.demo.jhipster2.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.ViewControllerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

@Configuration
public class MVCConfig extends WebMvcConfigurerAdapter {

    public static final String VIEWS_INDEX = "forward:/index.html";

    @Override
    public void addViewControllers(ViewControllerRegistry registry) {
        registry.addViewController("/").setViewName(VIEWS_INDEX);
        registry.addViewController("/about").setViewName(VIEWS_INDEX);
    }
}
