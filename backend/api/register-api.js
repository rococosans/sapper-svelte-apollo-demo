import merge from 'lodash/merge';
import Query from './query';
import Mutation from './mutation';

const resolvers = merge(Mutation, Query);

export default resolvers;
