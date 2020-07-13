import { Meteor } from 'meteor/meteor';
import { Bins } from '../imports/api/bins';

Meteor.startup(() => {
  Meteor.publish('bins', function () {
    return Bins.find({ $or: [{ ownerId: this.userId }, { ownerId: null }] });
  });

  Meteor.publish('sharedBins', function () {
    const user = Meteor.users.findOne(this.userId);
    // console.log(user)
    if (!user) {
      return;
    }

    const email = user.emails[0].address;
    // console.log(email)
    return Bins.find({
      sharedWith: { $elemMatch: { $eq: email } },
    });
  });
});
