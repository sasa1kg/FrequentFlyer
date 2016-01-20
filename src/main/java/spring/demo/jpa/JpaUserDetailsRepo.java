package spring.demo.jpa;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;
import javax.transaction.Transactional;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import spring.demo.SpringDataRestApplication;
import spring.demo.UserDetails;
import spring.demo.UserDetailsRepo;


@Service
@Transactional
public class JpaUserDetailsRepo implements UserDetailsRepo {
	
	Logger logger = LoggerFactory.getLogger(SpringDataRestApplication.class);

    @PersistenceContext
    private EntityManager em;
	
	@SuppressWarnings("unchecked")
	@Override
	public List<UserDetails> findAllAccounts() {
		 Query query = em.createQuery("SELECT u FROM UserDetails u");
	     return query.getResultList();
	}

	@Override
	public UserDetails findAccount(Long id) {
		 Query query = em.createQuery("SELECT u FROM UserDetails u where user_id=" + id);
	     return (UserDetails) query.getSingleResult();
	}

	@Override
	public UserDetails findAccountByName(String name) {
		Query query = em.createQuery("SELECT u FROM UserDetails u where first_name like '" + name + "'");
		return (UserDetails) query.getSingleResult();
	}

	@Override
	public UserDetails createAccount(UserDetails data) {
        em.persist(data);
        return data;
	}

	@Override
	public UserDetails findAccountByUsername(String username) {
		logger.info("Get by username " + username);
		Query query = em.createQuery("SELECT u FROM UserDetails u where username like '" + username + "'");
		return (UserDetails) query.getSingleResult();
	}

}
