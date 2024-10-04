// let email =document.getElementById("Email");
// let password=document.getElementById("password");
// let button=document.getElementById("button");

// let emailpattern=/([A-Za-z0-9._-]+@[A-Za-z0-9]+\.[A-za-z0-9])\w+/;
// let passwordpattern=/^[a-zA-Z0-9!@#$%^&*]{6,16}$/;
//    button.addEventListener("click" ,()=>{
// let emailValue= email.value;



// let emailResult=emailpattern.test(emailValue)
// let passwordVal=password.value;
// let passResult2=passwordpattern.test(passwordVal);

// if(emailValue===""){
//     alert("Enter Your Email")
// }if(passwordVal===""){
//     alert("Enter Your passward")

// }if(emailResult===false){
//     alert("Email Value Is Invalid")
// }if(passResult2===false){
//     alert("Password Value Is Invalid")
// }

// async function fetchGithubUsers() {
//     const response = await fetch('https://dummyjson.com/auth/login', {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json"
//         },
//         body: JSON.stringify({
//             username: emailResult,
//             password: passResult2,
//             expiresInMins: 30
//         }),
//     })
//     const users = await response.json()
//     console.log(response)
//     console.log(users)
//     if (users) {
//         return users 
//     }

// }
// let usersData = fetchGithubUsers()
// usersData.then((data) => {
//     console.log('data', data)
//     if (data) {
//         localStorage.setItem('token', data.accessToken)
//         let token = localStorage.getItem('token')
//         if (token) {
//             location.href = './product/index.html'
//         }
//         console.log(token)
//     }
//     // alert(data[0].name)
// }).catch((error) => {
//     console.log(error)
//  })
//    });


// // async function fetchGithubUsers() {
// //     const response = await fetch('https://dummyjson.com/auth/login', {
// //         method: "POST",
// //         headers: {
// //             "Content-Type": "application/json"
// //         },
// //         body: JSON.stringify({
// //             username: 'emilys',
// //             password: 'emilyspass',
// //             expiresInMins: 30
// //         }),
// //     })
// //     const users = await response.json()
// //     console.log(response)
// //     console.log(users)
// //     if (users) {
// //         return users 
// //     }

// // }
// // let usersData = fetchGithubUsers()
// // usersData.then((data) => {
// //     console.log('data', data)
// //     if (data) {
// //         localStorage.setItem('token', data.accessToken)
// //         let token = localStorage.getItem('token')
// //         if (token) {
// //             location.href = './product/index.html'
// //         }
// //         console.log(token)
// //     }
// //     // alert(data[0].name)
// // }).catch((error) => {
// //     console.log(error)
// //  })
let userName=document.getElementById("Username");
let passward=document.getElementById("password");
let button=document.getElementById("button");
button.addEventListener("click",getuser)
async function getuser() {
    const response = await fetch('https://dummyjson.com/auth/login', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    username: userName.value,
                    password: passward.value,
                    expiresInMins: 30
                }),
            })
            const users = await response.json()
            return users 
          
         

}
let saveData;
button.addEventListener("click",async () => {
    saveData= await getuser()
    if (saveData) {
                localStorage.setItem('token', saveData.accessToken)
                let token = localStorage.getItem('token')
                if (saveData.username===userName.value || saveData.password===passward.value) {
                    if(token){
                        location.href = './product/product.html'

                    }
                }else(
                    alert("passward Invalid")
                )
                console.log(token)
            }
});
