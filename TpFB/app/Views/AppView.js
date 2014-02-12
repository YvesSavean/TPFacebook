AppView = Backbone.View.extend({
  template: _.template($('#tmpl_friend').html()),

  events:{
    'keyup #search': 'search',
    'click #trier' : 'trier',
    'click #like' : 'like'
  },

 initialize: function(){
    this.listenTo(this.collection, 'reset', this.render.bind(this));
	//this.renderLike(this.collection.toplike(),'reset',this.renderLike.bind(this));
  }, 

  search: function(e){
    this.collection.filterByName(e.target.value);
  },
  
  trier: function(){
	this.collection.sortByCollection();
  },
  
  like: function(){
	this.collection.like();
  },

  renderLike: function(friends){
	var $Like = this.$el.find('#like');

    $Like.empty();

    friends.forEach(function(friend, i){
      $topLike.append($(this.templateTopLike({
        pic: friend.get('pic'),
        nom : friend.get('last_name'),
		prenom : friend.get('first_name'),
		like: friend.get('likes_count') || 0
      })));
    }, this);
  },
  
  render: function(friends){
    var $trombinoscope = this.$el.find('#trombinoscope');

    $trombinoscope.empty();

    friends.forEach(function(friend, i){
      $trombinoscope.append($(this.template({
        pic: friend.get('pic'),
        last_name: friend.get('last_name'),
        first_name: friend.get('first_name'),
        Like : friend.get('likes_count')||0,
        AmiCom : friend.get('mutual_friend_count')
      })));
    }, this);
  }
});

