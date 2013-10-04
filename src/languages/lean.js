/*
Language: LEAN
Author: Soonho Kong (soonhok@cs.cmu.edu)
Description: Format for LEAN Theorem Prover
*/
function(hljs) {
    return {
        lexems: '[A-z0-9\\-_]+',
        keywords: '_',
        case_insensitive: false,
        contains: [
            {
                className: 'lean_keyword',
                begin: 'Theorem|Definition|Infix|Notation|Axiom|Variable|Coercion',
                relevance: 10
            },
            {
                className: 'op',
                begin: ':=|→|Π|λ',
                relevance: 10
            },
            {
                className: 'type',
                begin: 'Type',
                relevence: 10
            },
            {
                className: 'metavar',
                begin: '[\?]m',
                relevence: 10
            },
            hljs.NUMBER_MODE,
        ]
    };
}
