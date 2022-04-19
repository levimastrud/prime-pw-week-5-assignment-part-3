console.log('***** Music Collection *****')
let collection = [];
function addToCollection (title, artist, yearPublished) {
let added = {
    title: title,
    artist: artist,
    yearPublished, yearPublished
}
collection.push(added);
return added;
}

console.log(addToCollection('In The Aeroplane Over The Sea', 'Neutral Milk Hotel', '1998'));
console.log(addToCollection('Yeezus', 'Kanye West', '2013'));
console.log(addToCollection('The Life Of Pablo', 'Kanye West', '2016'));
console.log(addToCollection(`I'm Wide Awake, It's Morning`, 'Bright Eyes', '2005'));
console.log(addToCollection('Love Is Overtaking Me', 'Arthur Russell', '2004'));
console.log(addToCollection('Common As Light And Love Are Red Valleys Of Blood', 'Sun Kil Moon', '2017'));

console.log(collection);

function showCollection ( array ) {
    console.log(array.length);
    for (let i = 0; i < array.length; i++) {
        console.log(array[i].title + ' by ' + array[i].artist + ', published in ' + array[i].yearPublished)
    }
}

console.log(showCollection(collection));
