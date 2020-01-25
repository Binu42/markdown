import { Mongo } from 'meteor/mongo';

Meteor.methods({
  'bins.insert': function () {
    return Bins.insert({
      createdAt: new Date(),
      ownerId: this.userId,
      content: '',
      sharedWith: []
    })
  }
})

export const Bins = new Mongo.Collection('bins');
