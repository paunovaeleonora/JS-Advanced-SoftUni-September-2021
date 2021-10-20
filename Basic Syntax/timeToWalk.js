function solve(steps, footprint, speed) {
    let m = steps * footprint;
    let additMIns = Math.floor(m / 500);
    let mins = (m / speed* 1000) / 60 + additMIns;
    let sec = (m / speed * 1000) % 60;
    console.log(mins);
    console.log(sec);
    
    
}

solve(4000, 0.60, 5)