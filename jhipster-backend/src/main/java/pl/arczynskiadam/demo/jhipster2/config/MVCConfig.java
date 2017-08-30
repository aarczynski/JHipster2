package pl.arczynskiadam.demo.jhipster2.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.ViewControllerRegistry;
import org.springframework.web.servlet.config.annotation.ViewResolverRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;
import org.springframework.web.servlet.view.InternalResourceViewResolver;

@Configuration
public class MVCConfig extends WebMvcConfigurerAdapter {

    public static final String VIEWS_INDEX = "forward:/views/index.html";

    @Override
    public void addViewControllers(ViewControllerRegistry registry) {
        registry.addViewController("/").setViewName(VIEWS_INDEX);
        registry.addViewController("/about").setViewName(VIEWS_INDEX);
    }

    @Override
    public void addResourceHandlers(ResourceHandlerRegistry registry) {
        registry.addResourceHandler("/**").addResourceLocations(
                "classpath:/META-INF/resources/",
                "classpath:/resources/",
                "classpath:/static/",
                "classpath:/public/"
        );
    }

    @Override
    public void configureViewResolvers(ViewResolverRegistry registry) {
        InternalResourceViewResolver viewResolver = new InternalResourceViewResolver();
        viewResolver.setPrefix("/META-INF/resources/");
        viewResolver.setSuffix(".html");
        registry.viewResolver(viewResolver);
    }
}
