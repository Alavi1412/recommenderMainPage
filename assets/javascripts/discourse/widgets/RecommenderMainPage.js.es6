import { createWidget } from 'discourse/widgets/widget';
import { h } from 'virtual-dom';
import { ajax } from 'discourse/lib/ajax';



export default createWidget('RecommenderMainPage', {
  tagName: 'div.RecommenderMainPage.widget-container',
  buildKey: (attrs) => 'RecommenderMainPage',

  defaultState() {
    return {
      laod: 0,
      data: [],
      topics: [],
      contents: [],
      finished: 0,
      title: 0
    }
  },
  getData(){
   let self = this;
    // ajax(`http://padpors.com/recommender/mostPopularItems?fresh`).then(function(res) {
    // self.state.laod = true;
    // self.state.data = data;
    // self.scheduleRerender()
    // });
    var user = Discourse.User.currentProp('id');
    var id;
    if (user)
      id = user;
    else
      id = $.cookie("rec_id");
    $.getJSON("https://padpors.com/recommender/recommend/" + id + "?fresh&radius=5&howMany=7", function(data) {
        self.state.laod = 1;
        self.state.data = data;
        self.scheduleRerender();
      })
      .error(function(event, jqxhr, exception) {
          $.getJSON("https://padpors.com/recommender/mostPopularItems?fresh", function (data){
              self.state.laod = 1;
              self.state.data = data;
              self.scheduleRerender();
          });  
    });
  },

  getTopic(topicIds){
    let self = this;
    self.state.finished = 1;
    var title, imgUrl, cooked;
    ajax(`t/${topicIds[0]}`).then(function(res) {
      title = res.title;
      cooked = res.post_stream.posts[0].cooked;
      if (title.length > 50 )
          title = title.substr(0, 50) + "...";

      /*if (cooked.search("<img")) {
        imgUrl = cooked.substr(cooked.search("<img") + 4,cooked.length);
        
        imgUrl = imgUrl.substr(imgUrl.search("src=\"") + 5,imgUrl.length);
        
        imgUrl = imgUrl.substr(0,imgUrl.search("\""));
      }
      else
        imgUrl = "https://padpors.com/uploads/default/original/2X/0/07ac48a347ddc8aa05e14460317243ffe0992d38.png";*/

      self.state.contents[1] = h("div.mostPop", [
        h("a.mostPopLink",  
          {attributes: 
            {href: "/t/" + res.slug + "/" + res.id }},
          [
            /*h("img.mostPopImg",{attributes: 
                      {src: imgUrl}}),*/
            title
            ]
          ),
        h("span.mostPopView", `بازدید: ${res.views}`)]);
      //self.scheduleRerender();
      return ajax(`t/${topicIds[1]}`);

    }).then(function(res){

      title = res.title;
      cooked = res.post_stream.posts[0].cooked;

      if (title.length > 50 )
        title = title.substr(0, 50) + "...";
      /*if (cooked.search("<img")) {
        imgUrl = cooked.substr(cooked.search("<img") + 4,cooked.length);
        
        imgUrl = imgUrl.substr(imgUrl.search("src=\"") + 5,imgUrl.length);
        
        imgUrl = imgUrl.substr(0,imgUrl.search("\""));
      }
      else
        imgUrl = "https://padpors.com/uploads/default/original/2X/0/07ac48a347ddc8aa05e14460317243ffe0992d38.png";*/

      self.state.contents[2] = h("div.mostPop", [
        h("a.mostPopLink",  
          {attributes: 
            {href: "/t/" + res.slug + "/" + res.id }},
          [
            /*h("img.mostPopImg",{attributes: 
                      {src: imgUrl}}),*/
            title
            ]
          ),
        h("span.mostPopView", `بازدید: ${res.views}`)]);
      //self.scheduleRerender();
      return ajax(`t/${topicIds[2]}`);

    }).then(function(res){

      title = res.title;
      cooked = res.post_stream.posts[0].cooked;

      if (title.length > 50 )
        title = title.substr(0, 50) + "...";
     /*if (cooked.search("<img")) {
        imgUrl = cooked.substr(cooked.search("<img") + 4,cooked.length);
        
        imgUrl = imgUrl.substr(imgUrl.search("src=\"") + 5,imgUrl.length);
        
        imgUrl = imgUrl.substr(0,imgUrl.search("\""));
      }
      else
        imgUrl = "https://padpors.com/uploads/default/original/2X/0/07ac48a347ddc8aa05e14460317243ffe0992d38.png";*/

      self.state.contents[3] = h("div.mostPop", [
        h("a.mostPopLink",  
          {attributes: 
            {href: "/t/" + res.slug + "/" + res.id }},
          [
           /* h("img.mostPopImg",{attributes: 
                      {src: imgUrl}}),*/
            title
            ]
          ),
        h("span.mostPopView", `بازدید: ${res.views}`)]);
      //self.scheduleRerender();
      return ajax(`t/${topicIds[3]}`);

    }).then(function(res){

      title = res.title;
      cooked = res.post_stream.posts[0].cooked;

      if (title.length > 50 )
        title = title.substr(0, 50) + "...";
      /*if (cooked.search("<img")) {
        imgUrl = cooked.substr(cooked.search("<img") + 4,cooked.length);
        
        imgUrl = imgUrl.substr(imgUrl.search("src=\"") + 5,imgUrl.length);
        
        imgUrl = imgUrl.substr(0,imgUrl.search("\""));
      }
      else
        imgUrl = "https://padpors.com/uploads/default/original/2X/0/07ac48a347ddc8aa05e14460317243ffe0992d38.png";*/

      self.state.contents[4] = h("div.mostPop", [
        h("a.mostPopLink",  
          {attributes: 
            {href: "/t/" + res.slug + "/" + res.id }},
          [
           /* h("img.mostPopImg",{attributes: 
                      {src: imgUrl}}),*/
            title
            ]
          ),
        h("span.mostPopView", `بازدید: ${res.views}`)]);
      //self.scheduleRerender();
      return ajax(`t/${topicIds[4]}`);

    }).then(function(res){

      title = res.title;
      cooked = res.post_stream.posts[0].cooked;

      if (title.length > 50 )
        title = title.substr(0, 50) + "...";
      /*if (cooked.search("<img")) {
        imgUrl = cooked.substr(cooked.search("<img") + 4,cooked.length);
        
        imgUrl = imgUrl.substr(imgUrl.search("src=\"") + 5,imgUrl.length);
        
        imgUrl = imgUrl.substr(0,imgUrl.search("\""));
      }
      else
        imgUrl = "https://padpors.com/uploads/default/original/2X/0/07ac48a347ddc8aa05e14460317243ffe0992d38.png";*/

      self.state.contents[5] = h("div.mostPop", [
        h("a.mostPopLink",  
          {attributes: 
            {href: "/t/" + res.slug + "/" + res.id }},
          [
            /*h("img.mostPopImg",{attributes: 
                      {src: imgUrl}}),*/
            title
            ]
          ),
        h("span.mostPopView", `بازدید: ${res.views}`)])
      
      self.scheduleRerender();
    });
  },

  html(attrs, state) {

    var size;
    var topicIds = [], counter = 0, topicId;
	   if (state.finished == 1) {
      return h('div.widget-inner', state.contents);
     }
    if (state.laod == 0)
      {
        if(state.title == 0)
        	{
                state.contents.push(h("h1", I18n.t("main.recommender")));
                state.title = 1;
            }
        this.getData();
      }

    else if (state.laod == 1) {
      this.state.load = 2;
      size = state.data.length;
      var data = state.data;
      for (var i = 0; i < size; i++) {
        topicId = data[i][0].substr(1,data[i][0].length);
        topicId = parseInt(topicId);
        if (isNaN(topicId))
            continue;
        else
          {
            topicIds.push(topicId);
            counter++;
          }
        if (counter == 5) {
          break;
        }
      }
      this.getTopic(topicIds);
    }


  	return h('div.widget-inner', state.contents);
  }
});
