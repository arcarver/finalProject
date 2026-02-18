const key = '457bwambefy64g23crn7d8qf';
// const urlRH = 'https://reststop.randomhouse.com'
// test url 
const urlRH = 'https://reststop.randomhouse.com/resources/titles?start=0&max=4&expandLevel=0&onsaleStart=MM/dd/yyyy&onsaleEnd=MM/dd/yyyy&authorid=0&workid=0&keyword=Grisham%20Christmas'


async function getInfo() {
    try {
        const response = await fetch(
            'urlRH',
            {
                eaders: { "Accept": "application/json" },
            }
        );
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log(data);
        console.log(data.title);
        
    } catch (error) {
        console.error('Error fetching title:', error);
    }
        
    }
getInfo(data);