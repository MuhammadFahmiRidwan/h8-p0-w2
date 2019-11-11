function konversiMenit(menit) {
let resultTime = 0
let resultMin = 0
let resultSec = 0

if (menit < 60) {
    resultMin = '0';
    resultSec = menit;
} else {
    resultMin = Math.round(menit/60);
    resultSec = menit%60;
    if (resultSec < 10) {
        resultSec = '0' + resultSec;
    } else {
        resultSec = resultSec;
    }
}
resultTime =  resultMin + ':' + resultSec;
return resultTime;
}

  // TEST CASES
  console.log(konversiMenit(63)); // 1:03
  console.log(konversiMenit(124)); // 2:04
  console.log(konversiMenit(53)); // 0:53
  console.log(konversiMenit(88)); // 1:28
  console.log(konversiMenit(120)); // 2:00