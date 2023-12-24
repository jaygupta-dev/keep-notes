let txtBox = document.querySelector('#txt-box');
        let dataList = document.querySelector('#show-data');
        let btn = document.querySelector('#btn');

        let dataArray = [];
        let retArray = localStorage.getItem('TextValue');
        if (retArray != '') {
            dataArray = JSON.parse(retArray);
        }
        showArray();
        btn.addEventListener('click', () => {
            let txt = txtBox.value;
            if(txt != ''){
                dataArray.push(txt);
            }
            else{
                alert('write any text...');
            }
            console.log(dataArray);
            saveArray();

        });
        let saveArray = () => {
            let dataVal = JSON.stringify(dataArray);
            localStorage.setItem('TextValue', dataVal);
            showArray();
        }
        function showArray() {
            let displayList = '';
            dataArray.forEach((data,index)=>{
                displayList += `<div class="para">
                <p class="indx">${index + 1}</p><p class="text">${data}</p><p class="close" onclick="deleteArray(${index})">x</p>
            </div>`
            });
            dataList.innerHTML = displayList;
        }
        function deleteArray(x) {
            dataArray.splice(x, 1);
            saveArray(dataArray);
        }