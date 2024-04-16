function tabuada(){
    let n = document.getElementById('txtn')
    let tab = document.getElementById('seltab')
   
    if(n.value.length == 0 ){
        alert('Digite os número corretamente')
        
    }else {
        let number = Number(n.value)
        let c = 1 
        tab.innerHTML = ''
        while(c <= 10){
          let item = document.createElement('option')

          item.text = `${number} x ${c} = ${number*c}`
          item.value = `tab${c}`
          tab.appendChild(item)
          c++

        }

    }

    
  

}