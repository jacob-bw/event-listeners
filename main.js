const pies = [
    {
        pieName: 'Chess',
        pieImg: 'https://peartreekitchen.com/wp-content/uploads/2018/07/MSU-Chess-Pie-2.jpg',
        instructor: 'callan'
    }, 
    {
        pieName: 'Coconut Creme',
        pieImg: 'https://images-gmi-pmc.edge-generalmills.com/59a09632-ffa1-4ad2-bcd5-a64ab96b2945.jpg',
        instructor: 'zoe'
    }, 
    {
        pieName: 'Lemon Icebox',
        pieImg: 'https://www.savingdessert.com/wp-content/uploads/2011/03/Lemon-Icebox-Pie-1.jpg',
        instructor: 'michael'
    }, 
    {
        pieName: 'OCharleys Caramel',
        pieImg: 'https://michaelswoodcraft.files.wordpress.com/2014/06/best-ever-caramel-pie.gif?w=474&zoom=2',
        instructor: 'callan'
    }, 
    {
        pieName: 'Chocolate ganache',
        pieImg: 'https://livforcake.com/wp-content/uploads/2017/01/chocolate-ganache-tart-5-768x1152.jpg',
        instructor: 'zoe'
    }, 
    {
        pieName: 'Moon',
        pieImg: 'https://moonpie.com/templates/moonpie_site/assets/img/double-decker-moonpie.png',
        instructor: 'michael'
    }
];

const printToDom = (toPrint, divId) => {
    document.getElementById(divId).innerHTML = toPrint
}

    const printPies = (piesArray) => {
            let domString = ''
        for (let i = 0; i < piesArray.length; i++) {
            const pieCard = piesArray[i]
            domString += ` 
            <div class="card">
                <h2>${pieCard.pieName}</h2>
                <img src=${pieCard.pieImg} alt= 'Image of ${pieCard.pieName}' />
            </div>
            `
        }
        printToDom(domString, 'pie-zone')
    }
 
const buttonClick = (e) => {
    const instructor = e.target.id
    const selectedPies = []
    for (let i = 0; i < pies.length; i++) {
        const pie = pies[i];
        if (pie.instructor === instructor) {
            selectedPies.push(pie)
        }
    }

    if (instructor === 'all') {
        printPies(pies);
    } else {
        printPies(selectedPies);
    }
    
}

document.getElementById('zoe').addEventListener('click', buttonClick)
document.getElementById('michael').addEventListener('click', buttonClick)
document.getElementById('greg').addEventListener('click', buttonClick)
document.getElementById('callan').addEventListener('click', buttonClick)
document.getElementById('all').addEventListener('click', buttonClick)

printPies(pies);

// document.getElementById('my-button').addEventListener('click', (e) => {
//    console.log('🐭');
// })

//document.getElementById('zoe').addEventListener('click', (e) => {
    // figure out WHO the instructor is for the clicked on button
  //  const instructor = e.target.id
    // only get those pies
    //const selectedPies = []
    //for (let i = 0; i < pies.length; i++) {
      //  const pie = pies[i];
        //if (pie.instructor === instructor) {
          //  selectedPies.push(pie)
        //}
    //}
    
    // pass small list of pies back into the pie builder

//