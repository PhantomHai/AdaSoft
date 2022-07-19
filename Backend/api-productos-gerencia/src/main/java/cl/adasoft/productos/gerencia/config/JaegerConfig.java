package cl.adasoft.productos.gerencia.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import io.jaegertracing.internal.JaegerTracer;

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

        io.jaegertracing.Configuration config = new io.jaegertracing.Configuration("api-productos-gerencia-traces")
                .withSampler(samplerConfig).withReporter(reporterConfig.withSender(senderConfig));

        return config.getTracer();
    }
}
