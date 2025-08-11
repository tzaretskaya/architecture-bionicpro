FROM openjdk:17-jdk-slim
ENV APP_HOME=/home/app
ARG JAR_FILE=build/libs/*.jar
COPY ${JAR_FILE} ${APP_HOME}/app.jar
WORKDIR $APP_HOME
ENTRYPOINT ["java","-jar","/app.jar"]
