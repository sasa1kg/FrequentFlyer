package spring.demo;

import java.util.ArrayList;
import java.util.Collection;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

public class AccountUserDetails implements UserDetails {

	/**
	 * 
	 */
	private static final long serialVersionUID = -1760563006570096742L;
	
	private final spring.demo.UserDetails account;
	
	public AccountUserDetails(spring.demo.UserDetails userDet) {
		this.account = userDet;
	}
	
	@Override
	public Collection<? extends GrantedAuthority> getAuthorities() {
		GrantedAuthority authority = new GrantedAuthority() {
			
			/**
			 * 
			 */
			private static final long serialVersionUID = 8780237823928192371L;

			@Override
			public String getAuthority() {
				return "USER";
			}
		};
		ArrayList<GrantedAuthority> authorities = new ArrayList<GrantedAuthority>();
		authorities.add(authority);
		return authorities;
	}

	@Override
	public String getPassword() {
		return account.getPassword();
	}

	@Override
	public String getUsername() {
		return account.getUsername();
	}

	@Override
	public boolean isAccountNonExpired() {
		return true;
	}

	@Override
	public boolean isAccountNonLocked() {
		return true;
	}

	@Override
	public boolean isCredentialsNonExpired() {
		return true;
	}

	@Override
	public boolean isEnabled() {
		return true;
	}

}
