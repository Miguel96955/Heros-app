import { heroes } from "../data/Heroes";

export const getHeroByPublisher = ( publisher ) => {

    const validPublisher = ['Dc comics', 'Marvel Comnics'];
    if ( !validPublisher.includes( publisher ) ) {
        throw new Error(`publisher "${publisher}" no es correcto`);
    }
    
    return heroes.filter ( hero => hero.publisher === publisher );
}
