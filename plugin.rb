# name: RecommenderMainPage
# about: A widget to show Recommender options
# version: 0.1
# authors: SMHassanAlavi

register_asset 'stylesheets/recommenderMainPage.scss'

after_initialize do
  SiteSetting.class_eval do
    @choices[:layouts_sidebar_right_widgets].push('RecommenderMainPage')
  end
end
