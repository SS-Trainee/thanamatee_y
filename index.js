let dataArray = []

calculateArray = (array) => {
    let htmlStr = ""
    array.forEach((data) => {
        htmlStr += `<tr>
                    <td>${data.name}</td>
                    <td>${data.sirname}</td>
                    </tr>`
    })
    document.getElementById('myTable').innerHTML = htmlStr
}

addRow = () => {
    dataArray.push({name: "Earth" , sirname : "earth"})
    calculateArray(dataArray)
}

deleteRow=() => {
    dataArray.pop()
    calculateArray(dataArray)
}