function constructionCrew(worker) {
    if (worker.dizziness == true) {
        worker.levelOfHydrated += worker.experience* worker.weight *  0.1;
        worker.dizziness = false;
    }
    return worker;
    
}

data = { weight: 120,
    experience: 20,
    levelOfHydrated: 200,
    dizziness: true };
console.log(constructionCrew(data));