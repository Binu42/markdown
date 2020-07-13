import { Mongo } from 'meteor/mongo';

Meteor.methods({
  'bins.insert': function (par) {
    console.log(par);
    return Bins.insert({
      createdAt: new Date(),
      ownerId: this.userId,
      content: '#Thanks for creating Bin',
      name: par.name,
      description: par.description,
      sharedWith: [],
    });
  },

  'bin.updateDetails': (par) => {
    const { bid, name, description } = par;
    return Bins.update(bid, {
      $set: { name, description },
    });
  },

  'bin.remove': function (bin) {
    return Bins.remove(bin);
  },

  'bin.update': function (bid, newContent) {
    return Bins.update(bid, { $set: { content: newContent } });
  },

  'bin.share': function (bid, email) {
    return Bins.update(bid, { $push: { sharedWith: email } });
  },
});

export const Bins = new Mongo.Collection('bins');
