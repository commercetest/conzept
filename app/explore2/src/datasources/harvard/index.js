'use strict';

function autocompleteHarvard( results, dataset ){

  const source = 'harvard';

  let list = [];

  if ( valid( results?.records > 0 ) ){

    $.each( results.records, function( i, item ){

      let title = item.title;

      dataset.push( title );

    })

  }

}

function processResultsHarvard( topicResults, struct, index ){

  const source = 'harvard';

  //console.log( 'processHarvardResults: ', topicResults );

  return new Promise(( resolve, reject ) => {

    if ( !valid( topicResults.records ) ){

      resolve( [ [], [] ] );

      datasources[ source ].done = true;

    }
    else if ( topicResults.records.length === 0 ){

      resolve( [ [], [] ] );

      datasources[ source ].done = true;

    }
    else if ( ( Math.max( Math.ceil( topicResults.info.totalrecords / ( datasources[ source ].pagesize *  (explore.page - 1) ) ), 1) === 1 ) ){ // no more results

      resolve( [ [], [] ] );

      datasources[ source ].done = true;

    }
    else {

      datasources[ source ].total = topicResults.info.totalrecords;

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

      $.each( topicResults.records, function( i, obj ){

        //console.log( obj );

        // URL vars
        let gid           = valid( obj.id )? obj.id : '';

        let url           = valid( obj.url )? obj.url : ''; // eval(`\`${ datasources[ source ].display_url  }\``);

        let title         = valid( obj.title )? obj.title : gid;

        let description   = valid( obj.description )? obj.description : '';
        let subtag        = 'image';

        let creators      = '';

        let start_date    = valid( obj.datebegin )? obj.datebegin : '';

        const license_link= '';
        let license_name  = '';

        let img           = valid( obj.primaryimageurl )? obj.primaryimageurl : '';
        let thumb         = img;

        // get authors
        if ( valid( obj.people ) ){

          if ( Array.isArray( obj.people ) ){

            $.each( obj.people, function ( j, a ) {

              if ( valid( a.display_name ) ){

                let author_url = '';

                /*
                if ( valid( a.author.id ) ){

                  // https://harvardartmuseums.org/collections/person/19885
                  let author_id = a.author.id.replace('https://openalex.org/', '');

                  author_url = ``;

                }
                */

                //const author_url = valid( a.author.id ) ? a.author.id : '';
                //const author_country = valid( a.countries ) ? a.countries[0] : '';

                // TODO: turn into a link
                //const author_country_icon = valid( author_country ) ? `<span title="${author_country} country flag" class="flag-icon flag-icon-${ author_country.toLowerCase() }"></span>` : '';

                let author_date = '';

                if ( valid( a.displaydate ) ){

                  author_date = ` (${a.displaydate})`; 

                }

                creators.push( `${a.display_name}${author_date}` );

                //creators.push( `<a onclick="openInFrame( &quot;${author_url}&quot; )" href="javascript:void(0)" title="author link" aria-label="author link" aria-role="button">${a.author.display_name}</a> ${author_country_icon}`);

              }

            });

          }

          if ( creators.length > 0 ){

            description = description + '<br/><br/><i class="fa-solid fa-users-line"></i> ' + creators.join(', ');

          }

        }

				const description_plain = description;
				description       			= highlightTerms( description );

        // fill fields
				let item = {
          source:       source,
					title:        title,
					description:  description,
					gid:          gid,
					display_url:  url, // url may get overidden later
					thumb:        thumb,
          start_date:   start_date,
					qid:          '',
          countries:    [],
          tags:         [],
          web_url:      url,
					// TODO: add fields: license link + license name
				};

        if ( valid( img ) ){

					// create IIIF-viewer-link
					let coll = { "images": [ ]};

          let source_name = datasources[ item.source ].name;

					coll.images.push( [ img, item.title, encodeURIComponent( description_plain + '<br/><br/>License: ' + license_link + '<br/><br/>' + license_name ), 'authors: ' + creators.join(', '), 'source: ' + source_name ] );

					if ( coll.images.length > 0 ){ // we found some images

						// create an IIIF image-collection file
						let iiif_manifest_link = '/app/response/iiif-manifest.php?l=en&single=true&t=' + encodeURIComponent( item.title ) + '&json=' + JSON.stringify( coll );

						let iiif_viewer_url = `https://${explore.host}${explore.base}/app/iiif/dist/uv.html#?c=&m=&s=&cv=&manifest=${ encodeURIComponent( iiif_manifest_link ) }`;

						item.iiif         = iiif_viewer_url;
						item.display_url  = encodeURIComponent( iiif_viewer_url );

					}

				}

				item.tags[0]	= 'work';
				item.tags[1]	= subtag;

				setWikidata( item, [ ], true, 'p' + explore.page );

        result.source.data.query.search.push( item ); 

        //console.log( item );

      });

      resolve( [ result ] );

    }

  });

}

function resolveHarvard( result, renderObject ){

  //console.log( 'resolveHarvard: ', result );

  const source = 'harvard';

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

function renderMarkHarvard( inputs, source, q_, show_raw_results, id ){

  // TODO

}