const pieCards = [
    {
        pieName: 'Chess',
        pieImg: 'https://peartreekitchen.com/wp-content/uploads/2018/07/MSU-Chess-Pie-2.jpg',
        instructor: 'Callan'
    }, 
    {
        pieName: 'Coconut Creme',
        pieImg: 'https://images-gmi-pmc.edge-generalmills.com/59a09632-ffa1-4ad2-bcd5-a64ab96b2945.jpg',
        instructor: 'Zoe'
    }, 
    {
        pieName: 'Lemon Icebox',
        pieImg: 'https://www.savingdessert.com/wp-content/uploads/2011/03/Lemon-Icebox-Pie-1.jpg',
        instructor: 'Michael'
    }, 
    {
        pieName: 'OCharleys Caramel',
        pieImg: 'https://michaelswoodcraft.files.wordpress.com/2014/06/best-ever-caramel-pie.gif?w=474&zoom=2',
        instructor: 'Callan'
    }, 
    {
        pieName: 'Chocolate ganache',
        pieImg: 'https://livforcake.com/wp-content/uploads/2017/01/chocolate-ganache-tart-5-768x1152.jpg',
        instructor: 'Zoe'
    }, 
    {
        pieName: 'Moon',
        pieImg: 'https://moonpie.com/templates/moonpie_site/assets/img/double-decker-moonpie.png',
        instructor: 'Michael'
    }
];

const printToDom = (toPrint, divId) => {
    document.getElementById(divId).innerHTML += toPrint
}

const printPies = (piesArray) => {
    for (let i = 0; i < piesArray.length; i++) {
        const pieCards = piesArray[i];
        const domstring = ` 
        <div class="card">
            <h2>${pieCards.pieName}</h2>
            <img src=${pieCards.pieImg} alt= 'image of ${pieCards.pieName}' />
        </div>
        `

        printToDom(domstring, 'pie-zone')
        }

}

document.getElementById('my-button').addEventListener('click', () => {
    console.log('🐭');
})

printPies(pieCards);