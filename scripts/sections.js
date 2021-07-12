const coolProgression2 = () => {

    const fund = 2*randomFloat(160, 180) // 170.66666666666666;
    console.log(fund);

    const gainVal = 1;

    const oPA = ['pitch23', 'pitch26', 'pitch27'];
    const pA =  [ 'pitch23' , 'pitch25' , 'pitch27' , 'pitch1' , 'pitch3' , 'pitch7', 'pitch9' ];
    const pA3 =  [ 'pitch23' , 'pitch25' , 'pitch27' , 'pitch1' , 'pitch3' , 'pitch7' ]; // 'pitch23', 'pitch27'
    const pA2 = ['pitch23' , 'pitch27'];

    const c1 = [1, M2];
    const c1A = [1, M2, P4];
    const c1B = [1/M2/P4, 1, M2];

    const c2 = [1/M2, M2];
    const c2A = [1/M2/P5, 1, m3];

    const c3 = [1/M2/M6, 1, m3];

    // startTime, stopTime, bufferLength, rate, spliceDiv, fund, cArray, pArray, gainVal

    pitchedPresetSequenceSpliceTest(0,  8,  2, 0.5, 10, fund, c1, pA,  gainVal);
    pitchedPresetSequenceSpliceTest(8,  16, 2, 0.6, 10, fund, c2, pA,  gainVal);
    
    pitchedPresetSequenceSpliceTest(16, 24, 2, 0.5, 10, fund, c1, pA,  gainVal);
    pitchedPresetSequenceSpliceTest(24, 32, 2, 0.5, 10, fund, c2, pA,  gainVal);

    /*
    pitchedPresetSequenceSpliceTest(32, 40, randomFloat(4.79, 5.26), fund, c1,   pA2,  gainVal);
    pitchedPresetSequenceSpliceTest(40, 48, randomFloat(4.79, 5.26), fund, c2,   pA2,  gainVal);
    
    pitchedPresetSequenceSpliceTest(48, 56, randomFloat(4.79, 5.26), fund, c1A,  pA2,  gainVal);
    pitchedPresetSequenceSpliceTest(56, 64, randomFloat(4.79, 5.26), fund, c2,   pA2,  gainVal);
    
    pitchedPresetSequenceSpliceTest(64, 72, randomFloat(4.79, 5.26), fund, c1A,  pA2,  gainVal);
    pitchedPresetSequenceSpliceTest(72, 80, randomFloat(4.79, 5.26), fund, c2A,  pA2,  gainVal);
    
    pitchedPresetSequenceSpliceTest(80, 88, randomFloat(4.79, 5.26), fund, c1A,  pA2,  gainVal);
    pitchedPresetSequenceSpliceTest(88, 96, randomFloat(4.79, 5.26), fund, c2A,  pA2,  gainVal);

    // pitchedPresetSequenceSpliceTest(80, 88, randomFloat(5, 5.51), fund, c3,   pA2,  gainVal);
*/
}
