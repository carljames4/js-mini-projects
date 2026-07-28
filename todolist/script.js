        let list = [];

        function addList() {
            let value = document.getElementById("input").value;

            list.push(value);

            showList();
        }

        function showList() {
            let text = ""
            for(let i = 0; i < list.length ; i++) {
                text += `${list[i]} <button onclick="deletelist(${i})">delete</button><br>`;

            }
                document.getElementById("output").innerHTML = text;
        }

        function deleteList(index) {
            list.splice(index, 1);
            showlist();
n        }
