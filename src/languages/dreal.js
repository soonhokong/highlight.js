/*
Language: dReal
Author: Soonho Kong (soonhok@cs.cmu.edu)
Description: dReal Format
*/
function(hljs) {
  return {
    lexems: '[A-z\\-_]+',
    case_insensitive: false,
    contains: [
      {
        className: 'keyword',
        begin: 'dReal|dReach|proofcheck.sh',
        relevance: 100
      },
      {
        className: 'built_in',
        begin: '--visualize|--precision|--verbose|--ode-step|--ode-grid|--proof|-k|-t',
        relevance: 100
      },
      hljs.NUMBER_MODE
    ]
  };
}
