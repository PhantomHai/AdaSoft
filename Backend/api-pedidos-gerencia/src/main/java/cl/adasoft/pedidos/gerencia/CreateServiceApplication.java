package cl.adasoft.pedidos.gerencia;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.info.Contact;
import io.swagger.v3.oas.models.info.Info;
import io.swagger.v3.oas.models.info.License;

@SpringBootApplication
public class CreateServiceApplication {

	public static void main(String[] args) {
		SpringApplication.run(CreateServiceApplication.class, args);
	}
	
	@Bean
	public OpenAPI customOpenAPI(@Value("${application-description}") String appDescription, @Value("${application-version}") String appVersion) {
	    return new OpenAPI()
	            .info(new Info()
	                    .title("API REST PARTICIPANT")
	                    .version(appVersion)
	                    .description(appDescription)
	                    .license(new License().name("AdaSoft").url("http://www.adasoft.cl"))
	                    .contact(new Contact().name("Hugo Cerdá").email("hugocerda@adasoft.cl")));
	}

}
