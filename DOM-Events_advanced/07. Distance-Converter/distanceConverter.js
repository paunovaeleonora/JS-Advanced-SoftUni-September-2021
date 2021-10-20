function attachEventsListeners() {
    const ratios = {
        m: 1,
        km: 1000,
        cm: 0.01,
        mm: 0.001,
        mi: 1609.34,
        yrd: 0.9144,
        ft: 0.3048,
        in: 0.0254
    };
    function convert(value, unit) {
        const inMeters = value / ratios[unit];
        console.log(inMeters);
        return {
            m: inMeters,
            km: inMeters * ratios.km,
            cm: inMeters * ratios.cm,
            mm: inMeters * ratios.mm,
            mi: inMeters * ratios.mi,
            yrd: inMeters * ratios.yrd,
            ft: inMeters * ratios.ft,
            in: inMeters * ratios.in
            }
    };

    
    document.getElementById('convert').addEventListener('click', onclick);
    function onclick() {
        let output = document.getElementById('outputDistance');
        let inputValue = document.getElementById('inputDistance').value;
        let selectedOptionInput = document.getElementById('inputUnits').value;
        let selectedOptionOutput = document.getElementById('outputUnits').value;
        let outputobj = convert(inputValue, selectedOptionOutput);
        output.value = outputobj[selectedOptionInput]
        
    }
    
}