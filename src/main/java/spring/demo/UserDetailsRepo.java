package spring.demo;

import java.util.List;

public interface  UserDetailsRepo {
    public List<UserDetails> findAllAccounts();
    public UserDetails findAccount(Long id);
    public UserDetails findAccountByName(String name);
    public UserDetails createAccount(UserDetails data);
    public UserDetails findAccountByUsername(String username);
}
