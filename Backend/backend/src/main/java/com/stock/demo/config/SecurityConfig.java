package com.stock.demo.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.provisioning.InMemoryUserDetailsManager;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
@EnableWebSecurity
public class SecurityConfig {
    
    @Bean
    public PasswordEncoder passwordEncoder(){
        return new BCryptPasswordEncoder();
    }
    
    @Bean
    public UserDetailsService userDetailsService(){
        UserDetails user1 = User.withUsername("Karthik").password(passwordEncoder().encode("1234")).build();
        UserDetails user2 = User.withUsername("NTR").password(passwordEncoder().encode("1234")).roles("USER").build();
        UserDetails user3 = User.withUsername("user").password(passwordEncoder().encode("1234")).roles("USER").build();
        return new InMemoryUserDetailsManager(user1, user2, user3);
    }

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception{
        http
            .cors(Customizer.withDefaults())
            .csrf(csrf -> csrf.disable()) 
            .authorizeHttpRequests(
                auth -> auth           
                    .requestMatchers("/").permitAll()
                    .requestMatchers("/fetchHoldings").permitAll()
                    .requestMatchers("/fetchPositions").hasRole("USER")
                    // .anyRequest().permitAll()
                    .anyRequest().authenticated()
            )
            // .formLogin(Customizer.withDefaults());
            .formLogin(form -> form
                .successHandler((request, response, authentication) -> {
                response.setStatus(200);
            })
        );
        return http.build();
    }

}
