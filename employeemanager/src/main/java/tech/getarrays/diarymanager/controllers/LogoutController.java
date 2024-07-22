package tech.getarrays.diarymanager.controllers;

import jakarta.servlet.http.HttpServletResponse;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.DisabledException;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import tech.getarrays.diarymanager.dto.AuthenticationDTO;
import tech.getarrays.diarymanager.dto.HelloResponse;
import tech.getarrays.diarymanager.dto.LogoutResponse;

import java.io.IOException;

@RestController
@RequestMapping("/user")
public class LogoutController {

    @PostMapping("/logout")
    public LogoutResponse deleteAuthenticationToken() {
        SecurityContextHolder.clearContext();
//        System.out.println("ok ok ok");
        return new LogoutResponse("Logout OK");

    }
}
