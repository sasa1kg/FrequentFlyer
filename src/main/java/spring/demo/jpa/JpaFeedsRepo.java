package spring.demo.jpa;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;
import javax.transaction.Transactional;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import spring.demo.FeedsRepo;
import spring.demo.SpringDataRestApplication;
import spring.demo.entities.Feeds;

@Service
@Transactional
public class JpaFeedsRepo implements FeedsRepo{

	Logger logger = LoggerFactory.getLogger(SpringDataRestApplication.class);

    @PersistenceContext
    private EntityManager em;
	
	@SuppressWarnings("unchecked")
	@Override
	public List<Feeds> findAllFeeds() {
		 Query query = em.createQuery("SELECT f FROM Feeds f");
	     return query.getResultList();
	}

	@SuppressWarnings("unchecked")
	@Override
	public List<Feeds> findAllTypeFeeds(String type) {
		 Query query = em.createQuery("SELECT f FROM Feeds f where f.type like :type")
				 .setParameter("type", type);
	     return query.getResultList();
	}

	@SuppressWarnings("unchecked")
	@Override
	public List<Feeds> findAllCategoryTypes(String category) {
		Query query = em.createQuery("SELECT f FROM Feeds f where f.category like :category" )
				.setParameter("category", category);
	    return query.getResultList();
	}

	@SuppressWarnings("unchecked")
	@Override
	public List<Feeds> findAllFeedsByPartialName(String partial) {
		Query query = em.createQuery("select f from Feeds f where lower(name) like ('%" + partial +"%')");
	    return query.getResultList();
	}
	    
	@Override
	public Feeds findSingleFeed(String feed) {
		Query query = em.createQuery("SELECT f FROM Feeds f where f.name like '%" + feed + "%'" );
	    return (Feeds) query.getSingleResult();
	}

	@SuppressWarnings("unchecked")
	@Override
	public List<Feeds> findAllFeedsByCategoryAndPartialName(String category, String partial) {
		Query query = em.createQuery("select f from Feeds f where category like ('" + category + "%') and lower(name) like ('%" + partial +"%')");
	    return query.getResultList();
	}

}
