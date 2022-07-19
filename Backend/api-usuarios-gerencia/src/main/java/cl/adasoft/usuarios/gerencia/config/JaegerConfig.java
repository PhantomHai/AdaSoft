package cl.adasoft.usuarios.gerencia.config;

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
                .withAgentHost("jaeger")
                .withAgentPort(6831);

        io.jaegertracing.Configuration config = new io.jaegertracing.Configuration("api-usuarios-gerencia-traces")
                .withSampler(samplerConfig).withReporter(reporterConfig.withSender(senderConfig));

        return config.getTracer();
    }
}
