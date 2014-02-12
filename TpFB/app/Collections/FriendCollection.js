FriendCollection = Backbone.Collection.extend({
  model: FriendModel,

  initialize: function(){
  },

  filterByName: function(name){
    name = name.toLowerCase();

    var friends = this.filter(function(friend){
      return friend.get('first_name').toLowerCase().indexOf(name) !== -1;
    });

    // simulate a collection reset
    this.trigger('reset', new FriendCollection(friends));
  },
  
  sortByCollection: function(){
	var Triefriends = this.sortBy(function(friend){
		return parseInt(friend.get('mutual_friend_count'),10);
	});
		
	this.trigger('reset', new FriendCollection(Triefriends.reverse()));
  },  
  
  like: function(){
	var likefriends = this.sortBy(function(friend){
		return parseInt(friend.get('likes_count')||0,10);
	});
		
	this.trigger('reset', new FriendCollection(likefriends.reverse()));
  },
   
   toplike: function(){
	var like5= this.sortBy(function(friend){
		return _.First(friend,5).reverse();
	});
   }
});

