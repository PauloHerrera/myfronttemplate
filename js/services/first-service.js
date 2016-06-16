app.factory("firstService", function(){
    var users = [{ name: "São Paulo", score: 3 }, { name: "Flamengo", score: 1 }];

    var _users = function()
    {
        return users;
    }

    var _firstUser = function()
    {
        return users[0];
    }

    return {
      all: _users,
      first: _firstUser
    };
});
