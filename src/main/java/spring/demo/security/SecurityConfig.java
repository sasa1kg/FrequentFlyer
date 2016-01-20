package spring.demo.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;

import spring.demo.UserDetailsServiceImpl;

@Configuration
@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter {
	
	@Autowired
	private AuthFailure authFailure;
	
	@Autowired
	private AuthSuccess authSuccess;
	
	@Autowired
	private EntryPointUnathorizedHandler unauthorizedHandler;
	
	@Autowired
	private UserDetailsServiceImpl userDetailService;
	
	@Autowired
	public void configAuthBuilder (AuthenticationManagerBuilder builder) throws Exception {
		builder.userDetailsService(userDetailService);
	} 
	
	
	@Override
	protected void configure(HttpSecurity http) throws Exception {
		http.csrf().disable()
			.exceptionHandling().authenticationEntryPoint(unauthorizedHandler)
			.and()
			.formLogin()
				.successHandler(authSuccess)
				.failureHandler(authFailure)
			.and()
			.authorizeRequests()
				.antMatchers("/**").permitAll();
	}

}
