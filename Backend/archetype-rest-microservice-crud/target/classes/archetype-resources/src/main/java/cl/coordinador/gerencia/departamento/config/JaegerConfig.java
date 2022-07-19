package cl.coordinador.gerencia.departamento.config;

import io.jaegertracing.internal.JaegerTracer;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class JaegerConfig {

    @Bean
    public JaegerTracer jaegerTracer() {

        io.jaegertracing.Configuration.SamplerConfiguration samplerConfig = io.jaegertracing.Configuration.SamplerConfiguration
                .fromEnv().withType("const").withParam(1);

        io.jaegertracing.Configuration.ReporterConfiguration reporterConfig = io.jaegertracing.Configuration.ReporterConfiguration
                .fromEnv().withLogSpans(true);

        io.jaegertracing.Configuration.SenderConfiguration senderConfig = io.jaegertracing.Configuration.SenderConfiguration
                .fromEnv()
                .withEndpoint(
                        "http://jaeger-all-in-one-inmemory-collector:14268/api/traces");

        io.jaegertracing.Configuration config = new io.jaegertracing.Configuration("api-personas-rrhh-personas-traces")
                .withSampler(samplerConfig).withReporter(reporterConfig.withSender(senderConfig));

        return config.getTracer();
    }
}
