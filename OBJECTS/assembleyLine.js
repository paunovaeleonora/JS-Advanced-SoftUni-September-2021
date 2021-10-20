function createAssembleyLine() {
    return {
        hasClima: function(obj) {
            if (obj.temp == undefined) {
                obj.temp = 21
            };
            if (obj.tempSettings == undefined) {
                obj.tempSettings = 21
            };
            obj.adjustTemp = function() {
                if (obj.temp < obj.tempSettings) {
                    obj.temp++;
                }else if (obj.temp > obj.tempSettings) {
                    obj.temp--;
                }
            };
        },

        hasAudio: function(obj) {
            obj.currentTrack = null;
            obj.nowPlaying = function() {
                if (obj.currentTrack != null) {
                    console.log(`Now playing '${obj.currentTrack.name}' by ${obj.currentTrack.artist}`);
                }
            };
        },

        hasParktronic: function(obj) { 
            obj.checkDistance = function(distance) {
                if (distance < 0.1) {
                    console.log('Beep! Beep! Beep!');
                }else if (distance >= 0.1 && distance < 0.25) {
                    console.log('Beep! Beep!');

                }else if (distance >= 0.25 && distance < 0.5) {
                    console.log('Beep!');
                }else {
                    console.log('');
                }
            }
            
        },
    }
}

const assembleyLine = createAssembleyLine();
const myCar = {
    make: 'Toyota',
    model: 'Aventis'
}
assembleyLine.hasClima(myCar);
console.log(myCar.temp);
myCar.tempSettings = 18;
myCar.adjustTemp();
console.log(myCar.temp);

assembleyLine.hasAudio(myCar);
myCar.currentTrack = {
    name: 'Never Gonna Give You Up',
    artist: 'Rick Astley'
};
myCar.nowPlaying();

assembleyLine.hasParktronic(myCar);
myCar.checkDistance(0.4);
myCar.checkDistance(0.2);

console.log(myCar);


