const { Given, Then } = require("@cucumber/cucumber");

Given("I create a queue with the prefix name {string}", async function (prefix) {
  const name = this.uniqueName(prefix);
  const response = await this.service.createQueue({ QueueName: name });
  this.queueUrl = response.QueueUrl;
  this.createdQueues.push(this.queueUrl);
});

Then("list queues should eventually return the queue urls", function (callback) {
  this.eventually(
    callback,
    function (next) {
      next.condition = function () {
        let matchingCount = 0;
        for (let i = 0; i < this.createdQueues.length; ++i) {
          for (let j = 0; j < this.data.QueueUrls.length; ++j) {
            if (this.createdQueues[i] == this.data.QueueUrls[j]) {
              matchingCount++;
            }
          }
        }
        return matchingCount == this.createdQueues.length;
      };

      this.request(null, "listQueues", {}, next);
    },
    { maxTime: 60 }
  );
});
