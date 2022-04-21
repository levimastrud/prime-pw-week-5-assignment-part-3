console.log('***** Music Collection *****')

let collection = [];
function addToCollection (title, artist, yearPublished) {
    let added = {
        title: title,
        artist: artist,
        yearPublished: yearPublished,
        tracks: []
}
collection.push(added);
return added;
}

//Testing addToCollection
console.log(addToCollection('In The Aeroplane Over The Sea', 'Neutral Milk Hotel', '1998'));
console.log(addToCollection('Yeezus', 'Kanye West', '2013'));
console.log(addToCollection('The Life Of Pablo', 'Kanye West', '2016'));
console.log(addToCollection(`I'm Wide Awake, It's Morning`, 'Bright Eyes', '2005'));
console.log(addToCollection('Love Is Overtaking Me', 'Arthur Russell', '2004'));
console.log(addToCollection('Common As Light And Love Are Red Valleys Of Blood', 'Sun Kil Moon', '2017'));
console.log(addToCollection('Yes Indeed!', 'Ray Charles', '1957')); //Used to test if search function is working

function addTracks (title, trackName, duration) {
    let track = {
        trackName: trackName, 
        duration: duration
    }
    for (let i = 0; i < collection.length; i++) {
        if (collection[i].title === title) {
            collection[i].tracks.push(track);
        }
    }
    return true;
}

//Testing addTracks
addTracks('Yeezus', 'On Sight', '2:36');
addTracks('Yeezus', 'Black Skinhead', '3:08');
addTracks('Yeezus', 'I Am A God', '3:51');
addTracks('Yeezus', 'New Slaves', '4:16');
addTracks('Yeezus', 'On Sight', '2:36');
addTracks(`I'm Wide Awake, It's Morning`, 'At The Bottom of Everything', '4:33');
addTracks(`I'm Wide Awake, It's Morning`, `We Are Nowhere and It's Now`, '4:12');

function showCollection ( array ) {
    console.log(array.length);
    for (let i = 0; i < array.length; i++) {
        console.log(` ${array[i].title} by ${array[i].artist} published in ${array[i].yearPublished}`)
    }
    return true;
}

console.log(showCollection(collection));

function findByArtist ( artist ) {
    let results = [];
    for (let i = 0; i < collection.length; i++) {
        if (collection[i].artist === artist) {
            results.push(artist);
        }
    }
    console.log(results.length)
    return results;
}

console.log(findByArtist('Kanye West'))

function search ( object ) {
    let results = [];
    let undefinedResults = [];
    for (let i = 0; i < collection.length; i++) {
        if (object === undefined) {
            for ( let i = 0; i < collection.length; i++ ) {
                undefinedResults.push(collection[i].artist)
            }
            return undefinedResults;
        }
        if ( object.artist === collection[i].artist) {
            results.push(object.artist);
        }
        if ( object.yearPublished === collection[i].yearPublished) {
            results.push(object.yearPublished);
        }
        if ( object.title === collection[i].title) {
            results.push(object.title);
        }
        if ( object.trackName === collection[i].tracks.trackName) {
            results.push(object.trackName);        }
    }
    return results;
}

console.log(search({ artist: 'Ray Charles', yearPublished: `1957` }));

console.log(search({ trackName: 'On Sight', title: 'Yeezus' }));

console.log(search());