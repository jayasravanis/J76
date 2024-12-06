package com.healthcare.j76backend.controller;

import com.healthcare.j76backend.util.JwtUtil;
import io.jsonwebtoken.Claims;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api")
public class AuthController {

    @PostMapping("/login")
    public Map<String, Object> login(@RequestBody Map<String, String> credentials) {
        String username = credentials.get("username");
        String password = credentials.get("password");

        // Simulating user authentication
        if ("jaya".equals(username) && "jaya".equals(password)) {
            String token = JwtUtil.generateToken(username);
            Map<String, Object> response = new HashMap<>();
            response.put("success", true);
            response.put("token", token);
            return response;
        }

        throw new RuntimeException("Invalid username or password");
    }

    @PostMapping("/refresh")
    public ResponseEntity<?> refreshToken(@RequestHeader("Authorization") String token) {
        try {
            // Remove "Bearer " from token
            token = token.replace("Bearer ", "");

            Claims claims = JwtUtil.validateToken(token);
            String username = claims.getSubject();

            // Generate a new token
            String newToken = JwtUtil.generateToken(username);
            return ResponseEntity.ok(newToken);
        } catch (Exception e) {
            return ResponseEntity.status(401).body("Invalid or expired token");
        }
    }
}
