function hashStringToInt(s, tableSize){
    let hash = 17; 

    for(let i = 0; i < s.length; i++){
        hash = (13 * hash * s.charCodeAt(i)) % tableSize
    }
    return hash; 
}

class HashTable{

    

    table = new Array(2001)
    numItems = 0; 
     

     resize = () => {
        const newTable = new Array(table.length * 2)
        this.table.forEach(item => {
            if (item){
                item.forEach((key, value) => {
                    const index = hashStringToInt(key, newTable.length); 
            
                    if(newTable(index)){
                        newTable[index].push([key, value])
                    } else {
                        newTable[index] = [[key, value]]
                    }
                    newTable[index] = value
                });
            }
        });
        this.table = newTable
    };

   
    setItem = (key, value) => {
        this.numItems++
        const loadFactor = this.numItems / this.table.length
        const index = hashStringToInt(key, this.table.length)
        if(loadFactor > .8){
            this.resize()
        }
        if(this.table[index]){
            this.table[index].push([key, value])
        } else {
            this.table[index] = [[key, value]]
        }
    }; 
    
    getItem = key => {
        const index = hashStringToInt(key, this.table.length); 
        if (!this.table[index]){
            return null;
        }
        return this.table[index].find(x => x[0] === key[1])
    }
}

const myTable = new HashTable(); 
