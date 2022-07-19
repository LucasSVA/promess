const promessFunction = () => {
    return new Promise((resolve, reject) => {


        setTimeout(() => {
            const greet = "HEllo world"

            resolve(greet)

        }, 2000)

    })


}

promessFunction()