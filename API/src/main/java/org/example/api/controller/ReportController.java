package org.example.api.controller;

import java.util.Arrays;
import java.util.List;
import java.util.logging.Logger;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ReportController {

  private static final Logger LOGGER = Logger.getLogger(ReportController.class.getName());

  @GetMapping("/reports")
  public List<String> getReports() {
    LOGGER.info(
        "API: " + SecurityContextHolder.getContext().getAuthentication().getPrincipal().toString());
    return Arrays.asList(
        "Report 1: System performance analysis",
        "Report 2: User activity summary",
        "Report 3: Security audit results"
    );
  }
}
