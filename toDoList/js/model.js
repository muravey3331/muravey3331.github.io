define("model",
    [],
    function () {
      function Model(data) {
        var self = this;

        self.data = data;
        self.addItem = function (item) {
          if (item.length === 0) {
            return;
          }
          self.data.push(item);
          return self.data;
        };

        self.removeItem = function (item) {
          var index = self.data.indexOf(item);
          if (index === -1) {
            return;
          }
          self.data.splice(index, 1);
          return self.data
        };

//replace

          self.replaceItem = function (index, changedItem) {
          var index2 = self.data.indexOf(index);
            console.log('index2',index2 );
          self.data.splice(index2, 1, changedItem);
          return self.data
        }
      }
      return Model;
    }
);