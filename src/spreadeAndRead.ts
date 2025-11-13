const friends = ['Rahim', 'Karim']
const schoolFriends = ['pintu', 'chintu', 'bulbul']
const collegeFriends = ['Mr. smart', 'Mr very very smart']
friends.push(...schoolFriends)

const user = { name: 'maksudur', phoneNo: '01315906086' }

const otherInfo = { hobby: 'outgoing', favouriteColor: 'Black' }
const userInfo = { ...user, ...otherInfo }

// rest opeartor 

// const sendInvite = (friend1 : string, friend2 : string, friend3 : string) => {
//     console.log(`sent Invitaion to ${friend1}`);
//     console.log(`sent Invitaion to ${friend2}`);
//     console.log(`sent Invitaion to ${friend3}`);
// }
const sendInvite = (...friends : string[]) => {
   friends.forEach((friends:string) => console.log(`Send invitation to ${friends}`))
}

sendInvite('pintu', 'cingu', 'bulbul', 'chulbul')