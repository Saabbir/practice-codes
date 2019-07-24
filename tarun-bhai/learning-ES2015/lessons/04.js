/*
** ES2015 enhanced object method definations
*/

var cat = {
    meow ( times ) {
        console.log( "meow".repeat( times ) )
    },
    snore ( times ) {
        console.log( "snore".repeat( times ) )
    }
}

cat.meow( 4 )
cat.snore( 6 )
