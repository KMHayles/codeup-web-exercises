//TODO: Create a file named promises.js inside of your js directory and link it to an HTML file of your choice.

// done

//TODO: Generate a Personal Access Token for the GitHub API.

// done

//TODO: We will use this so that we don't get rate limited when talking to the GitHub API. You can add the token to your requests like this:

// done


//TODO: Create a function that accepts a GitHub username, and returns a promise that resolves returning just the date of the last commit that user made. Reference the github api documentation to achieve this.

(async function() {
"use strict";

//Justins walkthrough
//https://www.youtube.com/watch?v=L-Z_weCCcDY
//await instead of .then

await function dateOfLastCommit(username) {
    const url = `https://api.github.com/users/${username}/events/public`
    const options = {
        headers: {
            'Authorization': `token ${keys.github}`
        }
    }
    const eventsResponse = await fetch(url, options);
    const events = await eventsResponse.json();
    const pushEvents = events.filter(event => event.type = 'PushEvent');
    const mostRecentPush = pushEvents[0];
    const pushCreatedAt = mostRecentPush.created_at;
    return new Date(pushCreatedAt).toLocaleString();
}

const lastCommitDate = await dateOfLastCommit('KMHayles');
    console.log(lastCommitDate);

// function dateOfLastCommit (username){
//     const url = `https://api.github.com/users/${username}/events/public`
//     const options = {
//         headers: {
//             'Authorization': `token ${keys.github}`
//         }
//     }
//     return fetch(url, options)
//         .then(res => res.json())
//         .then(data => {
//             const pushEvents = data.filter(event => event.type = 'PushEvent')
//             const mostRecentPush = pushEvents[0];
//             const pushCreatedAt = mostRecentPush.created_at;
//             return new Date(pushCreatedAt).toLocaleString();
//         });
// }
//
// dateOfLastCommit('KMHayles').then((data) => {
//     console.log(data)
// })


})();


