package com.DocEstate.spring;

import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;

//Spring Security mit Login
// Für der Authentifizerung

@Configuration
public class SecurityConfig extends WebSecurityConfigurerAdapter {

	@Override
	protected void configure(HttpSecurity http) throws Exception {
		// Erlauben von Cross Origin
		http.cors();
		http.csrf().disable();
		http.authorizeRequests().antMatchers("/**").fullyAuthenticated().and
				().httpBasic();

	}

	@Override
	protected void configure(AuthenticationManagerBuilder auth) throws Exception {
		//Authentifizierung mit User "user" mit Passwort:"user" mit der Rolle USER
		auth.inMemoryAuthentication().withUser("user").password("{noop}user").roles("USER");
	}



}