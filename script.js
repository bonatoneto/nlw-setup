const form = document.querySelector('#form-habits')
const nlwSetup = new NLWSetup(form)
const button = document.querySelector("header button")

button.addEventListener('click', add)

function add() {
    const today = "01/01"
    const dayExists = nlwSetup.dayExists(today)

    if (dayExists) {
        alert("Esse dia já existe!")

    }

    nlwSetup.addDay(today)
}



/*
const data = {
    run: ['01-01', '01-02','01-03','01-04','01-05','01-06','01-07','01-08','01-09','01-10','01-11','01-12','01-13','01-14','01-15','01-16','01-17','01-18','01-19','01-20','01-21','01-22','01-23','01-24','01-25','01-26','01-27','01-28','01-29','01-30','01-31'],
    water: ['01-01', '01-02', '01-03'],
    food: ['01-02'],
    study: ['01-01'],
    domesticsTasks: ['01-01']
}



nlwSetup.setData(data)
nlwSetup.load()*/