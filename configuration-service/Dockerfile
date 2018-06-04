FROM openjdk
EXPOSE 8888
WORKDIR target/
ADD target/configuration-service-1.0.jar target/config.jar
RUN sh -c 'touch config.jar'
ENTRYPOINT ["java", "-jar","config.jar"]
