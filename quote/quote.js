let quote = document.querySelector('.quote');
let author = document.querySelector('#person');
let button = document.querySelector('.new-button');



// here we will be cretaing one array of objetcs 

let quotes = [
    {
        quote : '"The best way to find yourself is to lose yourself in the service of others"',
        author: "Mahatma Gandhi"
    },
    {
        quote : '"Be away from people who try belittle your ambitions. Small people always do that, but the really great make you feel that you too can become great."',
        author : "Mark Twain"
    },
    {
        quote : '"Life is a journey not a desitnation"',
        author: "Ralph Waldo Emerson"
    },
    {
        quote: '“You know, Hobbes, some days even my lucky rocketship underpants don\'t help.”',
        author:'Bill Watterson'
    },
    {
        quote: '“I haven\'t had a very good day. I think I might still be hungover and everyone\'s dead and my root beer\'s gone.”',
        author: 'Holly Black'
    },
    {
        quote: '“But I am very poorly today & very stupid & I hate everybody & everything. One lives only to make blunders.”',
        author: 'Charles Darwin'
    },
    {
        quote: '"Everything is hard before it is easy."',
        author: 'Johann Wolfgang von Goethe'
    },    {
        quote: '"Don\'t let your happiness depend on something you may lose."',
        author: 'C.S. Lewis'
    },    {
        quote: '"It hurt because it mattered."',
        author: 'John green'
    },
    {
        quote: '"I do the very best I know how - The very best I can; and I mean to keep on doing so until the end."',
        author: "Abraham Lincoln"
    }


]


// here we will create the event listeners 
button.addEventListener('click', function() {
    let random = Math.floor(Math.random()*100)%quotes.length;
    // the above line will generate a random number of the array range 
    quote.innerText = quotes[random].quote;
    author.innerText = quotes[random].author;
})
