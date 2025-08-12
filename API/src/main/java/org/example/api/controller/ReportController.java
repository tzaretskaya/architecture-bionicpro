package org.example.api.controller;

import java.util.Arrays;
import java.util.List;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ReportController {

  @CrossOrigin(origins = "*")
  @GetMapping("/reports")
  public List<String> getReports() {
    return Arrays.asList(
        "Report 1: System performance analysis",
        "Report 2: User activity summary",
        "Report 3: Security audit results"
    );
  }
}
