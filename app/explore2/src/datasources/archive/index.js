'use strict';

function autocompleteArchive( results, dataset ){

  const source = 'archive';

  let list = [];

  if ( valid( results.response.numFound > 0 ) ){

    $.each( results.response.docs, function( i, item ){

      dataset.push( item.title );

    })

  }

}

function processResultsArchive( topicResults, struct, index ){

  const source = 'archive';

  return new Promise(( resolve, reject ) => {

    if ( !valid( topicResults.response.docs ) ){

      resolve( [ [], [] ] );

    }
    else if ( topicResults.response.docs.length === 0 ){

      resolve( [ [], [] ] );

    }
    else if ( ( Math.max( Math.ceil( topicResults.response.numFound / ( datasources[ source ].pagesize *  (explore.page - 1) ) ), 1) === 1 ) ){ // no more results

      resolve( [ [], [] ] );

    }
    else {

      datasources[ source ].total = topicResults.response.numFound;

      // standard result structure (modelled after the Wikipedia API)
      let result = {

        source: {

          data: {

            batchcomplete: '',

            continue: {
              'continue': "-||",
              'sroffset': datasources[ source ].pagesize,
              'source': source,
            },

            query: {

              search : [],

              searchinfo: {
                totalhits: datasources[ source ].total,
              },

            },

          },

        },

      };

      $.each( topicResults.response.docs, async function( i, obj ){

        // URL vars
        const gid         = obj.identifier;
        const qid         = '';
        const language    = explore.language;
        const term 				= removebracesTitle( getSearchTerm() );

        const url         = eval(`\`${ datasources[ source ].display_url  }\``);

        const start_date  = valid( obj.date )? obj.date : '';

        let desc          = '';
        let creators      = [];
        let subtag        = '';
        let newtab        = false;

        let document_language     = 'en';
        let document_voice_code   = '';
        let tts_link              = '';
        let drm_book              = false;

        // fetch item metadata
        //  see:  https://archive.org/developers/md-read.html
        //        https://blog.archive.org/2013/07/04/metadata-api/
        //fetch( 'https://archive.org/metadata/' + gid ).then( (response) => response.json() ).then( metadata => {

          //console.log( metadata );

        //});

        if ( valid( obj.language ) ){

          if ( typeof obj.language === 'string' ){

            if ( obj.language.length === 2 ){ // lang2

              document_language = obj.language;

            }
            else if ( obj.language.length === 3 ){ // lang3

              document_language = getLangCode2( obj.language );

            }
            else { // fullname

              document_language = getLangCode2fromName( obj.language );

            }

            //console.log( 'language: ', obj.language, ' --> ', document_language );

          }


        }

        document_voice_code  = explore.voice_code.startsWith( document_language )? explore.voice_code : '';

        if ( valid( obj.format ) ){

          $.each( obj.format, function ( index, f ) {

            if ( f.toLowerCase().includes( 'encrypted' ) ){ // DRM ebook

              newtab    = true;
              drm_book  = true;

              //console.log( 'DRM book' );

            }

          });

        }

				// get authors
				if ( obj.creator ){

					//let author_name = '';
					//let author_url  = '';

					if ( Array.isArray( obj.creator ) ){

						$.each( obj.creator, function ( j, author ) {

							//author_name = author;
							//author_url  = 'https://archive.org/search.php?query=creator%3A%28' + author_name + '%29';

							creators.push( author );

						});

					}
					else { // is a simple string

						creators.push( obj.creator );

					}

				}

        if ( valid( obj.mediatype ) ){

          if ( obj.mediatype === 'texts' ){ subtag = 'written-work' }
          else if ( obj.mediatype === 'audio' || obj.mediatype === 'concert' || obj.mediatype === 'etree' ){ subtag = 'music' }
          else if ( obj.mediatype === 'movies' ){ subtag = 'film' }
          else if ( obj.mediatype === 'tv' ){ subtag = 'tv-series' }
          else if ( obj.mediatype === 'image' ){ subtag = 'image' }
          else if ( obj.mediatype === 'collection' ){ subtag = 'periodical' }
          else if ( obj.mediatype === 'web' ){ subtag = 'website' }
          else if ( obj.mediatype === 'software' ){ subtag = 'software' }
          else if ( obj.mediatype === 'data' ){ subtag = 'data' }
          else { console.log( 'TODO: new archive.org type: ', obj.mediatype ); }

        }

        // check if PDF file available
        if ( ! drm_book && valid( obj.format ) ){

          if ( obj.format.includes('Text PDF') || obj.format.includes('Additional Text PDF') ){

            tts_link = `https://archive.org/download/${gid}/${gid}.pdf`;
            // tts_link = `https://archive.org/download/${gid}/${ gid.replace( '_', '%20' ) }.pdf`;

          }

        }

        if ( valid( obj.description ) ){

          if ( obj.description.length > explore.text_limit ){

            desc = obj.description.substring(0, explore.text_limit ) + ' (...)';           

          }
          else if ( Array.isArray( obj.description ) ){

            if ( obj.description[0].length > explore.text_limit ){

             desc = obj.description[0].substring(0, explore.text_limit ) + ' (...)';

            }
            else {

              desc = obj.description[0];

            }

          }
          else { // short string

            desc = obj.description;

          }

          if ( desc.length > explore.text_limit ){

            desc = desc.substring(0, explore.text_limit ) + ' (...)';

          }

          desc = highlightTerms( desc );

        }

        // fill fields
				let item = {
          source:       source,
					title:        obj.title,
					description:  desc + '<br/><br/>' + highlightTerms( creators.join(', ') ),
					gid:          url , // gid
					display_url:  url ,

          document_language:    document_language,
          document_voice_code:  document_voice_code,
          pdf_tts_link: tts_link,

					thumb:        'https://archive.org/services/img/' + obj.identifier,
          start_date:   start_date,
					qid:          '',
          countries:    [],
          tags:         [],
          'newtab':     newtab,
				};

				item.tags[0]	= 'work';
				item.tags[1]	= subtag;

				setWikidata( item, [ ], true, 'p' + explore.page );

        result.source.data.query.search.push( item ); 

      });

      resolve( [ result ] );

    }

  });

}

function resolveArchive( result, renderObject ){

  const source = 'archive';

  //console.log( 'resolveArchive(): ', result.value );

  if ( !valid( result.value[0] ) ){ // no results were found

    datasources[ source ].done = true;

  }
  else if ( result.value[0] === 'done' ){ // done fetching results

    datasources[ source ].done = true;

  }
  else {

    renderObject[ source ] = { data : result };

  }

}

function renderMarkArchive( inputs, source, q_, show_raw_results, id ){

  // TODO

}
