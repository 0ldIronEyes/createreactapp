function choice( items)
{
    const index = Math.floor(Math.random() * items.length);
    return items[index];
}

function remove(items, item)
{
    const newitems = items.filter(i => i != item)
    if (items.length != newitems.length)
    {
        return newitems; 
    }
    return undefined;
}

export {choice, remove};