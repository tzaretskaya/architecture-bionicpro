FROM gradle:jdk17 AS build
WORKDIR /app
COPY --chown=gradle:gradle . .
RUN gradle clean build --no-daemon

FROM openjdk:17-jdk-slim
WORKDIR /app
COPY --from=build /app/build/libs/*.jar app.jar
ENTRYPOINT ["java", "-jar", "app.jar"]
