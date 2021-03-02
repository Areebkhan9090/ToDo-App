var  list = document.getElementById("list");

function addtodo(){
    var input = document.getElementById("inp-todo");


    if(input.value == ""){
        alert("write something")
    }

    else{
        var li =document.createElement("li");
        li.setAttribute("class","li");
        var p = document.createElement("p");
        p.setAttribute("class","text");
        var pText = document.createTextNode(input.value);
        p.appendChild(pText);
        li.appendChild(p);

        var editBtn = document.createElement("button");
        editBtn.setAttribute("class" , "editbtn");
        editBtn.setAttribute("onclick" , "edit(this)");
        var editText = document.createTextNode("Edit");
        editBtn.appendChild(editText);
        li.appendChild(editBtn);

        var delBtn = document.createElement("button");
        delBtn.setAttribute("class" , "deletebtn");
        delBtn.setAttribute("onclick" , "dele(this)");
        var delText = document.createTextNode("Delete");
        delBtn.appendChild(delText);
        li.appendChild(delBtn);
        
        list.appendChild(li);

        input.value = "";
    }
}

function clearAll(){
    list.innerHTML = "";
}

function edit(e){
    var val = e.parentNode.firstChild.firstChild.nodeValue;
    var editValue = prompt("Edit New Value : ");
    e.parentNode.firstChild.firstChild.nodeValue = editValue;
}

function dele(g){
    g.parentNode.remove();
}
    
