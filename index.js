//---- ex -1

// const seyHello = () => {
//     return new Promise((resolve, reject) => {

//         setTimeout(() => {
//             const greet = "HEllo WORLD"

//             resolve(greet)

//         }, 2000)

//     })

// }


// const waitForMyResults = async () => {

//     const result = await promessFunction()
//     console.log(result);

// }

// waitForMyResults()



// ----ex 2


// const weather = () => {
//     return new Promise((resolve, reject) => {

//         setTimeout(() => {
//             const temperature = 2

//             if (temperature <= 10) {
//                 resolve("il fait froit")

//             } else {
//                 reject("il fait chaud")
//             }

//         }, 4000)
//     })

// }

// const waitForWeather = async () => {

//     try {
//         const result = await weather()
//         console.log(result);
//     } catch (error) {
//         console.log(error);

//     }

// }

// waitForWeather()



/// ------- ex - 3 




const dishes = () => {
    return new Promise((resolve, reject) => {

        setTimeout(() => {

            resolve("j'ai fini la lessive")

        }, 3000)

    })

}

const loundry = () => {
    return new Promise((resolve, reject) => {

        setTimeout(() => {

            resolve("j'ai fini la vaisselle")

        }, 2000)

    })

}

const waitForHousework = async () => {
    console.log("je commence la lessive");
    const result1 = await dishes()
    console.log(result1);

    console.log("je commence la vaisselle");
    const result2 = await loundry()
    console.log(result2);

    console.log("J'ai fini de faire le ménage");



}
waitForHousework()