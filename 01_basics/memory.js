// Two types of memory

// Stack
// Heap

let youtubeName = "devraj"

let anotherName = youtubeName
anotherName = "sakshi"

console.log(youtubeName);
console.log(anotherName);

let userOne = {
    email: "devraj@google.com",
    upi: "devraj@ybl"
}

let userTwo = userOne

userTwo.email = "user2@google.com"

console.log(userOne.email);
console.log(userTwo.email);