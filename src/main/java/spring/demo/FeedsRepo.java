package spring.demo;

import java.util.List;

import spring.demo.entities.Feeds;

public interface FeedsRepo {
    public List<Feeds> findAllFeeds();
    public List<Feeds> findAllTypeFeeds(String type);
    public List<Feeds> findAllCategoryTypes(String category);
    public List<Feeds> findAllFeedsByPartialName(String partial);
    public List<Feeds> findAllFeedsByCategoryAndPartialName(String category, String partial);
    public Feeds findSingleFeed(String feed);
}
