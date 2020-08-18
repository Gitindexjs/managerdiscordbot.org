let fields = []

function addField(title, value){
    fields.push({name: title, value: value});
    for(const field of fields){
        let fieldsElements = []
        let labels = ["Title:", "Text:"]
        for(let i = 0; i < 2; i++){
            const fieldElement = document.createElement("div");
            let label = document.createElement("p");
            let input = document.createElement("input");
            label.classList.add("fieldLabel");
            input.classList.add("fieldInput");
            label.innerText = labels[i];
            fieldElement.appendChild(label);
            fieldElement.appendChild(input);
            fieldsElements.push(fieldElement);
        }

        
        document.getElementById("finalFields").appendChild()
    }
}
function removeField(){
    fields.pop();
}

const outputResult = document.getElementById("jsonResult");
