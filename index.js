let dataArray = []

addRow = () => {
    dataArray.push({name: "Thanamatee" , sirname : "Yusiri"})
    let htmlStr = ""
    dataArray.forEach((data) => {
        htmlStr += `<tr>
                    <td>${data.name}</td>
                    <td>${data.sirname}</td>
                    </tr>`
    })
    document.getElementById('myTable').innerHTML = htmlStr
}

deleteRow=()=>{
    dataArray.pop()
    let htmlStr = ""
    dataArray.forEach((data) => {
        htmlStr += `<tr>
                    <td>${data.name}</td>
                    <td>${data.sirname}</td>
                    </tr>`
    })
    document.getElementById('myTable').innerHTML = htmlStr
}