import { Meteor } from 'meteor/meteor';
import { Bins } from '../imports/api/bins'

Meteor.startup(() => {
  Meteor.publish('bins', function () {
    return Bins.find({ ownerId: this.userId });
  })
});
