

const prompt = require('prompt-sync')()

let input = prompt("What do u want to do: ")

const todo = ['Nothing'];
while(input !== 'quit' && input !== 'q')
{
    if(input==='list')
    {
        console.log('=======================')
        for(let i=0;i<todo.length;i++)
        {
            console.log(`${i}: ${todo[i]}`);

        }
        console.log('=======================')
    }
    else if(input === 'new')
    {
        const newtodo = prompt("What do u want to add");
        todo.push(newtodo);
        console.log(`${newtodo} is add ..)`)
    }
    else if(input === 'delete')
    {
        const index = parseInt(prompt('Tell me the index'))
        if(!Number.isNaN(index))
        {
            todo.splice(index,1)
            console.log("Deleted ..)")
        }

    }

    input = prompt("What do u want to do: ");


}

console.log('Ok closed bye ..)')