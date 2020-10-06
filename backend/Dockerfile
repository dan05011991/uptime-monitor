FROM maven:3.6.3-jdk-8

COPY . /usr/webapp
WORKDIR /usr/webapp

RUN mvn clean install

FROM java:8

WORKDIR /usr/webapp

COPY --from=0 /usr/webapp/target/webapp.jar .

ENTRYPOINT ["java","-jar","webapp.jar"]
