FROM maven:3.6.3-jdk-8

COPY . /usr/webapp
WORKDIR /usr/webapp

RUN mvn clean install

FROM openjdk:8-jre-alpine

WORKDIR /usr/webapp

COPY --from=0 /usr/webapp/target/webapp.jar .

ENTRYPOINT ["java","-jar","webapp.jar"]
