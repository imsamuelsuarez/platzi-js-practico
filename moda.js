const elements = [1, 2, 3, 1, 2, 3, 4, 2, 2, 2, 1]

const firstListCount = {}

firstListCount.map(
    function(elements)
    {
        if(firstListCount[elements])
        {
            firstListCount[elements] += 1;
        }
        firstListCount[elements] = 1;
    }
)