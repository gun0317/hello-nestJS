"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Movie = void 0;
class Movie {
    static _GRAPHQL_METADATA_FACTORY() {
        return { id: { nullable: false, type: () => Number }, title: { nullable: false, type: () => String }, year: { nullable: false, type: () => Number }, genres: { nullable: false, type: () => [String] } };
    }
}
exports.Movie = Movie;
//# sourceMappingURL=movie.entity.js.map