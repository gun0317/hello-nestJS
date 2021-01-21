import { GraphQLSchemaHost } from '@nestjs/graphql';
import { ApolloServerPlugin, GraphQLRequestListener } from 'apollo-server-plugin-base';
export declare class ComplexityPlugin implements ApolloServerPlugin {
    private gqlSchemaHost;
    constructor(gqlSchemaHost: GraphQLSchemaHost);
    requestDidStart(): GraphQLRequestListener;
}
