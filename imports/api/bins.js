import { Mongo } from 'meteor/mongo';

Meteor.methods({
  'bins.insert': function () {
    return Bins.insert({
      createdAt: new Date(),
      ownerId: this.userId,
      content: '',
      sharedWith: []
    })
  },

  'bin.remove': function (bin) {
    return Bins.remove(bin);
  }
})

export const Bins = new Mongo.Collection('bins');
